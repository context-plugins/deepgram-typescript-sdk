import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdRequestsGetParametersStatus = {
  Succeeded: "succeeded",
  Failed: "failed",
} as const;
export type V1ProjectsProjectIdRequestsGetParametersStatus =
  | (typeof V1ProjectsProjectIdRequestsGetParametersStatus)[keyof typeof V1ProjectsProjectIdRequestsGetParametersStatus]
  | (string & {});

export const v1ProjectsProjectIdRequestsGetParametersStatusSchema: EnumSchema<V1ProjectsProjectIdRequestsGetParametersStatus> =
  s.enumOf<V1ProjectsProjectIdRequestsGetParametersStatus>(V1ProjectsProjectIdRequestsGetParametersStatus);
