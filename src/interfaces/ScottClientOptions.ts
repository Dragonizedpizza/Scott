import { ClientOptions, BitFieldResolvable, IntentsString } from "discord.js";

export interface ScottClientOptions extends ClientOptions {
  intents?: BitFieldResolvable<IntentsString, number>;
  paths: {
    commands?: string;
    events?: string;
  };
}
