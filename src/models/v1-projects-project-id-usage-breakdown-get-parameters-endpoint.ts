import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint = {
  Listen: "listen",
  Read: "read",
  Speak: "speak",
  Agent: "agent",
} as const;
export type V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint =
  | (typeof V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint)[keyof typeof V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint]
  | (string & {});

export const v1ProjectsProjectIdUsageBreakdownGetParametersEndpointSchema: EnumSchema<V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint> =
  s.enumOf<V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint>(
    V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint,
  );
