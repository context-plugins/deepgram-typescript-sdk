import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sharedIntentsResultsIntentsSegmentsItemsSchema,
  type SharedIntentsResultsIntentsSegmentsItems,
} from "./shared-intents-results-intents-segments-items.js";

export type SharedIntentsResultsIntents = {
  segments?: SharedIntentsResultsIntentsSegmentsItems[];
};

export const sharedIntentsResultsIntentsSchema: Schema<SharedIntentsResultsIntents> =
  s.object<SharedIntentsResultsIntents>({
    segments: s.optional(s.array(s.lazy(() => sharedIntentsResultsIntentsSegmentsItemsSchema))),
  });
