import {AbstractSlashCommand} from "../../AbstractSlashCommand";
import {CommandInteraction, ComponentType, EmbedBuilder, SlashCommandBuilder} from "discord.js";
import {provideFactionService} from "../../../../../spacetraders/common/provider/faction/FactionProvider";
import {PaginateEmbed} from "../../../../embeds/PaginateEmbed";

export default class GetFactionsSlashCommand extends AbstractSlashCommand {

    get slashCommand(): SlashCommandBuilder {
        return new SlashCommandBuilder()
            .setName("factions")
            .setDescription("Print all available factions")
    }

    public async execute(interaction: CommandInteraction): Promise<void> {
        const factionService = provideFactionService();

        const factions = await factionService.getFactions();

        const pages = factions.map((faction, page) => {
            return new EmbedBuilder()
                .setColor(0xc36b13)
                .setTitle(`${faction.name} - *${faction.symbol}*`)
                .setDescription(faction.description)
                .setFields(
                    ...faction.traits.map((trait) => {
                        return {name: trait.name, value: trait.description}
                    })
                )
                .setFooter({text: `${faction.symbol} - Page ${page + 1}/${factions.length}`})
        });

        const paginatedEmbed = new PaginateEmbed(interaction, pages);
        await paginatedEmbed.reply();
    }
}