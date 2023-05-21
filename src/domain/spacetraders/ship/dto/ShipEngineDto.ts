
export type ShipEngineSymbolDto =
    | "ENGINE_IMPULSE_DRIVE_I"
    | "ENGINE_ION_DRIVE_I"
    | "ENGINE_ION_DRIVE_II"
    | "ENGINE_HYPER_DRIVE_I"
    ;

export interface ShipEngineRequirementsDto {
    power: number;
    crew: number;
}

export interface ShipEngineDto {
    symbol: ShipEngineSymbolDto;
    name: string;
    description: string;
    condition: number;
    speed: number;
    requirements: ShipEngineRequirementsDto;
}