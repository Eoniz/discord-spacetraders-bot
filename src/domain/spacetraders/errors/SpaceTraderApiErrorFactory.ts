import {SpaceTraderErrorDto} from "../common/dto/SpaceTraderDto";
import SpaceTraderInvalidPayloadError from "./SpaceTraderInvalidPayloadError";
import SpaceTraderApiError from "./SpaceTraderApiError";
import {SpaceTraderCooldownConflictError} from "./general/SpaceTraderCooldownConflictError";
import SpaceTraderWaypointNoAccessError from "./general/SpaceTraderWaypointNoAccessError";
import SpaceTraderTokenEmptyError from "./account/SpaceTraderTokenEmptyError";
import SpaceTraderTokenMissingSubjectError from "./account/SpaceTraderTokenMissingSubjectError";
import SpaceTraderTokenInvalidSubjectError from "./account/SpaceTraderTokenInvalidSubjectError";
import SpaceTraderMissingTokenRequestError from "./account/SpaceTraderMissingTokenRequestError";
import SpaceTraderInvalidTokenRequestError from "./account/SpaceTraderInvalidTokenRequestError";
import SpaceTraderInvalidTokenSubjectError from "./account/SpaceTraderInvalidTokenSubjectError";
import SpaceTraderAccountNotExistsError from "./account/SpaceTraderAccountNotExistsError";
import SpaceTraderAccountHasNoAgentError from "./account/SpaceTraderAccountHasNoAgentError";
import SpaceTraderAgentNotExistsError from "./account/SpaceTraderAgentNotExistsError";
import SpaceTraderRegisterAgentExistsError from "./account/SpaceTraderRegisterAgentExistsError";
import SpaceTraderNavigateInTransitError from "./ship/SpaceTraderNavigateInTransitError";
import SpaceTraderNavigateInvalidDestinationError from "./ship/SpaceTraderNavigateInvalidDestinationError";
import SpaceTraderNavigateOutsideSystemError from "./ship/SpaceTraderNavigateOutsideSystemError";
import SpaceTraderNavigateInsufficientFuelError from "./ship/SpaceTraderNavigateInsufficientFuelError";
import SpaceTraderNavigateSameDestinationError from "./ship/SpaceTraderNavigateSameDestinationError";
import SpaceTraderShipExtractInvalidWaypointError from "./ship/SpaceTraderShipExtractInvalidWaypointError";
import SpaceTraderShipExtractPermissionError from "./ship/SpaceTraderShipExtractPermissionError";
import SpaceTraderShipJumpNoSystemError from "./ship/SpaceTraderShipJumpNoSystemError";
import SpaceTraderShipJumpSameSystemError from "./ship/SpaceTraderShipJumpSameSystemError";
import SpaceTraderShipJumpMissingModuleError from "./ship/SpaceTraderShipJumpMissingModuleError";
import SpaceTraderShipJumpNoValidWaypointError from "./ship/SpaceTraderShipJumpNoValidWaypointError";
import SpaceTraderShipJumpMissingAntimatterError from "./ship/SpaceTraderShipJumpMissingAntimatterError";
import SpaceTraderShipInTransitError from "./ship/SpaceTraderShipInTransitError";
import SpaceTraderShipMissingSensorArraysError from "./ship/SpaceTraderShipMissingSensorArraysError";
import SpaceTraderPurchaseShipCreditsError from "./ship/SpaceTraderPurchaseShipCreditsError";
import SpaceTraderShipCargoExceedsLimitError from "./ship/SpaceTraderShipCargoExceedsLimitError";
import SpaceTraderShipCargoMissingError from "./ship/SpaceTraderShipCargoMissingError";
import SpaceTraderShipCargoUnitCountError from "./ship/SpaceTraderShipCargoUnitCountError";
import {SpaceTraderShipSurveyVerificationError} from "./ship/SpaceTraderShipSurveyVerificationError";
import SpaceTraderShipSurveyExpirationError from "./ship/SpaceTraderShipSurveyExpirationError";
import SpaceTraderShipSurveyWaypointTypeError from "./ship/SpaceTraderShipSurveyWaypointTypeError";
import SpaceTraderShipSurveyOrbitError from "./ship/SpaceTraderShipSurveyOrbitError";
import SpaceTraderShipSurveyExhaustedError from "./ship/SpaceTraderShipSurveyExhaustedError";
import SpaceTraderShipRefuelDockedError from "./ship/SpaceTraderShipRefuelDockedError";
import SpaceTraderShipRefuelInvalidWaypointError from "./ship/SpaceTraderShipRefuelInvalidWaypointError";
import SpaceTraderShipMissingMountsError from "./ship/SpaceTraderShipMissingMountsError";
import SpaceTraderShipCargoFullError from "./ship/SpaceTraderShipCargoFullError";
import SpaceTraderShipJumpFromGateToGateError from "./ship/SpaceTraderShipJumpFromGateToGateError";
import SpaceTraderWaypointChartedError from "./ship/SpaceTraderWaypointChartedError";
import SpaceTraderShipTransferShipNotFoundError from "./ship/SpaceTraderShipTransferShipNotFoundError";
import SpaceTraderShipTransferAgentConflictError from "./ship/SpaceTraderShipTransferAgentConflictError";
import SpaceTraderShipTransferSameShipConflictError from "./ship/SpaceTraderShipTransferSameShipConflictError";
import SpaceTraderShipTransferLocationConflictError from "./ship/SpaceTraderShipTransferLocationConflictError";
import SpaceTraderWarpInsideSystemError from "./ship/SpaceTraderWarpInsideSystemError";
import SpaceTraderShipNotInOrbitError from "./ship/SpaceTraderShipNotInOrbitError";
import SpaceTraderShipInvalidRefineryGoodError from "./ship/SpaceTraderShipInvalidRefineryGoodError";
import SpaceTraderShipInvalidRefineryTypeError from "./ship/SpaceTraderShipInvalidRefineryTypeError";
import SpaceTraderShipMissingRefineryError from "./ship/SpaceTraderShipMissingRefineryError";
import SpaceTraderShipMissingSurveyorError from "./ship/SpaceTraderShipMissingSurveyorError";
import SpaceTraderAcceptContractNotAuthorizedError from "./contract/SpaceTraderAcceptContractNotAuthorizedError";
import SpaceTraderAcceptContractConflictError from "./contract/SpaceTraderAcceptContractConflictError";
import SpaceTraderFulfillContractDeliveryError from "./contract/SpaceTraderFulfillContractDeliveryError";
import SpaceTraderContractDeadlineError from "./contract/SpaceTraderContractDeadlineError";
import SpaceTraderContractFulfilledError from "./contract/SpaceTraderContractFulfilledError";
import SpaceTraderContractNotAcceptedError from "./contract/SpaceTraderContractNotAcceptedError";
import SpaceTraderContractNotAuthorizedError from "./contract/SpaceTraderContractNotAuthorizedError";
import SpaceContractShipDeliverTermsError from "./contract/SpaceContractShipDeliverTermsError";
import SpaceTraderShipDeliverFulfilledError from "./contract/SpaceTraderShipDeliverFulfilledError";
import SpaceTraderShipDeliverInvalidLocationError from "./contract/SpaceTraderShipDeliverInvalidLocationError";
import SpaceTraderMarketTradeInsufficientCreditsError from "./market/SpaceTraderMarketTradeInsufficientCreditsError";
import SpaceTraderMarketTradeNoPurchaseError from "./market/SpaceTraderMarketTradeNoPurchaseError";
import SpaceTraderMarketTradeNotSoldError from "./market/SpaceTraderMarketTradeNotSoldError";
import SpaceTraderMarketNotFoundError from "./market/SpaceTraderMarketNotFoundError";
import SpaceTraderMarketTradeUnitLimitError from "./market/SpaceTraderMarketTradeUnitLimitError";

export default class SpaceTraderApiErrorFactory {

    public static createSpaceTraderApiError(dto: SpaceTraderErrorDto) {
        switch (dto.error.code) {
            /** ------------------- HTTP ------------------- */
            case 422:
                return new SpaceTraderInvalidPayloadError(dto);
            /** ------------------- GENERAL ------------------- */
            case 4000:
                return new SpaceTraderCooldownConflictError(dto);
            case 40001:
                return new SpaceTraderWaypointNoAccessError(dto);
            /** ------------------- ACCOUNT ------------------- */
            case 4100:
                return new SpaceTraderTokenEmptyError(dto);
            case 4101:
                return new SpaceTraderTokenMissingSubjectError(dto);
            case 4102:
                return new SpaceTraderTokenInvalidSubjectError(dto);
            case 4103:
                return new SpaceTraderMissingTokenRequestError(dto);
            case 4104:
                return new SpaceTraderInvalidTokenRequestError(dto);
            case 4105:
                return new SpaceTraderInvalidTokenSubjectError(dto);
            case 4106:
                return new SpaceTraderAccountNotExistsError(dto);
            case 4107:
                return new SpaceTraderAgentNotExistsError(dto);
            case 4108:
                return new SpaceTraderAccountHasNoAgentError(dto);
            case 4109:
                return new SpaceTraderRegisterAgentExistsError(dto);
            /** ------------------- ACCOUNT ------------------- */
            case 4200:
                return new SpaceTraderNavigateInTransitError(dto);
            case 4201:
                return new SpaceTraderNavigateInvalidDestinationError(dto);
            case 4202:
                return new SpaceTraderNavigateOutsideSystemError(dto);
            case 4203:
                return new SpaceTraderNavigateInsufficientFuelError(dto);
            case 4204:
                return new SpaceTraderNavigateSameDestinationError(dto);
            case 4205:
                return new SpaceTraderShipExtractInvalidWaypointError(dto);
            case 4206:
                return new SpaceTraderShipExtractPermissionError(dto);
            case 4207:
                return new SpaceTraderShipJumpNoSystemError(dto);
            case 4208:
                return new SpaceTraderShipJumpSameSystemError(dto);
            case 4210:
                return new SpaceTraderShipJumpMissingModuleError(dto);
            case 4211:
                return new SpaceTraderShipJumpNoValidWaypointError(dto);
            case 4212:
                return new SpaceTraderShipJumpMissingAntimatterError(dto);
            case 4214:
                return new SpaceTraderShipInTransitError(dto);
            case 4215:
                return new SpaceTraderShipMissingSensorArraysError(dto);
            case 4216:
                return new SpaceTraderPurchaseShipCreditsError(dto);
            case 4217:
                return new SpaceTraderShipCargoExceedsLimitError(dto);
            case 4218:
                return new SpaceTraderShipCargoMissingError(dto);
            case 4219:
                return new SpaceTraderShipCargoUnitCountError(dto);
            case 4220:
                return new SpaceTraderShipSurveyVerificationError(dto);
            case 4221:
                return new SpaceTraderShipSurveyExpirationError(dto);
            case 4222:
                return new SpaceTraderShipSurveyWaypointTypeError(dto);
            case 4223:
                return new SpaceTraderShipSurveyOrbitError(dto);
            case 4224:
                return new SpaceTraderShipSurveyExhaustedError(dto);
            case 4225:
                return new SpaceTraderShipRefuelDockedError(dto);
            case 4226:
                return new SpaceTraderShipRefuelInvalidWaypointError(dto);
            case 4227:
                return new SpaceTraderShipMissingMountsError(dto);
            case 4228:
                return new SpaceTraderShipCargoFullError(dto);
            case 4229:
                return new SpaceTraderShipJumpFromGateToGateError(dto);
            case 4230:
                return new SpaceTraderWaypointChartedError(dto);
            case 4231:
                return new SpaceTraderShipTransferShipNotFoundError(dto);
            case 4232:
                return new SpaceTraderShipTransferAgentConflictError(dto);
            case 4233:
                return new SpaceTraderShipTransferSameShipConflictError(dto);
            case 4234:
                return new SpaceTraderShipTransferLocationConflictError(dto);
            case 4235:
                return new SpaceTraderWarpInsideSystemError(dto);
            case 4236:
                return new SpaceTraderShipNotInOrbitError(dto);
            case 4237:
                return new SpaceTraderShipInvalidRefineryGoodError(dto);
            case 4238:
                return new SpaceTraderShipInvalidRefineryTypeError(dto);
            case 4239:
                return new SpaceTraderShipMissingRefineryError(dto);
            case 4240:
                return new SpaceTraderShipMissingSurveyorError(dto);
            /** ------------------- CONTRACT ------------------- */
            case 4500:
                return new SpaceTraderAcceptContractNotAuthorizedError(dto);
            case 4501:
                return new SpaceTraderAcceptContractConflictError(dto);
            case 4502:
                return new SpaceTraderFulfillContractDeliveryError(dto);
            case 4503:
                return new SpaceTraderContractDeadlineError(dto);
            case 4504:
                return new SpaceTraderContractFulfilledError(dto);
            case 4505:
                return new SpaceTraderContractNotAcceptedError(dto);
            case 4506:
                return new SpaceTraderContractNotAuthorizedError(dto);
            case 4508:
                return new SpaceContractShipDeliverTermsError(dto);
            case 4509:
                return new SpaceTraderShipDeliverFulfilledError(dto);
            case 4510:
                return new SpaceTraderShipDeliverInvalidLocationError(dto);
            /** ------------------- MARKET ------------------- */
            case 4600:
                return new SpaceTraderMarketTradeInsufficientCreditsError(dto);
            case 4601:
                return new SpaceTraderMarketTradeNoPurchaseError(dto);
            case 4602:
                return new SpaceTraderMarketTradeNotSoldError(dto);
            case 4603:
                return new SpaceTraderMarketNotFoundError(dto);
            case 4604:
                return new SpaceTraderMarketTradeUnitLimitError(dto);
            default:
                return new SpaceTraderApiError(dto);
        }
    }

}