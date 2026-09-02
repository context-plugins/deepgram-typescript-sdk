import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems = {
  text?: string;
  startWord?: number;
  endWord?: number;
  topics?: string[];
};

export const listenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItemsSchema: Schema<ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems> =
  s.object<ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems>({
    text: s.optional(s.string()),
    startWord: s.optional(s.number()),
    endWord: s.optional(s.number()),
    topics: s.optional(s.array(s.string())),
    _keysMap: {
      startWord: "start_word",
      endWord: "end_word",
    },
  });
