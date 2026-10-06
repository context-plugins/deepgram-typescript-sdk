import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SharedIntentsResultsIntentsSegmentsItemsIntentsItems = {
  intent?: string;
  confidenceScore?: number;
};

export const sharedIntentsResultsIntentsSegmentsItemsIntentsItemsSchema: Schema<SharedIntentsResultsIntentsSegmentsItemsIntentsItems> =
  s.object<SharedIntentsResultsIntentsSegmentsItemsIntentsItems>({
    intent: s.optional(s.string()),
    confidenceScore: s.optional(s.float64()),
    _keysMap: {
      confidenceScore: "confidence_score",
    },
  });
