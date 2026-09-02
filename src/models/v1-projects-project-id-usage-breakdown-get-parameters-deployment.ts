import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdUsageBreakdownGetParametersDeployment = {
  Hosted: "hosted",
  Beta: "beta",
  SelfHosted: "self-hosted",
} as const;
export type V1ProjectsProjectIdUsageBreakdownGetParametersDeployment =
  | (typeof V1ProjectsProjectIdUsageBreakdownGetParametersDeployment)[keyof typeof V1ProjectsProjectIdUsageBreakdownGetParametersDeployment]
  | (string & {});

export const v1ProjectsProjectIdUsageBreakdownGetParametersDeploymentSchema: EnumSchema<V1ProjectsProjectIdUsageBreakdownGetParametersDeployment> =
  s.enumOf<V1ProjectsProjectIdUsageBreakdownGetParametersDeployment>(
    V1ProjectsProjectIdUsageBreakdownGetParametersDeployment,
  );
