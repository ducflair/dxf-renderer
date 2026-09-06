import earcut from "earcut";

type Point = {x: number; y: number};

function contains(ring: Point[], point: Point): boolean {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const a = ring[i], b = ring[j];
        if ((a.y > point.y) !== (b.y > point.y) &&
            point.x < (b.x - a.x) * (point.y - a.y) / (b.y - a.y) + a.x) inside = !inside;
    }
    return inside;
}

/** DXF hatch paths can contain disjoint shells and islands nested inside holes. */
export function triangulateSolidHatch(loops: Point[][], style = 0) {
    const rings = loops.filter(loop => loop.length >= 3).map(vertices => {
        let area = 0;
        for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
            area += vertices[j].x * vertices[i].y - vertices[i].x * vertices[j].y;
        }
        return {vertices, area: Math.abs(area), parent: -1, depth: 0};
    });
    rings.sort((a, b) => b.area - a.area);
    for (let i = 0; i < rings.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (contains(rings[j].vertices, rings[i].vertices[0])) {
                rings[i].parent = j;
                rings[i].depth = rings[j].depth + 1;
                break;
            }
        }
    }
    const vertices: Point[] = [];
    const indices: number[] = [];
    for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        if (ring.depth % 2 !== 0 || (style !== 0 && ring.depth !== 0)) continue;
        const group = [ring.vertices];
        if (style !== 2) {
            group.push(...rings.filter(child => child.parent === i).map(child => child.vertices));
        }
        const coords: number[] = [], holes: number[] = [];
        for (const [j, points] of group.entries()) {
            if (j > 0) holes.push(coords.length / 2);
            for (const point of points) coords.push(point.x, point.y);
        }
        const offset = vertices.length;
        indices.push(...earcut(coords, holes).map(index => index + offset));
        vertices.push(...group.flat());
    }
    return {vertices, indices};
}
