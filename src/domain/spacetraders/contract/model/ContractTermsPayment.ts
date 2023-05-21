
export default class ContractTermsPayment {

    constructor(
        private readonly _onAccepted: number,
        private readonly _onFulfilled: number
    ) {
    }

    public get onAccepted() {
        return this._onAccepted;
    }

    public get onFulfilled() {
        return this._onFulfilled;
    }

}