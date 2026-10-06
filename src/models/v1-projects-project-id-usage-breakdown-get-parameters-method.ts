import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Method type for the request */
export const V1ProjectsProjectIdUsageBreakdownGetParametersMethod = {
  Sync: "sync",
  Async: "async",
  Streaming: "streaming",
} as const;
export type V1ProjectsProjectIdUsageBreakdownGetParametersMethod =
  | (typeof V1ProjectsProjectIdUsageBreakdownGetParametersMethod)[keyof typeof V1ProjectsProjectIdUsageBreakdownGetParametersMethod]
  | (string & {});

export const v1ProjectsProjectIdUsageBreakdownGetParametersMethodSchema: EnumSchema<V1ProjectsProjectIdUsageBreakdownGetParametersMethod> =
  s.enumOf<V1ProjectsProjectIdUsageBreakdownGetParametersMethod>(
    V1ProjectsProjectIdUsageBreakdownGetParametersMethod,
  );
