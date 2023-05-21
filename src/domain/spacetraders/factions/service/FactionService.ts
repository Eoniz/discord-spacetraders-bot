import {FactionRepository} from "../repository/FactionRepository";

export default class FactionService {

    constructor(
        private readonly _factionRepository: FactionRepository
    ) {
    }

    public async getFactions() {
        try {
            return await this._factionRepository.getFactions();
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}