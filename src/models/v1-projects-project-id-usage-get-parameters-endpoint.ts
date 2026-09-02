import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdUsageGetParametersEndpoint = {
  Listen: "listen",
  Read: "read",
  Speak: "speak",
  Agent: "agent",
} as const;
export type V1ProjectsProjectIdUsageGetParametersEndpoint =
  | (typeof V1ProjectsProjectIdUsageGetParametersEndpoint)[keyof typeof V1ProjectsProjectIdUsageGetParametersEndpoint]
  | (string & {});

export const v1ProjectsProjectIdUsageGetParametersEndpointSchema: EnumSchema<V1ProjectsProjectIdUsageGetParametersEndpoint> =
  s.enumOf<V1ProjectsProjectIdUsageGetParametersEndpoint>(V1ProjectsProjectIdUsageGetParametersEndpoint);
