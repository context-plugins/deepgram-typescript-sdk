import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SharedSentimentsSegmentsItems = {
  text?: string;
  startWord?: number;
  endWord?: number;
  sentiment?: string;
  sentimentScore?: number;
};

export const sharedSentimentsSegmentsItemsSchema: Schema<SharedSentimentsSegmentsItems> =
  s.object<SharedSentimentsSegmentsItems>({
    text: s.optional(s.string()),
    startWord: s.optional(s.float64()),
    endWord: s.optional(s.float64()),
    sentiment: s.optional(s.string()),
    sentimentScore: s.optional(s.float64()),
    _keysMap: {
      startWord: "start_word",
      endWord: "end_word",
      sentimentScore: "sentiment_score",
    },
  });
