import {
    EmbedBuilder,
    Interaction,
    Message,
    type InteractionType,
    BaseInteraction,
    CommandInteraction,
    ButtonBuilder,
    ActionRowBuilder,
    InteractionResponse,
    ComponentType,
} from "discord.js";
import {clamp} from "../../common/utils/math";

export interface PaginateEmbedOptions {
    startPage: number;
}

const defaultPaginateEmbedOptions = {
    startPage: 0,
} satisfies PaginateEmbedOptions;

export class PaginateEmbed {

    private static readonly PREVIOUS_PAGE_BTN_ID    = "previousPageBtn";
    private static readonly NEXT_PAGE_BTN_ID        = "nextPageBtn";

    private _currentPage: number;

    constructor(
        private readonly _interaction: CommandInteraction | Message,
        private readonly _pages: Array<EmbedBuilder>,
        private readonly _opts?: Partial<PaginateEmbedOptions>
    ) {
        const opts = Object.assign({}, {...defaultPaginateEmbedOptions}, _opts);

        this._currentPage = clamp(opts.startPage, 0, _pages.length -  1);
    }

    public async reply() {
        if (this._interaction instanceof BaseInteraction && (this._interaction.replied || this._interaction.deferred)) {
            return this.editReply();
        }

        const embed = this.getCurrentPage();
        const previousPage = new ButtonBuilder()
            .setCustomId('previousPageBtn')
            .setEmoji(`⏪`)
            .setStyle(1);

        const nextPage = new ButtonBuilder()
            .setCustomId('nextPageBtn')
            .setEmoji(`⏩`)
            .setStyle(1);

        const row = new ActionRowBuilder()
            .addComponents(previousPage, nextPage);

        const message = await (this._interaction as unknown as CommandInteraction<'cached'>).reply({
            embeds: [embed],
            components: [row as any]
        });

        this.paginate(message);

        return message;
    }

    public async editReply() {

    }

    private paginate(message: InteractionResponse) {
        const collector = message.createMessageComponentCollector({
            filter: ({ customId }) => {
                return (
                    [PaginateEmbed.PREVIOUS_PAGE_BTN_ID, PaginateEmbed.NEXT_PAGE_BTN_ID].some((id) => {
                        return id === customId
                    })
                );
            },
            componentType: ComponentType.Button,
            time: 3_600_000
        });

        collector.on('collect', async i => {
            if (i.customId === `nextPageBtn`) {
                this.nextPage();
            }
            if (i.customId === `previousPageBtn`) {
                this.previousPage();
            }

            const newEmbed = this.getCurrentPage();
            await i.deferUpdate();
            await i.message.edit({ embeds: [newEmbed] });
        });

        return this;
    }

    private getCurrentPage() {
        return this._pages[this._currentPage];
    }

    private nextPage() {
        if (this._currentPage + 1 >= this._pages.length) {
            return false;
        }

        this._currentPage += 1;

        return true;
    }

    private previousPage() {
        if (this._currentPage - 1 < 0) {
            return false;
        }

        this._currentPage -= 1;

        return true;
    }

}