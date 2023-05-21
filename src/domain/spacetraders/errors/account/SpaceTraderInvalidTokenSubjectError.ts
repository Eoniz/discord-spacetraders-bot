import SpaceTraderApiError from "../SpaceTraderApiError";
import {SpaceTraderErrorDto} from "../../common/dto/SpaceTraderDto";

export default class SpaceTraderInvalidTokenSubjectError extends SpaceTraderApiError {
    constructor(spaceTraderErrorDto: SpaceTraderErrorDto) {
        super(spaceTraderErrorDto, "api.spacetraders.account.invalid-token-subject-error");
    }
}