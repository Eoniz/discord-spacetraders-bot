import {SlashCommand} from "./SlashCommand";
import {CommandInteraction, SlashCommandBuilder} from "discord.js";

export abstract class AbstractSlashCommand implements SlashCommand {
    constructor() {
    }

    public abstract get slashCommand(): SlashCommandBuilder | any;

    public abstract execute(interaction: CommandInteraction): Promise<void>;
}