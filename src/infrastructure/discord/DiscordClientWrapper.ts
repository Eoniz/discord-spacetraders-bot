import {Client, Collection, EmbedBuilder, Events, InteractionReplyOptions} from "discord.js";
import {SlashCommand} from "../../domain/discord/commands/slash/SlashCommand";
import SpaceTraderApiError from "../../domain/spacetraders/errors/SpaceTraderApiError";

export class DiscordClientWrapper {

    constructor(
        private readonly _client: Client,
        private readonly _slashCommands: Collection<string, SlashCommand>
    ) {
        _client.once(Events.ClientReady, (client) => {
            console.log(`Logged in as ${client.user.tag}`);
        });

        _client.on(Events.InteractionCreate, async (interaction) => {
            if (!interaction.isChatInputCommand()) {
                return;
            }

            const command = _slashCommands.get(interaction.commandName);

            if (!command) {
                return;
            }

            try {
                await command.execute(interaction);
            } catch (e) {
                console.error(e?.toString() ?? e);

                let title = "Oops! Something went wrong";
                let message = "There was an issue while executing this command!";
                let footer = null;

                if (e instanceof SpaceTraderApiError) {
                    title = `${e.codeError}.title`;
                    message = `${e.codeError}.message\n\nDetails:\n${Object.values(e.data).flat().join("\n")}`;
                    footer = {text: "SpaceTrader API"};
                }

                const embed = new EmbedBuilder()
                    .setTitle(title)
                    .setDescription(message)
                    .setFooter(footer)

                const payload = {embeds: [embed], ephemeral: true} satisfies InteractionReplyOptions;
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(payload);
                } else {
                    await interaction.reply(payload);
                }
            }
        });

        _client.login(process.env.DISCORD_TOKEN);
    }

}