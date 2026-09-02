import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems = {
  label?: string;
  value?: string;
  rawValue?: string;
  confidence?: number;
  startWord?: number;
  endWord?: number;
};

export const listenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItemsSchema: Schema<ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems> =
  s.object<ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems>({
    label: s.optional(s.string()),
    value: s.optional(s.string()),
    rawValue: s.optional(s.string()),
    confidence: s.optional(s.number()),
    startWord: s.optional(s.number()),
    endWord: s.optional(s.number()),
    _keysMap: {
      rawValue: "raw_value",
      startWord: "start_word",
      endWord: "end_word",
    },
  });
