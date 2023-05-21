import moment from "moment";
import ContractType from "./ContractType";
import ContractTerms from "./ContractTerms";

export default class Contract {

    constructor(
        private readonly _id: string,
        private readonly _factionSymbol: string,
        private readonly _type: ContractType,
        private readonly _terms: ContractTerms,
        private readonly _accepted: boolean,
        private readonly _fulfilled: boolean,
        private readonly _expiration: moment.Moment,
        private readonly _deadlineToAccept: moment.Moment
    ) {
    }

}
