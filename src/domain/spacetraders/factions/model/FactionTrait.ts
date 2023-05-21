
export default class FactionTrait {

    constructor(
        private readonly _symbol: string,
        private readonly _name: string,
        private readonly _description: string,
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

}