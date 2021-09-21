import { Collection } from "discord.js";
import { ScottClient } from "./ScottClient";

/**
 * Extended collection for fancy name, asyncForEach and client property.
 * @extends {Collection}
 */

export class CollectionBasedManager extends Collection<string, unknown> {
    client: ScottClient;

    constructor({ client, data }: { client: ScottClient; data: Iterable<[string, unknown]> }) {
        super(data);

        this.client = client;
    }
    async asyncForEach(fn: (key: string, value: unknown) => Promise<unknown>, thisArg?: unknown): Promise<void> {
        for await (const [key, value] of this.entries()) await fn.call(thisArg ?? this, key, value);
    }
};