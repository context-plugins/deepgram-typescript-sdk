import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** No container. */
export const V2SpeakPostParametersContainer0 = {
  None: "none",
} as const;
export type V2SpeakPostParametersContainer0 =
  | (typeof V2SpeakPostParametersContainer0)[keyof typeof V2SpeakPostParametersContainer0]
  | (string & {});

export const v2SpeakPostParametersContainer0Schema: EnumSchema<V2SpeakPostParametersContainer0> =
  s.enumOf<V2SpeakPostParametersContainer0>(V2SpeakPostParametersContainer0);
