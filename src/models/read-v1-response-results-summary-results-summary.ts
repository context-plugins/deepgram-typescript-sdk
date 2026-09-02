import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadV1ResponseResultsSummaryResultsSummary = {
  text?: string;
};

export const readV1ResponseResultsSummaryResultsSummarySchema: Schema<ReadV1ResponseResultsSummaryResultsSummary> =
  s.object<ReadV1ResponseResultsSummaryResultsSummary>({
    text: s.optional(s.string()),
  });
