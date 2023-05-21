import moment from "moment";
import ContractTermsPayment from "./ContractTermsPayment";
import ContractTermsDeliver from "./ContractTermsDeliver";

export default class ContractTerms {

    constructor(
        private readonly _deadline: moment.Moment,
        private readonly _payment: ContractTermsPayment,
        private readonly _deliver: Array<ContractTermsDeliver>,
    ) {
    }

    public get deadline() {
        return this._deadline;
    }

    public get payment() {
        return this._payment;
    }

    public get deliver() {
        return this._deliver;
    }

}