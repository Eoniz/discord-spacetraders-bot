import {FactionDto, FactionTraitDto} from "../dto/FactionDto";
import FactionTrait from "../model/FactionTrait";
import Faction from "../model/Faction";

export default class FactionMapper {

    public static fromFactionTraitDto(dto: FactionTraitDto) {
        return new FactionTrait(
            dto.symbol,
            dto.name,
            dto.description
        );
    }

    public static fromFactionDto(dto: FactionDto) {
        const traits = dto.traits.map(FactionMapper.fromFactionTraitDto);

        return new Faction(
            dto.symbol,
            dto.name,
            dto.description,
            dto.headquarters,
            traits,
            dto.isRecruiting
        );
    }

}