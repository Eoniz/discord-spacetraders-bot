import {AbstractSlashCommand} from "../AbstractSlashCommand";
import {CommandInteraction, SlashCommandBuilder} from "discord.js";

export default class PingSlashCommand extends AbstractSlashCommand {

    get slashCommand(): SlashCommandBuilder {
        return new SlashCommandBuilder()
            .setName("ping")
            .setDescription("Replies with Pong!")
    }

    public async execute(interaction: CommandInteraction): Promise<void> {
        await interaction.reply({content: "Pong", ephemeral: true});
    }
}
