import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Deployment type for the requests */
export const V1ProjectsProjectIdUsageGetParametersDeployment = {
  Hosted: "hosted",
  Beta: "beta",
  SelfHosted: "self-hosted",
} as const;
export type V1ProjectsProjectIdUsageGetParametersDeployment =
  | (typeof V1ProjectsProjectIdUsageGetParametersDeployment)[keyof typeof V1ProjectsProjectIdUsageGetParametersDeployment]
  | (string & {});

export const v1ProjectsProjectIdUsageGetParametersDeploymentSchema: EnumSchema<V1ProjectsProjectIdUsageGetParametersDeployment> =
  s.enumOf<V1ProjectsProjectIdUsageGetParametersDeployment>(V1ProjectsProjectIdUsageGetParametersDeployment);
