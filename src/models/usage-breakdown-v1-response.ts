import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usageBreakdownV1ResponseResolutionSchema,
  type UsageBreakdownV1ResponseResolution,
} from "./usage-breakdown-v1-response-resolution.js";
import {
  usageBreakdownV1ResponseResultsItemsSchema,
  type UsageBreakdownV1ResponseResultsItems,
} from "./usage-breakdown-v1-response-results-items.js";

export type UsageBreakdownV1Response = {
  /** Start date of the usage period */
  start: string;
  /** End date of the usage period */
  end: string;
  resolution: UsageBreakdownV1ResponseResolution;
  results: UsageBreakdownV1ResponseResultsItems[];
};

export const usageBreakdownV1ResponseSchema: Schema<UsageBreakdownV1Response> =
  s.object<UsageBreakdownV1Response>({
    start: s.dateOnly(),
    end: s.dateOnly(),
    resolution: usageBreakdownV1ResponseResolutionSchema,
    results: s.array(s.lazy(() => usageBreakdownV1ResponseResultsItemsSchema)),
  });
