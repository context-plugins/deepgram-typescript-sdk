import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdBillingBreakdownGetParametersDeployment = {
  Hosted: "hosted",
  Beta: "beta",
  SelfHosted: "self-hosted",
} as const;
export type V1ProjectsProjectIdBillingBreakdownGetParametersDeployment =
  | (typeof V1ProjectsProjectIdBillingBreakdownGetParametersDeployment)[keyof typeof V1ProjectsProjectIdBillingBreakdownGetParametersDeployment]
  | (string & {});

export const v1ProjectsProjectIdBillingBreakdownGetParametersDeploymentSchema: EnumSchema<V1ProjectsProjectIdBillingBreakdownGetParametersDeployment> =
  s.enumOf<V1ProjectsProjectIdBillingBreakdownGetParametersDeployment>(
    V1ProjectsProjectIdBillingBreakdownGetParametersDeployment,
  );
