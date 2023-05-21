
export type ShipReactorSymbolDto =
    | "REACTOR_SOLAR_I"
    | "REACTOR_FUSION_I"
    | "REACTOR_FISSION_I"
    | "REACTOR_CHEMICAL_I"
    | "REACTOR_ANTIMATTER_I"
    ;

export interface ShipReactorRequirementsDto {
    crew: number;
}

export interface ShipReactorDto {
    symbol: ShipReactorSymbolDto;
    name: string;
    description: string;
    condition: number;
    powerOutput: number;
    requirements: ShipReactorRequirementsDto;
}