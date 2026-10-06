import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingBreakdownV1ResponseResultsItemsGrouping = {
  /** Start date for this group */
  start?: string;
  /** End date for this group */
  end?: string;
  /** Optional accessor identifier, null unless grouped by accessor. */
  accessor?: string | null;
  /** Optional deployment identifier, null unless grouped by deployment. */
  deployment?: string | null;
  /** Optional line item identifier, null unless grouped by line item. */
  lineItem?: string | null;
  /** Optional list of tags, null unless grouped by tags. */
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
