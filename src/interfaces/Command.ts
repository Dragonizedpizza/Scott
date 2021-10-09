import {
  ApplicationCommandOption,
  CommandInteractionOptionResolver,
  CommandInteraction,
  Message,
  ContextMenuInteraction,
} from "discord.js";

export interface Command {
  name: string;
  aliases: string[] | void;
  description: string;
  applicationBased: {
    context?: {
      options: ApplicationCommandOption[];
      run: ({
        interaction,
        options,
      }: {
        interaction: ContextMenuInteraction;
        options: CommandInteractionOptionResolver;
      }) => Promise<ContextMenuInteraction | void> | void;
    };
    slash: {
      run: ({
        interaction,
        options,
      }: {
        interaction: CommandInteraction;
        options: CommandInteractionOptionResolver;
      }) => Promise<CommandInteraction | void> | void;
    };
  };
  path: string;
  run: ({
    message,
    args,
  }: {
    message: Message;
    args: string[];
  }) => Promise<Message | void> | void;
};