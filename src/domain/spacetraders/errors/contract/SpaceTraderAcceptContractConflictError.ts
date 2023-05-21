import SpaceTraderApiError from "../SpaceTraderApiError";
import {SpaceTraderErrorDto} from "../../common/dto/SpaceTraderDto";

export default class SpaceTraderAcceptContractConflictError extends SpaceTraderApiError {
    constructor(spaceTraderErrorDto: SpaceTraderErrorDto) {
        super(spaceTraderErrorDto, "api.spacetraders.contract.accept-contract-conflict-error");
    }
}