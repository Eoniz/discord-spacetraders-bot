import {CommandInteraction, SlashCommandBuilder} from "discord.js";

export interface SlashCommand {
    get slashCommand(): SlashCommandBuilder;

    execute(interaction: CommandInteraction): Promise<void>;
}
