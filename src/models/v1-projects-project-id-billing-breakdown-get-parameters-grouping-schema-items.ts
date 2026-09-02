import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems = {
  Accessor: "accessor",
  Deployment: "deployment",
  LineItem: "line_item",
  Tags: "tags",
} as const;
export type V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems =
  | (typeof V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems)[keyof typeof V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems]
  | (string & {});

export const v1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItemsSchema: EnumSchema<V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems> =
  s.enumOf<V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems>(
    V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems,
  );
