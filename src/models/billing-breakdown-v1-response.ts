import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingBreakdownV1ResponseResolutionSchema,
  type BillingBreakdownV1ResponseResolution,
} from "./billing-breakdown-v1-response-resolution.js";
import {
  billingBreakdownV1ResponseResultsItemsSchema,
  type BillingBreakdownV1ResponseResultsItems,
} from "./billing-breakdown-v1-response-results-items.js";

export type BillingBreakdownV1Response = {
  start: string;
  end: string;
  resolution: BillingBreakdownV1ResponseResolution;
  results: BillingBreakdownV1ResponseResultsItems[];
};

export const billingBreakdownV1ResponseSchema: Schema<BillingBreakdownV1Response> =
  s.object<BillingBreakdownV1Response>({
    start: s.dateOnly(),
    end: s.dateOnly(),
    resolution: billingBreakdownV1ResponseResolutionSchema,
    results: s.array(s.lazy(() => billingBreakdownV1ResponseResultsItemsSchema)),
  });
