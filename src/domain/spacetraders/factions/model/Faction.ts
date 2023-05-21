import FactionTrait from "./FactionTrait";

export default class Faction {

    constructor(
        private readonly _symbol: string,
        private readonly _name: string,
        private readonly _description: string,
        private readonly _headquarters: string,
        private readonly _traits: Array<FactionTrait>,
        private readonly _isRecruiting: boolean,
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

    public get headquarters() {
        return this._headquarters;
    }

    public get traits() {
        return this._traits;
    }

    public get isRecruiting() {
        return this._isRecruiting;
    }

}