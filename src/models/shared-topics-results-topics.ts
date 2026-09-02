import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sharedTopicsResultsTopicsSegmentsItemsSchema,
  type SharedTopicsResultsTopicsSegmentsItems,
} from "./shared-topics-results-topics-segments-items.js";

export type SharedTopicsResultsTopics = {
  segments?: SharedTopicsResultsTopicsSegmentsItems[];
};

export const sharedTopicsResultsTopicsSchema: Schema<SharedTopicsResultsTopics> =
  s.object<SharedTopicsResultsTopics>({
    segments: s.optional(s.array(s.lazy(() => sharedTopicsResultsTopicsSegmentsItemsSchema))),
  });
