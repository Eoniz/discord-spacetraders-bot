import ShipCrewRotation from "./ShipCrewRotation";

export class ShipCrew {

    constructor(
        private readonly _current: number,
        private readonly _capacity: number,
        private readonly _required: number,
        private readonly _rotation: ShipCrewRotation,
        private readonly _morale: number,
        private readonly _wages: number
    ) {
    }

    public get current() {
        return this._current;
    }

    public get capacity() {
        return this._capacity;
    }

    public get required() {
        return this._required;
    }

    public get rotation() {
        return this._rotation;
    }

    public get morale() {
        return this._morale;
    }

    public get wages() {
        return this._wages;
    }

}