import {AbstractSlashCommand} from "../../AbstractSlashCommand";
import {CommandInteraction, SlashCommandBuilder} from "discord.js";

export default class RegisterSlashCommand extends AbstractSlashCommand {

    public get slashCommand(): SlashCommandBuilder | any {
        return new SlashCommandBuilder()
            .setName("register")
            .setDescription("Register as a user")
            .addStringOption(option => {
                return option
                    .setName("username")
                    .setDescription("Your username")
                    .setRequired(true)
            })
    }

    public async execute(interaction: CommandInteraction) {
        const username = interaction.options.get("username", true).value as string;

        await interaction.reply("ok");
    }

}