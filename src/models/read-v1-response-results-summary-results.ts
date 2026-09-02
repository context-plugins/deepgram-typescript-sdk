import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  readV1ResponseResultsSummaryResultsSummarySchema,
  type ReadV1ResponseResultsSummaryResultsSummary,
} from "./read-v1-response-results-summary-results-summary.js";

export type ReadV1ResponseResultsSummaryResults = {
  summary?: ReadV1ResponseResultsSummaryResultsSummary;
};

export const readV1ResponseResultsSummaryResultsSchema: Schema<ReadV1ResponseResultsSummaryResults> =
  s.object<ReadV1ResponseResultsSummaryResults>({
    summary: s.optional(s.lazy(() => readV1ResponseResultsSummaryResultsSummarySchema)),
  });
