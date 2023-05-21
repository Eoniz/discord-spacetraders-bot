
export default class Agent {

    constructor(
        private readonly _accountId: string,
        private readonly _symbol: string,
        private readonly _headquarters: string,
        private readonly _credits: number,
        private readonly _startingFaction: string
    ) {
    }

    public get accountId() {
        return this._accountId;
    }

    public get symbol() {
        return this._symbol;
    }

    public get headquarters() {
        return this._headquarters;
    }

    public get credits() {
        return this._credits;
    }

    public get startingFaction() {
        return this._startingFaction;
    }

}