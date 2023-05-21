
export class ShipCargoInventory {
    constructor(
        private readonly _symbol: string,
        private readonly _name: string,
        private readonly _description: string,
        private readonly _units: number
    ) {
    }

    public get symbol() {
        return this._symbol;
    }

    public get name() {
        return this._name;
    }

    public get description() {
        return this._description;
    }

    public get units() {
        return this._units;
    }

}