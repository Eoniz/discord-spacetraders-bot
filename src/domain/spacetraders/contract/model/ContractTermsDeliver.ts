
export default class ContractTermsDeliver {

    constructor(
        private readonly _tradeSymbol: string,
        private readonly _destinationSymbol: string,
        private readonly _unitsRequired: number,
        private readonly _unitsFulfilled: number
    ) {
    }

    public get tradeSymbol() {
        return this._tradeSymbol;
    }

    public get destinationSymbol() {
        return this._destinationSymbol;
    }

    public get unitsRequired() {
        return this._unitsRequired;
    }

    public get unitsFulfilled() {
        return this._unitsFulfilled;
    }

}