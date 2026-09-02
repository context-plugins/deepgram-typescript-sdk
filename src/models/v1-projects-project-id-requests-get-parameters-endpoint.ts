import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdRequestsGetParametersEndpoint = {
  Listen: "listen",
  Read: "read",
  Speak: "speak",
  Agent: "agent",
} as const;
export type V1ProjectsProjectIdRequestsGetParametersEndpoint =
  | (typeof V1ProjectsProjectIdRequestsGetParametersEndpoint)[keyof typeof V1ProjectsProjectIdRequestsGetParametersEndpoint]
  | (string & {});

export const v1ProjectsProjectIdRequestsGetParametersEndpointSchema: EnumSchema<V1ProjectsProjectIdRequestsGetParametersEndpoint> =
  s.enumOf<V1ProjectsProjectIdRequestsGetParametersEndpoint>(
    V1ProjectsProjectIdRequestsGetParametersEndpoint,
  );
