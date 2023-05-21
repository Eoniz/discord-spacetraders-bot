
export type ContractTypeDto =
    | "PROCUREMENT"
    | "TRANSPORT"
    | "SHUTTLE"
    ;

export interface ContractTermsPaymentDto {
    onAccepted: number;
    onFulfilled: number;
}

export interface ContractTermsDeliverDto {
    tradeSymbol: string;
    destinationSymbol: string;
    unitsRequired: number;
    unitsFulfilled: number;
}

export interface ContractTermsDto {
    deadline: string;
    payment: ContractTermsPaymentDto;
    deliver: Array<ContractTermsDeliverDto>;
}

export interface ContractDto {
    id: string;
    factionSymbol: string;
    type: ContractTypeDto;
    terms: ContractTermsDto;
    accepted: boolean;
    fulfilled: boolean;
    expiration: string;
    deadlineToAccept: string;
}
