import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - opus. Supported container - ogg (default). */
export const V2SpeakPostParametersContainer4 = {
  Ogg: "ogg",
} as const;
export type V2SpeakPostParametersContainer4 =
  | (typeof V2SpeakPostParametersContainer4)[keyof typeof V2SpeakPostParametersContainer4]
  | (string & {});

export const v2SpeakPostParametersContainer4Schema: EnumSchema<V2SpeakPostParametersContainer4> =
  s.enumOf<V2SpeakPostParametersContainer4>(V2SpeakPostParametersContainer4);
