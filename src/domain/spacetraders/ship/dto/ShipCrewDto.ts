export type ShipCrewRotationDto =
    | "STRICT"
    | "RELAXED"
    ;

export interface ShipCrewDto {
    current: number;
    capacity: number;
    required: number;
    rotation: ShipCrewRotationDto;
    morale: number;
    wages: number;
}