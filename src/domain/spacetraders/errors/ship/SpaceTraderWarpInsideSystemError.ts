import SpaceTraderApiError from "../SpaceTraderApiError";
import {SpaceTraderErrorDto} from "../../common/dto/SpaceTraderDto";

export default class SpaceTraderWarpInsideSystemError extends SpaceTraderApiError {
    constructor(spaceTraderErrorDto: SpaceTraderErrorDto) {
        super(spaceTraderErrorDto, "api.spacetraders.ship.warp-inside-system-error");
    }
}