import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageBreakdownV1ResponseResultsItemsGrouping = {
  start?: string;
  end?: string;
  accessor?: string | null;
  endpoint?: string | null;
  featureSet?: string | null;
  models?: string[];
  method?: string | null;
  tags?: string[] | null;
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
