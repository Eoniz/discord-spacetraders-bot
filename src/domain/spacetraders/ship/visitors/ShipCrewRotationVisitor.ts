
export interface ShipCrewRotationVisitor<T> {
    strict(): T;
    relaxed(): T;
}
