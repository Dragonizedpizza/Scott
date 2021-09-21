import { ApplicationCommandOptionData, Interaction, CommandInteractionOptionResolver, Message } from "discord.js";

export interface Command {
    name: string;
    aliases: string[] | void;
    description: string;
    slash: {
        options: ApplicationCommandOptionData[],
        run: ({ interaction, options }: { interaction: Interaction, options: CommandInteractionOptionResolver }) => Promise<Interaction | void> | void;
    },
    path: string;
    run: ({ message, args }: { message: Message, args: string[] }) => Promise<Message | void> | void;
};