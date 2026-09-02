import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingBreakdownV1ResponseResultsItemsGrouping = {
  start?: string;
  end?: string;
  accessor?: string | null;
  deployment?: string | null;
  lineItem?: string | null;
  tags?: string[] | null;
};

export const billingBreakdownV1ResponseResultsItemsGroupingSchema: Schema<BillingBreakdownV1ResponseResultsItemsGrouping> =
  s.object<BillingBreakdownV1ResponseResultsItemsGrouping>({
    start: s.optional(s.dateOnly()),
    end: s.optional(s.dateOnly()),
    accessor: s.optionalNullable(s.string()),
    deployment: s.optionalNullable(s.string()),
    lineItem: s.optionalNullable(s.string()),
    tags: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      lineItem: "line_item",
    },
  });
