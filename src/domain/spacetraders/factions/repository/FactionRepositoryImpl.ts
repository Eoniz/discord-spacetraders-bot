import {FactionRepository} from "./FactionRepository";
import Faction from "../model/Faction";
import SpaceTraderClient from "../../../../infrastructure/client/SpaceTraderClient";
import {FactionDto} from "../dto/FactionDto";
import {SpaceTraderDto} from "../../common/dto/SpaceTraderDto";
import FactionMapper from "../mapper/FactionMapper";

export default class FactionRepositoryImpl implements FactionRepository {

    public async getFactions(): Promise<Array<Faction>> {
        try {
            const results = await SpaceTraderClient.get<SpaceTraderDto<Array<FactionDto>>>("/v2/factions");
            return results.data.data.map(FactionMapper.fromFactionDto);
        } catch (e) {
            throw e;
        }
    }

}