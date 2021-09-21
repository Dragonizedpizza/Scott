import { ApplicationCommandOptionData } from "discord.js";

export interface Command {
    name: string;
    aliases: string | string[] | void;
    alias: string | void;
    description: string;
    slash: {
        options: ApplicationCommandOptionData[]
    },
    path: string;
};