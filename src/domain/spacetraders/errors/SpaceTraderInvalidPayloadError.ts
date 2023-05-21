import SpaceTraderApiError from "./SpaceTraderApiError";
import {SpaceTraderErrorDto} from "../common/dto/SpaceTraderDto";

export default class SpaceTraderInvalidPayloadError extends SpaceTraderApiError<Record<string, Array<string>>> {
    constructor(spaceTraderErrorDto: SpaceTraderErrorDto) {
        super(spaceTraderErrorDto, "api.spacetraders.invalid-payload");
    }
}