import {describe, expect, test} from "bun:test"
import {DxfScene} from "../src/DxfScene.js"
import {DxfViewer} from "../src/DxfViewer.js"
import {ReadOleSpreadsheet} from "../src/OleSpreadsheetRenderer.js"
import DxfParser from "../src/parser/DxfParser.js"
import * as CFB from "cfb"
import * as ExcelJS from "exceljs/dist/exceljs.min.js"
import * as three from "three"

function MakeEmfHeader() {
    const bytes = new Uint8Array(88)
    const view = new DataView(bytes.buffer)
    view.setUint32(0, 1, true)
    view.setUint32(4, 88, true)
    view.setUint32(40, 0x464d4520, true)
    view.setUint32(48, 88, true)
    view.setUint32(52, 1, true)
    return Array.from(bytes, value => value.toString(16).padStart(2, "0")).join("")
}

function MakeOleDxf() {
    return [
        "0", "SECTION", "2", "TABLES",
        "0", "TABLE", "2", "LAYER", "70", "1",
        "0", "LAYER", "5", "1EB", "2", "_aAVAC", "70", "0", "62", "7", "290", "1",
        "0", "ENDTAB", "0", "ENDSEC",
        "0", "SECTION", "2", "ENTITIES",
        "0", "OLE2FRAME", "5", "A1", "330", "1F", "100", "AcDbEntity", "8", "_aAVAC",
        "100", "AcDbOle2Frame", "70", "2",
        "10", "1", "20", "2", "30", "0",
        "11", "4", "21", "0", "31", "0",
        "90", "88", "310", MakeEmfHeader(),
        "0", "ENDSEC", "0", "EOF"
    ].join("\n")
}

describe("DXF extensions", () => {
    test("extracts an embedded EMF presentation from OLE2FRAME", async () => {
        const dxf = new DxfParser().parseSync(MakeOleDxf())
        const dxfScene = new DxfScene({
            sceneOptions: {layout: "Model", suppressPaperSpace: true}
        })

        await dxfScene.Build(dxf, [])

        expect(dxfScene.scene.oleFrames).toHaveLength(1)
        expect(dxfScene.scene.oleFrames[0].oleData.byteLength).toBe(88)
        expect(dxfScene.scene.oleFrames[0].emfData.byteLength).toBe(88)
        expect(dxfScene.scene.oleFrames[0].vertices).toEqual([
            {x: 0, y: 0},
            {x: 3, y: 0},
            {x: 3, y: -2},
            {x: 0, y: -2}
        ])
    })

    test("suppresses non-plot layers by default", () => {
        const dxfScene = new DxfScene({sceneOptions: {}})
        dxfScene.layers.set("_CA_Aux", {
            name: "_CA_Aux",
            frozen: false,
            visible: true,
            plot: false
        })

        expect(dxfScene._FilterEntity({layer: "_CA_Aux"})).toBe(false)
    })

    test("projects paper-space viewports with the current camera transform", () => {
        const viewer = Object.create(DxfViewer.prototype)
        Object.assign(viewer, {
            canvasWidth: 1000,
            canvasHeight: 707,
            origin: {x: -1189, y: 0},
            modelOrigin: {x: -50.47, y: -44.86},
            camera: new three.OrthographicCamera(-1, 1, 1, -1, 0.1, 2),
            viewportCamera: new three.OrthographicCamera(-1, 1, 1, -1, 0.1, 2),
            modelScene: {},
            layers: new Map()
        })

        const paperWidth = Math.max(1189, 841 * viewer.canvasWidth / viewer.canvasHeight) * 1.1
        const paperHeight = paperWidth * viewer.canvasHeight / viewer.canvasWidth
        viewer.camera.left = -paperWidth / 2
        viewer.camera.right = paperWidth / 2
        viewer.camera.top = paperHeight / 2
        viewer.camera.bottom = -paperHeight / 2
        viewer.camera.position.set(594.5, 420.5, 1)
        viewer.camera.updateMatrix()
        viewer.camera.updateProjectionMatrix()

        const calls = {}
        viewer.renderer = {
            setViewport: (...args) => { calls.viewport = args },
            setScissor: (...args) => { calls.scissor = args },
            setScissorTest: () => {},
            clearDepth: () => {},
            render: () => { calls.rendered = true }
        }

        viewer._RenderViewport({
            center: {x: -594.5, y: 420.5},
            width: 1189,
            height: 841,
            viewCenter: {x: 29.725, y: 10.8337},
            viewHeight: 42.05,
            viewTwistAngle: 0
        })

        expect(calls.rendered).toBe(true)
        expect(calls.viewport[0]).toBeLessThan(50)
        expect(calls.viewport[2]).toBeGreaterThan(900)
        expect(calls.scissor).toEqual(calls.viewport)
    })

    test("clips zoomed paper-space viewports without changing model-to-screen mapping", () => {
        const viewer = Object.create(DxfViewer.prototype)
        Object.assign(viewer, {
            canvasWidth: 1000,
            canvasHeight: 700,
            origin: {x: 0, y: 0},
            modelOrigin: {x: 0, y: 0},
            camera: new three.OrthographicCamera(-5, 5, 3.5, -3.5, 0.1, 2),
            viewportCamera: new three.OrthographicCamera(-1, 1, 1, -1, 0.1, 2),
            modelScene: {},
            layers: new Map()
        })
        viewer.camera.position.set(20, 10, 1)
        viewer.camera.updateProjectionMatrix()
        viewer.camera.updateMatrixWorld(true)

        const calls = {}
        viewer.renderer = {
            setViewport: (...args) => { calls.viewport = args },
            setScissor: (...args) => { calls.scissor = args },
            setScissorTest: () => {},
            clearDepth: () => {},
            render: () => { calls.rendered = true }
        }
        const viewport = {
            center: {x: 0, y: 0},
            width: 100,
            height: 100,
            viewCenter: {x: 0, y: 0},
            viewHeight: 100,
            viewTwistAngle: 0
        }
        const paperBottomLeft = new three.Vector3(-50, -50, 0).project(viewer.camera)
        const paperTopRight = new three.Vector3(50, 50, 0).project(viewer.camera)
        const fullX = (paperBottomLeft.x + 1) * viewer.canvasWidth / 2
        const fullY = (paperBottomLeft.y + 1) * viewer.canvasHeight / 2
        const fullWidth = (paperTopRight.x - paperBottomLeft.x) * viewer.canvasWidth / 2
        const fullHeight = (paperTopRight.y - paperBottomLeft.y) * viewer.canvasHeight / 2
        const modelPoint = new three.Vector3(22, 12, 0)
        const expectedX = fullX + (modelPoint.x / 100 + 0.5) * fullWidth
        const expectedY = fullY + (modelPoint.y / 100 + 0.5) * fullHeight

        viewer._RenderViewport(viewport)

        expect(calls.rendered).toBe(true)
        expect(calls.viewport).toEqual([0, 0, 1000, 700])
        expect(calls.scissor).toEqual(calls.viewport)
        const clippedPoint = modelPoint.clone().project(viewer.viewportCamera)
        const actualX = calls.viewport[0] + (clippedPoint.x + 1) * calls.viewport[2] / 2
        const actualY = calls.viewport[1] + (clippedPoint.y + 1) * calls.viewport[3] / 2
        expect(actualX).toBeCloseTo(expectedX, 6)
        expect(actualY).toBeCloseTo(expectedY, 6)
    })

    test("reads the active worksheet and its borders from packaged OLE workbook data", async () => {
        const excelApi = ExcelJS.Workbook ? ExcelJS : ExcelJS.default
        const workbook = new excelApi.Workbook()
        workbook.addWorksheet("First")
        const worksheet = workbook.addWorksheet("Table")
        workbook.views = [{activeTab: 1}]
        worksheet.getCell("A1").value = "Header"
        worksheet.getCell("A1").border = {bottom: {style: "medium"}}
        const packageData = new Uint8Array(await workbook.xlsx.writeBuffer())
        const cfbApi = CFB.read ? CFB : CFB.default
        const container = cfbApi.utils.cfb_new()
        cfbApi.utils.cfb_add(container, "Package", packageData)
        const oleData = cfbApi.write(container, {type: "array"}).buffer

        const spreadsheet = await ReadOleSpreadsheet(oleData)

        expect(spreadsheet.worksheet.name).toBe("Table")
        expect(spreadsheet.worksheet.getCell("A1").border.bottom.style).toBe("medium")
    })

    test("maps OLE frames from upper-left DXF corners without flipping the raster", () => {
        const viewer = Object.create(DxfViewer.prototype)
        const geometry = viewer._CreateImageGeometry([
            {x: 0, y: 2},
            {x: 4, y: 2},
            {x: 4, y: 0},
            {x: 0, y: 0}
        ], [
            0, 1,
            1, 1,
            1, 0,
            0, 0
        ])

        expect(Array.from(geometry.getAttribute("uv").array)).toEqual([
            0, 1,
            1, 1,
            1, 0,
            0, 0
        ])
        geometry.dispose()
    })
})
