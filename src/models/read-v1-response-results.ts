import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  readV1ResponseResultsSummarySchema,
  type ReadV1ResponseResultsSummary,
} from "./read-v1-response-results-summary.js";
import { sharedIntentsSchema, type SharedIntents } from "./shared-intents.js";
import { sharedSentimentsSchema, type SharedSentiments } from "./shared-sentiments.js";
import { sharedTopicsSchema, type SharedTopics } from "./shared-topics.js";

export type ReadV1ResponseResults = {
  summary?: ReadV1ResponseResultsSummary;
  topics?: SharedTopics;
  intents?: SharedIntents;
  sentiments?: SharedSentiments;
};

export const readV1ResponseResultsSchema: Schema<ReadV1ResponseResults> = s.object<ReadV1ResponseResults>({
  summary: s.optional(s.lazy(() => readV1ResponseResultsSummarySchema)),
  topics: s.optional(s.lazy(() => sharedTopicsSchema)),
  intents: s.optional(s.lazy(() => sharedIntentsSchema)),
  sentiments: s.optional(s.lazy(() => sharedSentimentsSchema)),
});
