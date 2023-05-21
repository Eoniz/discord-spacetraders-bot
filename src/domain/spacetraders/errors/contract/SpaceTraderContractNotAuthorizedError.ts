import SpaceTraderApiError from "../SpaceTraderApiError";
import {SpaceTraderErrorDto} from "../../common/dto/SpaceTraderDto";

export default class SpaceTraderContractNotAuthorizedError extends SpaceTraderApiError {
    constructor(spaceTraderErrorDto: SpaceTraderErrorDto) {
        super(spaceTraderErrorDto, "api.spacetraders.contract.contract-not-authorized-error");
    }
}