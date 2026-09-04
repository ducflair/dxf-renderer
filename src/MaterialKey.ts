/** Key for materials. */
import { CompareValues } from "./BatchingKey.js";

export class MaterialKey {
    instanceType: number;
    geometryType: number | null;
    color: number;
    lineType: number | null;

    /**
     * @param instanceType One of InstanceType values.
     * @param geometryType One of BatchingKey.GeometryType.
     * @param color Color ARGB value.
     * @param lineType Line type ID, null for non-lines. Zero is default type (solid
     *  line).
     */
    constructor(instanceType: number, geometryType?: number | null, color: number = 0, lineType?: number | null) {
        this.instanceType = instanceType;
        this.geometryType = geometryType ?? null;
        this.color = color;
        this.lineType = lineType ?? null;
    }

    /** Comparator function. Fields lexical order corresponds to the constructor arguments order.
     * Null values are always first.
     */
    Compare(other: MaterialKey): number {
        let c = CompareValues(this.instanceType, other.instanceType);
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
}
