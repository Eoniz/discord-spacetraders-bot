
export type ShipNavStatusDto = "IN_TRANSIT" | "IN_ORBIT" | "DOCKED";
export type ShipNavFlightModeDto = "DRIFT" | "STEALTH" | "CRUISE" | "BURN";
export type ShipCoordinatesTypeDto =
    | "PLANET"
    | "GAS_GIANT"
    | "MOON"
    | "ORBITAL_STATION"
    | "JUMP_GATE"
    | "ASTEROID_FIELD"
    | "NEBULA"
    | "DEBRIS_FIELD"
    | "GRAVITY_WELL"
    ;

export interface ShipCoordinatesDto {
    symbol: string;
    type: ShipCoordinatesTypeDto;
    systemSymbol: string;
    x: number;
    y: number;
}

export interface ShipNavRouteDto {
    departure: ShipCoordinatesDto;
    destination: ShipCoordinatesDto;
    arrival: string;
    departureTime: string;
}

export interface ShipNavDto {
    systemSymbol: string;
    waypointSymbol: string;
    route: ShipNavRouteDto;
    status: ShipNavStatusDto;
    flightMode: ShipNavFlightModeDto;
}