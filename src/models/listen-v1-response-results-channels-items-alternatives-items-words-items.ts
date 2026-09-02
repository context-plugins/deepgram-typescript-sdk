import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems = {
  word?: string;
  start?: number;
  end?: number;
  confidence?: number;
};

export const listenV1ResponseResultsChannelsItemsAlternativesItemsWordsItemsSchema: Schema<ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems> =
  s.object<ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems>({
    word: s.optional(s.string()),
    start: s.optional(s.number()),
    end: s.optional(s.number()),
    confidence: s.optional(s.number()),
  });
