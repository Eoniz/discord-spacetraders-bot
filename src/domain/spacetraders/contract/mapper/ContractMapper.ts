import {
    ContractDto,
    ContractTermsDeliverDto,
    ContractTermsDto,
    ContractTermsPaymentDto,
    ContractTypeDto
} from "../dto/ContractDto";
import ContractType from "../model/ContractType";
import ContractTermsPayment from "../model/ContractTermsPayment";
import ContractTermsDeliver from "../model/ContractTermsDeliver";
import ContractTerms from "../model/ContractTerms";
import moment from "moment";
import Contract from "../model/Contract";

export default class ContractMapper {

    public static fromContractDto(dto: ContractDto) {
        const type = ContractMapper.fromContractTypeDto(dto.type);
        const terms = ContractMapper.fromContractTermsDto(dto.terms);
        const expiration = moment(dto.expiration);
        const deadlineToAccept = moment(dto.deadlineToAccept);

        return new Contract(
            dto.id,
            dto.factionSymbol,
            type,
            terms,
            dto.accepted,
            dto.fulfilled,
            expiration,
            deadlineToAccept
        );
    }

    public static fromContractTermsDto(dto: ContractTermsDto) {
        const deadline = moment(dto.deadline);
        const payment = ContractMapper.fromContractTermsPaymentDto(dto.payment);
        const deliver = dto.deliver.map(ContractMapper.fromContractTermsDeliverDto);

        return new ContractTerms(
            deadline,
            payment,
            deliver
        );
    }

    public static fromContractTermsDeliverDto(dto: ContractTermsDeliverDto) {
        return new ContractTermsDeliver(
            dto.tradeSymbol,
            dto.destinationSymbol,
            dto.unitsRequired,
            dto.unitsFulfilled
        );
    }

    public static fromContractTermsPaymentDto(dto: ContractTermsPaymentDto) {
        return new ContractTermsPayment(
            dto.onAccepted,
            dto.onFulfilled
        );
    }

    public static fromContractTypeDto(dto: ContractTypeDto) {
        switch (dto) {
            case "PROCUREMENT":
                return ContractType.PROCUREMENT;
            case "TRANSPORT":
                return ContractType.TRANSPORT;
            case "SHUTTLE":
                return ContractType.SHUTTLE;
        }
    }

}