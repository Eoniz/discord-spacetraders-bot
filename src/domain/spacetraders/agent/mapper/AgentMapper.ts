import {AgentDto} from "../dto/AgentDto";
import Agent from "../model/Agent";

export class AgentMapper {

    public static fromAgentDto(dto: AgentDto) {
        return new Agent(
            dto.accountId,
            dto.symbol,
            dto.headquarters,
            dto.credits,
            dto.startingFaction
        );
    }

}