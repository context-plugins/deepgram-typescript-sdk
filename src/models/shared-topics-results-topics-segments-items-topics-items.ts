import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SharedTopicsResultsTopicsSegmentsItemsTopicsItems = {
  topic?: string;
  confidenceScore?: number;
};

export const sharedTopicsResultsTopicsSegmentsItemsTopicsItemsSchema: Schema<SharedTopicsResultsTopicsSegmentsItemsTopicsItems> =
  s.object<SharedTopicsResultsTopicsSegmentsItemsTopicsItems>({
    topic: s.optional(s.string()),
    confidenceScore: s.optional(s.number()),
    _keysMap: {
      confidenceScore: "confidence_score",
    },
  });
