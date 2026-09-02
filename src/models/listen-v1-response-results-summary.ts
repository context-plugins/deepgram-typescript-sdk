import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseResultsSummary = {
  result?: string;
  short?: string;
};

export const listenV1ResponseResultsSummarySchema: Schema<ListenV1ResponseResultsSummary> =
  s.object<ListenV1ResponseResultsSummary>({
    result: s.optional(s.string()),
    short: s.optional(s.string()),
  });
