import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sharedTopicsResultsTopicsSchema,
  type SharedTopicsResultsTopics,
} from "./shared-topics-results-topics.js";

export type SharedTopicsResults = {
  topics?: SharedTopicsResultsTopics;
};

export const sharedTopicsResultsSchema: Schema<SharedTopicsResults> = s.object<SharedTopicsResults>({
  topics: s.optional(s.lazy(() => sharedTopicsResultsTopicsSchema)),
});
