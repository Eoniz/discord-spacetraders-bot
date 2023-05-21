import FactionRepositoryImpl from "../../../factions/repository/FactionRepositoryImpl";
import FactionService from "../../../factions/service/FactionService";

export function provideFactionService() {
    const factionRepository = new FactionRepositoryImpl();

    return new FactionService(factionRepository);
}