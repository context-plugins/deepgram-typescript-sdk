import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingBreakdownV1ResponseResultsItemsGroupingSchema,
  type BillingBreakdownV1ResponseResultsItemsGrouping,
} from "./billing-breakdown-v1-response-results-items-grouping.js";

export type BillingBreakdownV1ResponseResultsItems = {
  /** USD cost of the billing for this grouping */
  dollars: number;
  grouping: BillingBreakdownV1ResponseResultsItemsGrouping;
};

export const billingBreakdownV1ResponseResultsItemsSchema: Schema<BillingBreakdownV1ResponseResultsItems> =
  s.object<BillingBreakdownV1ResponseResultsItems>({
    dollars: s.float64(),
    grouping: billingBreakdownV1ResponseResultsItemsGroupingSchema,
  });
