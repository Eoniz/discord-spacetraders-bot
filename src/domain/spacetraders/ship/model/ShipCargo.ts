import {ShipCargoInventory} from "./ShipCargoInventory";

export class ShipCargo {
    constructor(
        private readonly _capacity: number,
        private readonly _units: number,
        private readonly _inventory: Array<ShipCargoInventory>
    ) {
    }

    public get capacity() {
        return this._capacity;
    }

    public get units() {
        return this._units;
    }

    public get inventory() {
        return this._inventory;
    }

}