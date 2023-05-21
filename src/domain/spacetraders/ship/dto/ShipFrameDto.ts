
export type ShipFrameSymbolDto =
    | "FRAME_PROBE"
    | "FRAME_DRONE"
    | "FRAME_INTERCEPTOR"
    | "FRAME_RACER"
    | "FRAME_FIGHTER"
    | "FRAME_FRIGATE"
    | "FRAME_SHUTTLE"
    | "FRAME_EXPLORER"
    | "FRAME_MINER"
    | "FRAME_LIGHT_FREIGHTER"
    | "FRAME_HEAVY_FREIGHTER"
    | "FRAME_TRANSPORT"
    | "FRAME_DESTROYER"
    | "FRAME_CRUISER"
    | "FRAME_CARRIER"
    ;

export interface ShipFrameRequirementsDto {
    power: number;
    crew: number;
}

export interface ShipFrameDto {
    symbol: ShipFrameSymbolDto;
    name: string;
    description: string;
    moduleSlots: number;
    mountingPoints: number;
    fuelCapacity: number;
    condition: number;
    requirements: ShipFrameRequirementsDto;
}