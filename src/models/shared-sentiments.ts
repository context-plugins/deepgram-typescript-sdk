import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sharedSentimentsAverageSchema, type SharedSentimentsAverage } from "./shared-sentiments-average.js";
import {
  sharedSentimentsSegmentsItemsSchema,
  type SharedSentimentsSegmentsItems,
} from "./shared-sentiments-segments-items.js";

export type SharedSentiments = {
  segments?: SharedSentimentsSegmentsItems[];
  average?: SharedSentimentsAverage;
};

export const sharedSentimentsSchema: Schema<SharedSentiments> = s.object<SharedSentiments>({
  segments: s.optional(s.array(s.lazy(() => sharedSentimentsSegmentsItemsSchema))),
  average: s.optional(s.lazy(() => sharedSentimentsAverageSchema)),
});
