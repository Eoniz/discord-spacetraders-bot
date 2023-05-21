import Faction from "../model/Faction";

export interface FactionRepository {
    getFactions(): Promise<Array<Faction>>;
}