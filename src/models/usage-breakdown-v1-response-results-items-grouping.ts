import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageBreakdownV1ResponseResultsItemsGrouping = {
  /** Start date for this group */
  start?: string;
  /** End date for this group */
  end?: string;
  /** Optional accessor identifier */
  accessor?: string | null;
  /** Optional endpoint identifier */
  endpoint?: string | null;
  /** Optional feature set identifier */
  featureSet?: string | null;
  models?: string[];
  /** Optional method identifier */
  method?: string | null;
  /** Optional list of tags, null unless grouped by tags. */
  tags?: string[] | null;
  /** Optional deployment identifier */
  deployment?: string | null;
};

export const usageBreakdownV1ResponseResultsItemsGroupingSchema: Schema<UsageBreakdownV1ResponseResultsItemsGrouping> =
  s.object<UsageBreakdownV1ResponseResultsItemsGrouping>({
    start: s.optional(s.dateOnly()),
    end: s.optional(s.dateOnly()),
    accessor: s.optionalNullable(s.string()),
    endpoint: s.optionalNullable(s.string()),
    featureSet: s.optionalNullable(s.string()),
    models: s.optional(s.array(s.string())),
    method: s.optionalNullable(s.string()),
    tags: s.optionalNullable(s.array(s.string())),
    deployment: s.optionalNullable(s.string()),
    _keysMap: {
      featureSet: "feature_set",
    },
  });
