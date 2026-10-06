import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SharedSentimentsAverage = {
  sentiment?: string;
  sentimentScore?: number;
};

export const sharedSentimentsAverageSchema: Schema<SharedSentimentsAverage> =
  s.object<SharedSentimentsAverage>({
    sentiment: s.optional(s.string()),
    sentimentScore: s.optional(s.float64()),
    _keysMap: {
      sentimentScore: "sentiment_score",
    },
  });
