import SpaceTraderApiError from "../SpaceTraderApiError";
import {SpaceTraderErrorDto} from "../../common/dto/SpaceTraderDto";

export default class SpaceTraderFulfillContractDeliveryError extends SpaceTraderApiError {
    constructor(spaceTraderErrorDto: SpaceTraderErrorDto) {
        super(spaceTraderErrorDto, "api.spacetraders.contract.fulfill-contract-delivery-error");
    }
}