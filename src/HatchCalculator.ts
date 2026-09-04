import { Vector2, Matrix3, Box2 } from "three";
import { IntersectSegmentsParametric } from "./math/utils.js";

export const HatchStyle = Object.freeze({
    ODD_PARITY: 0,
    OUTERMOST: 1,
    THROUGH_ENTIRE_AREA: 2
} as const);

export type HatchStyleValue = typeof HatchStyle[keyof typeof HatchStyle];

/** Force intersection at this distance from edge endpoint (parameter value). */
const ENDPOINT_MARGIN = 1e-4;

export type Edge = {
    idx: number;
    start: Vector2;
    end: Vector2;
    loopIdx: number;
    isZero?: boolean;
    isParallel?: boolean;
    isProcessed?: boolean;
    intersection?: [number, number, number] | null;
    toggle?: boolean;
    suppress?: boolean;
    unsuppress?: boolean;
};

/** @return True if both edges crossed from the same side, false otherwise. */
function EdgeSameSide(e1: Edge, e2: Edge): boolean {
    if (!e1.intersection || !e2.intersection) return false;
    return (e1.intersection[2] > 0 && e2.intersection[2] > 0) ||
           (e1.intersection[2] < 0 && e2.intersection[2] < 0);
}

/** Context for one line clipping calculations. */
class ClipCalculator {
    style: number;
    line: [Vector2, Vector2];
    lineDir: Vector2;
    loops: Edge[][];
    nodes: Edge[] = [];

    constructor(boundaryLoops: Vector2[][], style: number, line: [Vector2, Vector2]) {
        this.style = style;
        this.line = line;
        this.lineDir = line[1].clone().sub(line[0]).normalize();

        this.loops = [];
        for (let loopIdx = 0; loopIdx < boundaryLoops.length; loopIdx++) {
            const loop = boundaryLoops[loopIdx];
            const _loop: Edge[] = [];
            for (let vtxIdx = 0; vtxIdx < loop.length; vtxIdx++) {
                _loop.push({
                    idx: vtxIdx,
                    start: loop[vtxIdx],
                    end: loop[vtxIdx === loop.length - 1 ? 0 : vtxIdx + 1],
                    loopIdx
                });
            }
            this.loops.push(_loop);
        }
    }

    /**
     * @return List of resulting line segments in parametric form. Parameter value 0
     *  corresponds to the provided line start point, 1 - to end point.
     */
    Calculate(): [number, number][] {
        this._ProcessEdges();
        this._CreateNodes();
        /* Sort from line start towards end. */
        this.nodes.sort((e1, e2) => e1.intersection![0] - e2.intersection![0]);
        if (this.style === HatchStyle.THROUGH_ENTIRE_AREA) {
            return this._GenerateThroughAllSegments();
        }
        /* ODD_PARITY and OUTERMOST are differentiated by filtering loops list (for outermost style
         * only external and outermost loop should be left).
         */
        return this._GenerateOddParitySegments();
    }

    _ProcessEdges(): void {
        for (const loop of this.loops) {
            for (const edge of loop) {
                const edgeVec = edge.end.clone().sub(edge.start);
                const len = edgeVec.length();
                edge.isZero = len <= Number.EPSILON;
                if (edge.isZero) {
                    continue;
                }
                edgeVec.divideScalar(len);
                const a = edgeVec.cross(this.lineDir);
                edge.isParallel = Math.abs(a) <= 1e-6;
                if (edge.isParallel) {
                    continue;
                }
                edge.intersection = IntersectSegmentsParametric(this.line[0], this.line[1],
                    edge.start, edge.end, true);
                if (!edge.intersection) {
                    /* Missing intersection indicates some degenerative case, treat it as
                     * parallel.
                     */
                    edge.isParallel = true;
                }
            }
        }
    }

    /** Create intersection nodes. Each node with `toggle` property set causes line state change, so
     * unnecessary changes should be filtered out inside this method. Node also can suppress or
     * un-suppress line if currently enabled, this is done by setting `suppress` and
     * `unsuppress` properties on the edge.
     */
    _CreateNodes(): void {
        this.nodes = [];
        for (const loop of this.loops) {
            for (let edge of loop) {
                if (edge.isZero || edge.isParallel || edge.isProcessed || !edge.intersection) {
                    continue;
                }

                if (edge.intersection[1] < -ENDPOINT_MARGIN ||
                    edge.intersection[1] > 1 + ENDPOINT_MARGIN) {
                    /* No intersection. */
                    continue;
                }

                /* Some intersection exists, check if near endpoints. */
                const isStartVtx = edge.intersection[1] <= ENDPOINT_MARGIN;
                if (isStartVtx || edge.intersection[1] >= 1 - ENDPOINT_MARGIN) {
                    /* Intersection near start or end vertex, force connected edge check. */
                    let [connEdge, isDirect] = this._GetConnectedEdge(edge, isStartVtx);
                    if (!connEdge) {
                        /* Some invalid case, ignore. */
                        continue;
                    }
                    edge.isProcessed = true;
                    connEdge.isProcessed = true;
                    if (isDirect) {
                        if (EdgeSameSide(edge, connEdge)) {
                            edge.toggle = true;
                            this.nodes.push(edge);
                        }
                    } else {
                        /** Connected through colinear edge(s). Mark the first edge to temporarily
                         * disable line if it is enabled. Second edge either toggles the state or
                         * restores previous one.
                         */
                        if (edge.intersection[0] > connEdge.intersection![0]) {
                            /* Set proper order, `edge` is the first intersection, `connEdge` - the
                             * second one.
                             */
                            const tmp = connEdge;
                            connEdge = edge;
                            edge = tmp;
                        }

                        edge.suppress = true;
                        connEdge.unsuppress = true;

                        this.nodes.push(edge);

                        if (EdgeSameSide(edge, connEdge)) {
                            connEdge.toggle = true;
                        }
                        this.nodes.push(connEdge);
                    }

                } else {
                    /* Clean inner intersection. */
                    edge.isProcessed = true;
                    edge.toggle = true;
                    this.nodes.push(edge);
                }
            }
        }
    }

    /**
     * @param edge
     * @param isStartVtx True for connected through start vertex, false for end vertex.
     * @return Connected valid edge if found, null if not found (e.g. is the same
     *  edge for some reason). Second value is true if directly connected, false if though colinear
     *  edges.
     */
    _GetConnectedEdge(edge: Edge, isStartVtx: boolean): [Edge | null, boolean] {
        const loop = this.loops[edge.loopIdx];
        let i = edge.idx;
        let isDirect = true;
        do {
            if (isStartVtx) {
                if (i === 0) {
                    i = loop.length - 1;
                } else {
                    i--;
                }
            } else {
                if (i === loop.length - 1) {
                    i = 0;
                } else {
                    i++;
                }
            }
            const connEdge = loop[i];
            if (connEdge.isZero || connEdge.isParallel) {
                isDirect = false;
            } else {
                return [connEdge, isDirect];
            }
        } while (i !== edge.idx);
        return [null, false];
    }

    _GenerateOddParitySegments(): [number, number][] {
        const result: [number, number][] = [];
        let state = false;
        /* Incremented with each suppression, decremented with each un-suppression. */
        let suppress = 0;
        /* Previous node when line was enabled. */
        let prevNode: Edge | null = null;

        for (const node of this.nodes) {
            if (node.suppress) {
                suppress++;
            }
            if (node.unsuppress) {
                suppress--;
            }
            if (node.toggle) {
                state = !state;
            }
            if (suppress === 0 && state && (node.unsuppress || node.toggle)) {
                /* Just started new segment. */
                prevNode = node;
            } else if ((suppress || !state) && prevNode) {
                if (node.intersection![0] - prevNode.intersection![0] > Number.EPSILON) {
                    result.push([prevNode.intersection![0], node.intersection![0]]);
                }
                prevNode = null;
            }
        }

        return result;
    }

    _GenerateThroughAllSegments(): [number, number][] {
        const result: [number, number][] = [];
        /* Incremented with each suppression, decremented with each un-suppression. */
        let suppress = 0;
        /* Previous node when line was enabled. */
        let prevNode: Edge | null = null;
        /** For each loop count number of crossing from each side. One side increments corresponding
         * loop value, other decrements. When all values are zero, line is outside of any loop and
         * should not be rendered.
         */
        const loopStack = new Array(this.loops.length).fill(0);

        function IsOutside() {
            for (const n of loopStack) {
                if (n !== 0) {
                    return false;
                }
            }
            return true;
        }

        for (const node of this.nodes) {
            if (node.suppress) {
                suppress++;
            }
            if (node.unsuppress) {
                suppress--;
            }
            const wasOutside = IsOutside();
            if (node.toggle) {
                if (node.intersection![2] > 0) {
                    loopStack[node.loopIdx]++;
                } else {
                    loopStack[node.loopIdx]--;
                }
            }
            if (suppress === 0 && !IsOutside() && (node.unsuppress || wasOutside)) {
                /* Just started new segment. */
                prevNode = node;
            } else if ((suppress || IsOutside()) && prevNode) {
                if (node.intersection![0] - prevNode.intersection![0] > Number.EPSILON) {
                    result.push([prevNode.intersection![0], node.intersection![0]]);
                }
                prevNode = null;
            }
        }

        return result;
    }
}

export class HatchCalculator {
    boundaryLoops: Vector2[][];
    style: number;

    /**
     * Arrays of `Path` to use as boundary, and each `Path` is array of `Point`.
     *
     * @param boundaryLoops
     * @param style
     */
    constructor(boundaryLoops: Vector2[][], style: number) {
        this.boundaryLoops = boundaryLoops;
        this.style = style;
    }

    /**
     * Clip `line` using strategy defined by `this.style`
     *
     * @param line Line segment defined by start and end points. Assuming start
     *  and end points lie out of the boundary loops specified in the constructor.
     * @returns clipped line segments
     */
    ClipLine(line: [Vector2, Vector2]): [number, number][] {
        return new ClipCalculator(this.boundaryLoops, this.style, line).Calculate();
    }

    /**
     * @param seedPoint Pattern seed point coordinates in OCS.
     * @param angle Pattern rotation angle in radians.
     * @param scale Pattern scale.
     * @return Transformation from OCS to pattern space.
     */
    GetPatternTransform({ seedPoint, angle, scale }: { seedPoint: Vector2; angle?: number | null; scale?: number | null }): Matrix3 {
        const m = new Matrix3().makeTranslation(-seedPoint.x, -seedPoint.y);
        if (angle) {
            /* Matrix3.rotate() inverts angle sign. */
            m.rotate(angle);
        }
        if ((scale ?? 1) !== 1) {
            m.scale(1 / scale!, 1 / scale!);
        }
        return m;
    }

    /**
     * @param patTransform Transformation from OCS to pattern space previously obtained by
     *      GetPatternTransform() method.
     * @param basePoint Line base point coordinate in pattern space.
     * @param angle Line direction angle in radians, CCW from +X direction.
     * @return Transformation from OCS to pattern line space. Line is started at origin
     *  and directed into position X axis direction.
     */
    GetLineTransform({ patTransform, basePoint, angle }: { patTransform: Matrix3; basePoint?: Vector2 | null; angle?: number | null }): Matrix3 {
        const m = patTransform.clone();
        if (basePoint) {
            m.translate(-basePoint.x, -basePoint.y);
        }
        if (angle) {
            /* Matrix3.rotate() inverts angle sign. */
            m.rotate(angle);
        }
        return m;
    }

    /**
     * @param transform Transformation from OCS to target coordinates space.
     * @return Pattern AABB in target coordinate space.
     */
    GetBoundingBox(transform: Matrix3): Box2 {
        const box = new Box2();
        for (const path of this.boundaryLoops) {
            for (const v of path) {
                box.expandByPoint(v.clone().applyMatrix3(transform));
            }
        }
        return box;
    }
}
