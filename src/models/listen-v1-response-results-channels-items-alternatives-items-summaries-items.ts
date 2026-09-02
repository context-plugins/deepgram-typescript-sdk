import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems = {
  summary?: string;
  startWord?: number;
  endWord?: number;
};

export const listenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItemsSchema: Schema<ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems> =
  s.object<ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems>({
    summary: s.optional(s.string()),
    startWord: s.optional(s.number()),
    endWord: s.optional(s.number()),
    _keysMap: {
      startWord: "start_word",
      endWord: "end_word",
    },
  });
