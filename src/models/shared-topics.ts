import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sharedTopicsResultsSchema, type SharedTopicsResults } from "./shared-topics-results.js";

/** Output whenever `topics=true` is used */
export type SharedTopics = {
  results?: SharedTopicsResults;
};

export const sharedTopicsSchema: Schema<SharedTopics> = s.object<SharedTopics>({
  results: s.optional(s.lazy(() => sharedTopicsResultsSchema)),
});
