
export type ShipRegistrationRoleDto =
    | "FABRICATOR"
    | "HARVESTER"
    | "HAULER"
    | "INTERCEPTOR"
    | "EXCAVATOR"
    | "TRANSPORT"
    | "REPAIR"
    | "SURVEYOR"
    | "COMMAND"
    | "CARRIER"
    | "PATROL"
    | "SATELLITE"
    | "EXPLORER"
    | "REFINERY"
    ;

export interface ShipRegistrationDto {
    name: string;
    factionSymbol: string;
    role: ShipRegistrationRoleDto;
}