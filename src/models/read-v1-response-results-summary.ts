import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  readV1ResponseResultsSummaryResultsSchema,
  type ReadV1ResponseResultsSummaryResults,
} from "./read-v1-response-results-summary-results.js";

export type ReadV1ResponseResultsSummary = {
  results?: ReadV1ResponseResultsSummaryResults;
};

export const readV1ResponseResultsSummarySchema: Schema<ReadV1ResponseResultsSummary> =
  s.object<ReadV1ResponseResultsSummary>({
    results: s.optional(s.lazy(() => readV1ResponseResultsSummaryResultsSchema)),
  });
