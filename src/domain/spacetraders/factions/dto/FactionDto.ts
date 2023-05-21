
export interface FactionTraitDto {
    symbol: string;
    name: string;
    description: string;
}

export interface FactionDto {
    symbol: string;
    name: string;
    description: string;
    headquarters: string;
    traits: Array<FactionTraitDto>;
    isRecruiting: boolean;
}
