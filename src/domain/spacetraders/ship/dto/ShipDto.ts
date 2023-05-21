import {ShipNavDto} from "./ShipNavDto";
import {ShipCrewDto} from "./ShipCrewDto";
import {ShipFuelDto} from "./ShipFuelDto";
import {ShipFrameDto} from "./ShipFrameDto";
import {ShipReactorDto} from "./ShipReactorDto";
import {ShipEngineDto} from "./ShipEngineDto";
import {ShipModuleDto} from "./ShipModuleDto";
import {ShipMountDto} from "./ShipMountDto";
import {ShipRegistrationDto} from "./ShipRegistrationDto";
import {ShipCargoDto} from "./ShipCargoDto";

export interface ShipDto {
    symbol: string;
    nav: ShipNavDto;
    crew: ShipCrewDto;
    fuel: ShipFuelDto;
    frame: ShipFrameDto;
    reactor: ShipReactorDto;
    engine: ShipEngineDto;
    modules: Array<ShipModuleDto>;
    mounts: Array<ShipMountDto>;
    registration: ShipRegistrationDto;
    cargo: ShipCargoDto;
}