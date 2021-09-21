import { ApplicationCommandOptionData } from "discord.js";

export interface Command {
    name: string;
    aliases: string[] | void;
    description: string;
    slash: {
        options: ApplicationCommandOptionData[]
    },
    path: string;
};