import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdRequestsGetParametersMethod = {
  Sync: "sync",
  Async: "async",
  Streaming: "streaming",
} as const;
export type V1ProjectsProjectIdRequestsGetParametersMethod =
  | (typeof V1ProjectsProjectIdRequestsGetParametersMethod)[keyof typeof V1ProjectsProjectIdRequestsGetParametersMethod]
  | (string & {});

export const v1ProjectsProjectIdRequestsGetParametersMethodSchema: EnumSchema<V1ProjectsProjectIdRequestsGetParametersMethod> =
  s.enumOf<V1ProjectsProjectIdRequestsGetParametersMethod>(V1ProjectsProjectIdRequestsGetParametersMethod);
