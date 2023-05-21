import dotenv from "dotenv";
import {REST, Routes, SlashCommandBuilder} from "discord.js";
import * as path from "path";
import * as fs from "fs";
import {AbstractSlashCommand} from "./domain/discord/commands/slash/AbstractSlashCommand";

dotenv.config();

const slashCommandsPath = path.join(__dirname, "domain/discord/commands/slash/impl");
const slashCommands: Array<SlashCommandBuilder> = [];

function *walkSync(dirPath: string): IterableIterator<string> {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync(path.join(dirPath, file.name));
        } else {
            yield path.join(dirPath, file.name);
        }
    }
}

async function main() {
    for (const file of walkSync(slashCommandsPath)) {
        try {
            const command = (new (await import(file)).default()) as AbstractSlashCommand;
            slashCommands.push(command.slashCommand);
        } catch (error) {
            console.error(error);
        }
        console.log(file);
    }

    console.log(`Reloading ${slashCommands.length} commands.`);

    const rest = new REST().setToken(process.env.DISCORD_TOKEN as string);

    try {
        const data = await rest.put(
            Routes.applicationCommands(process.env.DISCORD_CLIENT_ID as string),
            {body: slashCommands}
        );

        console.log(`Sucessfully reloaded ${slashCommands.length} application (/) commands.`)
    } catch (e) {
        console.error(e);
    }

}

main();
