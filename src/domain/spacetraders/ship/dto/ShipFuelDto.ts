
export interface ShipFuelConsumedDto {
    amount: number;
    timestamp: string;
}

export interface ShipFuelDto {
    current: number;
    capacity: number;
    consumed: ShipFuelConsumedDto;
}