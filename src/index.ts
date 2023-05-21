import dotenv from "dotenv";
import {DiscordClientWrapper} from "./infrastructure/discord/DiscordClientWrapper";
import {Client, Collection} from "discord.js";
import * as path from "path";
import * as fs from "fs";
import {SlashCommand} from "./domain/discord/commands/slash/SlashCommand";

dotenv.config();

const slashCommandsPath = path.join(__dirname, "domain/discord/commands/slash/impl");
const slashCommands = new Collection<string, SlashCommand>();

function* walkSync(dirPath: string): IterableIterator<string> {
    const files = fs.readdirSync(dirPath, {withFileTypes: true});

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
        const command = (new (await import(file)).default());

        slashCommands.set(command.slashCommand.name, command);
    }

    const client = new DiscordClientWrapper(
        new Client({
            intents: ["Guilds"]
        }),
        slashCommands
    );

}

main();
