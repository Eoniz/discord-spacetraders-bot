import {ShipCrewRotationVisitor} from "../visitors/ShipCrewRotationVisitor";

export default class ShipCrewRotation {

    public static readonly STRICT = new ShipCrewRotation("STRICT", (visitor) => visitor.strict());
    public static readonly RELAXED = new ShipCrewRotation("RELAXED", (visitor) => visitor.relaxed());

    private constructor(
        private readonly _symbol: string,
        private readonly _accept: <T> (visitor: ShipCrewRotationVisitor<T>) => T
    ) {
    }

    public accept<T>(visitor: ShipCrewRotationVisitor<T>) {
        return this._accept(visitor);
    }

}