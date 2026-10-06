import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Deployment type for the requests */
export const V1ProjectsProjectIdRequestsGetParametersDeployment = {
  Hosted: "hosted",
  Beta: "beta",
  SelfHosted: "self-hosted",
} as const;
export type V1ProjectsProjectIdRequestsGetParametersDeployment =
  | (typeof V1ProjectsProjectIdRequestsGetParametersDeployment)[keyof typeof V1ProjectsProjectIdRequestsGetParametersDeployment]
  | (string & {});

export const v1ProjectsProjectIdRequestsGetParametersDeploymentSchema: EnumSchema<V1ProjectsProjectIdRequestsGetParametersDeployment> =
  s.enumOf<V1ProjectsProjectIdRequestsGetParametersDeployment>(
    V1ProjectsProjectIdRequestsGetParametersDeployment,
  );
