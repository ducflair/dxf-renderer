import {describe, expect, test} from "bun:test"
import {DxfScene} from "../src/DxfScene.js"
import {DxfViewer} from "../src/DxfViewer.js"
import {ReadOleSpreadsheet} from "../src/OleSpreadsheetRenderer.js"
import DxfParser from "../src/parser/DxfParser.js"
import * as CFB from "cfb"
import * as ExcelJS from "exceljs/dist/exceljs.min.js"
import * as three from "three"
import {triangulateSolidHatch} from "../src/SolidHatch.js"
import {MTextFormatParser} from "../src/MTextFormatParser.js"

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

function MakeViewportDxf() {
    return [
        "0", "SECTION", "2", "ENTITIES",
        "0", "VIEWPORT", "10", "15", "20", "10", "30", "0",
        "12", "22", "22", "12",
        "17", "-2032", "27", "10054", "37", "0",
        "40", "30", "41", "20", "45", "100", "51", "0", "69", "2",
        "0", "ENDSEC", "0", "EOF"
    ].join("\n")
}

function MakeHatchWithHoleDxf() {
    return [
        "0", "SECTION", "2", "ENTITIES",
        "0", "HATCH", "5", "8B14", "100", "AcDbEntity", "8", "0", "100", "AcDbHatch",
        "2", "SOLID", "70", "1", "91", "2",
        "92", "1", "93", "1", "72", "2",
        "10", "0", "20", "0", "40", "10", "50", "0", "51", "360", "73", "1",
        "97", "1", "330", "OUTER",
        "92", "16", "93", "1", "72", "2",
        "10", "0", "20", "0", "40", "5", "50", "0", "51", "360", "73", "1",
        "97", "1", "330", "INNER",
        "75", "0", "76", "1", "98", "1", "10", "0", "20", "7",
        "0", "ENDSEC", "0", "EOF"
    ].join("\n")
}

describe("DXF extensions", () => {
    test("solid hatches preserve disjoint shells, holes, and nested islands", () => {
        const square = (x: number, y: number, size: number) => [
            {x, y}, {x: x + size, y}, {x: x + size, y: y + size}, {x, y: y + size}
        ];
        const loops = [square(2, 2, 6), square(20, 0, 5), square(3, 3, 2), square(0, 0, 10)];
        const area = (style: number) => {
            const {vertices: v, indices} = triangulateSolidHatch(loops, style);
            let sum = 0;
            for (let i = 0; i < indices.length; i += 3) {
                const [a, b, c] = indices.slice(i, i + 3).map(index => v[index]);
                sum += Math.abs((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)) / 2;
            }
            return sum;
        };
        expect(area(0)).toBe(93);
        expect(area(1)).toBe(89);
        expect(area(2)).toBe(125);
    });

    test("preserves every hatch boundary after non-spline edge source references", () => {
        const hatch = new DxfParser().parseSync(MakeHatchWithHoleDxf()).entities[0];
        expect(hatch.boundaryLoops).toHaveLength(2);
        expect(hatch.boundaryLoops.map(loop => loop.sourceRefs)).toEqual([["OUTER"], ["INNER"]]);
        expect(hatch.boundaryLoops.map(loop => loop.edges[0].radius)).toEqual([10, 5]);
    });

    test("retains inline bold italic fonts and CAD line breaks", () => {
        const parser = new MTextFormatParser();
        parser.Parse("\\fArial|b1|i1;A^JB");
        expect(parser.GetContent()[0].fontName).toBe("Arial Bold Italic");
        expect(parser.GetContent().filter(item => item.type === MTextFormatParser.EntityType.PARAGRAPH)).toHaveLength(1);
    });

    test("parses DXF caret-I and literal tabs as MTEXT tab stops", () => {
        const parser = new MTextFormatParser();
        parser.Parse("AC^I AIR CONDITIONING\\PB.O.\tBOTTOM OF");
        const content = parser.GetContent();
        expect(content.filter(item => item.type === MTextFormatParser.EntityType.TAB)).toHaveLength(2);
        expect([...parser.GetText()].join("")).toBe("AC AIR CONDITIONINGB.O.BOTTOM OF");
    });

    test("parses a viewport WCS view target", () => {
        const viewport = new DxfParser().parseSync(MakeViewportDxf()).entities[0];
        expect(viewport.viewTarget).toEqual({x: -2032, y: 10054, z: 0});
    });

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

        const calls: Record<string, any> = {}
        viewer.renderer = {
            setViewport: (...args: any[]) => { calls.viewport = args },
            setScissor: (...args: any[]) => { calls.scissor = args },
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
        const viewer: any = Object.create(DxfViewer.prototype)
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

        const calls: Record<string, any> = {}
        viewer.renderer = {
            setViewport: (...args: any[]) => { calls.viewport = args },
            setScissor: (...args: any[]) => { calls.scissor = args },
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
        const viewTarget = {x: -2032, y: 10054};
        Object.assign(viewport, {viewTarget});
        const paperBottomLeft = new three.Vector3(-50, -50, 0).project(viewer.camera)
        const paperTopRight = new three.Vector3(50, 50, 0).project(viewer.camera)
        const fullX = (paperBottomLeft.x + 1) * viewer.canvasWidth / 2
        const fullY = (paperBottomLeft.y + 1) * viewer.canvasHeight / 2
        const fullWidth = (paperTopRight.x - paperBottomLeft.x) * viewer.canvasWidth / 2
        const fullHeight = (paperTopRight.y - paperBottomLeft.y) * viewer.canvasHeight / 2
        const modelPoint = new three.Vector3(22 + viewTarget.x, 12 + viewTarget.y, 0)
        const expectedX = fullX + ((modelPoint.x - viewTarget.x) / 100 + 0.5) * fullWidth
        const expectedY = fullY + ((modelPoint.y - viewTarget.y) / 100 + 0.5) * fullHeight

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
        const excelApi: any = ExcelJS.Workbook ? ExcelJS : (ExcelJS as any).default
        const workbook = new excelApi.Workbook()
        workbook.addWorksheet("First")
        const worksheet = workbook.addWorksheet("Table")
        workbook.views = [{activeTab: 1} as any]
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

    test("DxfScene constructor accepts options with textOptions without getter conflict", () => {
        const options = {
            sceneOptions: {
                textOptions: {
                    curveSubdivision: 6,
                    fallbackChar: "#"
                }
            }
        };
        const scene = new DxfScene(options);
        expect(scene.options.textOptions.curveSubdivision).toBe(6);
        expect(scene.options.textOptions.fallbackChar).toBe("#");
    });

    test("populates paper-space entities and viewports from layout block records", async () => {
        const dxf = {
            tables: {
                layer: {
                    layers: {
                        "0": { name: "0", color: 7, handle: "10" }
                    }
                }
            },
            blocks: {
                "*Paper_Space747": {
                    name: "*Paper_Space747",
                    handle: "67B8",
                    ownerHandle: "67B5",
                    entities: [
                        {
                            type: "LINE",
                            layer: "0",
                            vertices: [
                                { x: 0, y: 0, z: 0 },
                                { x: 30, y: 20, z: 0 }
                            ]
                        },
                        {
                            type: "VIEWPORT",
                            layer: "0",
                            viewportId: 2,
                            status: 1,
                            center: { x: 15, y: 10, z: 0 },
                            width: 30,
                            height: 20,
                            viewHeight: 100
                        }
                    ]
                }
            },
            layouts: [
                { name: "Model", isModel: true, handle: "27", blockRecordHandle: "1E" },
                { name: "Sheet1", isModel: false, handle: "67BA", blockRecordHandle: "67B5" }
            ],
            entities: []
        };

        const scene = new DxfScene({
            sceneOptions: { layout: "Sheet1", suppressPaperSpace: false }
        });
        await scene.Build(dxf as any, []);

        expect(scene.scene.batches.length).toBeGreaterThan(0);
        expect(scene.scene.bounds).not.toBeNull();
        expect(scene.scene.bounds.maxX).toBe(30);

        const layoutBlock = dxf.blocks["*Paper_Space747"];
        const candidateEntities = [
            ...(dxf.entities as any[]),
            ...(layoutBlock.entities as any[]).map((e: any) => ({ ...e, inPaperSpace: true }))
        ];
        const viewports = candidateEntities.filter(entity =>
            entity.type === "VIEWPORT" &&
            entity.inPaperSpace &&
            (entity.viewportId ?? 0) > 1
        );
        expect(viewports).toHaveLength(1);
        expect(viewports[0].viewportId).toBe(2);
        expect(viewports[0].width).toBe(30);
    });

    test("does not wrap MText into single-word columns when width is smaller than font size", async () => {
        const fontBuffer = (await import("fs")).readFileSync(new URL("../demo/fonts/Roboto-Regular.ttf", import.meta.url));
        const fontData = (await import("opentype.js")).parse(fontBuffer.buffer.slice(fontBuffer.byteOffset, fontBuffer.byteOffset + fontBuffer.byteLength));
        const fontFetcher = async () => fontData;

        const { TextRenderer } = await import("../src/TextRenderer.js");
        const { MTextFormatParser } = await import("../src/MTextFormatParser.js");

        const renderer = new TextRenderer([fontFetcher]);
        await renderer.FetchFonts("DISCLAIMER: THESE PLANS ARE NOT FOR CONSTRUCTION PURPOSE OR PERMITS.");

        const parser = new MTextFormatParser();
        parser.Parse("DISCLAIMER: THESE PLANS ARE NOT FOR CONSTRUCTION PURPOSE OR PERMITS.");

        const entities = Array.from(renderer.RenderMText({
            formattedText: parser.GetContent(),
            position: { x: 0, y: 0 },
            fontSize: 96,
            width: 0.95, // smaller than fontSize 96
            attachment: 1,
            color: 0
        }));

        let yMin = Infinity, yMax = -Infinity;
        for (const e of entities) {
            for (const v of (e as any).vertices) {
                if (v.y < yMin) yMin = v.y;
                if (v.y > yMax) yMax = v.y;
            }
        }
        // If it wrapped into single words, height would be > 600. On a single line it is <= 100.
        expect(yMax - yMin).toBeLessThan(110);
    });

    test("scales MText font height and line spacing with \\H relative factors", async () => {
        const fontBuffer = (await import("fs")).readFileSync(new URL("../demo/fonts/Roboto-Regular.ttf", import.meta.url));
        const fontData = (await import("opentype.js")).parse(fontBuffer.buffer.slice(fontBuffer.byteOffset, fontBuffer.byteOffset + fontBuffer.byteLength));
        const fontFetcher = async () => fontData;

        const { TextRenderer } = await import("../src/TextRenderer.js");
        const { MTextFormatParser } = await import("../src/MTextFormatParser.js");

        const renderer = new TextRenderer([fontFetcher]);
        await renderer.FetchFonts("ABCDEF");

        const parserHalf = new MTextFormatParser();
        parserHalf.Parse("{\\H0.5x;LINE1\\PLINE2\\PLINE3}");

        const entitiesHalf = Array.from(renderer.RenderMText({
            formattedText: parserHalf.GetContent(),
            position: { x: 0, y: 0 },
            fontSize: 36,
            width: 1000,
            attachment: 1,
            color: 0
        }));

        const parserFull = new MTextFormatParser();
        parserFull.Parse("LINE1\\PLINE2\\PLINE3");

        const entitiesFull = Array.from(renderer.RenderMText({
            formattedText: parserFull.GetContent(),
            position: { x: 0, y: 0 },
            fontSize: 36,
            width: 1000,
            attachment: 1,
            color: 0
        }));

        const getH = (ents: any[]) => {
            let yMin = Infinity, yMax = -Infinity;
            for (const e of ents) {
                for (const v of e.vertices) {
                    if (v.y < yMin) yMin = v.y;
                    if (v.y > yMax) yMax = v.y;
                }
            }
            return yMax - yMin;
        };

        const hHalf = getH(entitiesHalf);
        const hFull = getH(entitiesFull);
        // Half-scaled height should be approximately half of full height
        expect(hHalf).toBeLessThan(hFull * 0.6);
    });
});
