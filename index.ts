import { ScottClient } from "@structures";
import DiscordJS from "discord.js";
import { readFileSync } from "fs";
import { resolve } from "path";

Object.assign(global, {
    client: new ScottClient({
        paths: {
            commands: "./src/commands",
        }
    }),
    DiscordJS,
    importJSON(path: string) {
        return readFileSync(resolve(path));
    }
});
