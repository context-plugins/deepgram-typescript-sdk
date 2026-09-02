import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdUsageBreakdownGetParametersGrouping = {
  Accessor: "accessor",
  Endpoint: "endpoint",
  FeatureSet: "feature_set",
  Models: "models",
  Method: "method",
  Tags: "tags",
  Deployment: "deployment",
} as const;
export type V1ProjectsProjectIdUsageBreakdownGetParametersGrouping =
  | (typeof V1ProjectsProjectIdUsageBreakdownGetParametersGrouping)[keyof typeof V1ProjectsProjectIdUsageBreakdownGetParametersGrouping]
  | (string & {});

export const v1ProjectsProjectIdUsageBreakdownGetParametersGroupingSchema: EnumSchema<V1ProjectsProjectIdUsageBreakdownGetParametersGrouping> =
  s.enumOf<V1ProjectsProjectIdUsageBreakdownGetParametersGrouping>(
    V1ProjectsProjectIdUsageBreakdownGetParametersGrouping,
  );
