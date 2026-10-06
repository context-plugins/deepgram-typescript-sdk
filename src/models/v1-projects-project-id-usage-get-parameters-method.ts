import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Method type for the request */
export const V1ProjectsProjectIdUsageGetParametersMethod = {
  Sync: "sync",
  Async: "async",
  Streaming: "streaming",
} as const;
export type V1ProjectsProjectIdUsageGetParametersMethod =
  | (typeof V1ProjectsProjectIdUsageGetParametersMethod)[keyof typeof V1ProjectsProjectIdUsageGetParametersMethod]
  | (string & {});

export const v1ProjectsProjectIdUsageGetParametersMethodSchema: EnumSchema<V1ProjectsProjectIdUsageGetParametersMethod> =
  s.enumOf<V1ProjectsProjectIdUsageGetParametersMethod>(V1ProjectsProjectIdUsageGetParametersMethod);
