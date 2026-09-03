/** Key for render batches. */

export const BatchingGeometryType = Object.freeze({
    POINTS: 0,
    LINES: 1,
    INDEXED_LINES: 2,
    TRIANGLES: 3,
    INDEXED_TRIANGLES: 4,
    BLOCK_INSTANCE: 5,
    /** Shaped point instances. */
    POINT_INSTANCE: 6
} as const);

export type BatchingGeometryTypeValue = typeof BatchingGeometryType[keyof typeof BatchingGeometryType];

export class BatchingKey {
    static GeometryType = BatchingGeometryType;

    layerName: string | null;
    blockName: string | null;
    geometryType: number | null;
    color: number;
    lineType: number | null;

    /**
     * Components order matters for lookup by prefix.
     * @param layerName Layer name, null if not bound to a layer (e.g. block definition
     *  without layer specified).
     * @param blockName Block name if applicable. If specified and geometryType is not
     *  BLOCK_INSTANCE, the batch is part of block definition. Otherwise it is block instance.
     * @param geometryType One of BatchingKey.GeometryType.
     * @param color Color ARGB value.
     * @param lineType Line type ID, null for non-lines. Zero is default type (solid
     *  line).
     */
    constructor(layerName?: string | null, blockName?: string | null, geometryType?: number | null, color: number = 0, lineType?: number | null) {
        this.layerName = layerName ?? null;
        this.blockName = blockName ?? null;
        this.geometryType = geometryType ?? null;
        this.color = color;
        this.lineType = lineType ?? null;
    }

    /** Comparator function. Fields lexical order corresponds to the constructor arguments order.
     * Null values are always first.
     */
    Compare(other: BatchingKey): number {
        let c = CompareValues(this.layerName, other.layerName);
        if (c !== 0) {
            return c;
        }
        c = CompareValues(this.blockName, other.blockName);
        if (c !== 0) {
            return c;
        }
        c = CompareValues(this.geometryType, other.geometryType);
        if (c !== 0) {
            return c;
        }
        c = CompareValues(this.color, other.color);
        if (c !== 0) {
            return c;
        }
        return CompareValues(this.lineType, other.lineType);
    }

    IsIndexed(): boolean {
        return this.geometryType === BatchingKey.GeometryType.INDEXED_LINES ||
               this.geometryType === BatchingKey.GeometryType.INDEXED_TRIANGLES;
    }

    IsInstanced(): boolean {
        return this.geometryType === BatchingKey.GeometryType.BLOCK_INSTANCE ||
               this.geometryType === BatchingKey.GeometryType.POINT_INSTANCE;
    }
}

/** Comparator function for arbitrary types. Null is always first. This is used just to make some
 * ordering for keys in tree structures, so no locale-aware string comparison.
 */
export function CompareValues(v1: any, v2: any): number {
    if (v1 === null || v1 === undefined) {
        if (v2 === null || v2 === undefined) {
            return 0;
        }
        return -1;
    }
    if (v2 === null || v2 === undefined) {
        return 1;
    }
    if (v1 < v2) {
        return -1;
    }
    if (v1 > v2) {
        return 1;
    }
    return 0;
}
