
export interface ShipCargoInventoryDto {
    symbol: string;
    name: string;
    description: string;
    units: number;
}

export interface ShipCargoDto {
    capacity: number;
    units: number;
    inventory: Array<ShipCargoInventoryDto>;
}