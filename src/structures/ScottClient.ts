import { Client } from "discord.js";
import { ScottClientOptions } from "@interfaces";

export class ScottClient extends Client {
    constructor(options?: ScottClientOptions) {
        super(Object.assign(options, { intents: 32767 }));
    }
};