import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sharedIntentsResultsIntentsSegmentsItemsIntentsItemsSchema,
  type SharedIntentsResultsIntentsSegmentsItemsIntentsItems,
} from "./shared-intents-results-intents-segments-items-intents-items.js";

export type SharedIntentsResultsIntentsSegmentsItems = {
  text?: string;
  startWord?: number;
  endWord?: number;
  intents?: SharedIntentsResultsIntentsSegmentsItemsIntentsItems[];
};

export const sharedIntentsResultsIntentsSegmentsItemsSchema: Schema<SharedIntentsResultsIntentsSegmentsItems> =
  s.object<SharedIntentsResultsIntentsSegmentsItems>({
    text: s.optional(s.string()),
    startWord: s.optional(s.number()),
    endWord: s.optional(s.number()),
    intents: s.optional(s.array(s.lazy(() => sharedIntentsResultsIntentsSegmentsItemsIntentsItemsSchema))),
    _keysMap: {
      startWord: "start_word",
      endWord: "end_word",
    },
  });
