import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersContainer0 = {
  None: "none",
} as const;
export type V1SpeakPostParametersContainer0 =
  | (typeof V1SpeakPostParametersContainer0)[keyof typeof V1SpeakPostParametersContainer0]
  | (string & {});

export const v1SpeakPostParametersContainer0Schema: EnumSchema<V1SpeakPostParametersContainer0> =
  s.enumOf<V1SpeakPostParametersContainer0>(V1SpeakPostParametersContainer0);
