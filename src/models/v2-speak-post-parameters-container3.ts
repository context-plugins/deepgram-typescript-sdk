import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - alaw. Supported container - wav (default), or no container. */
export const V2SpeakPostParametersContainer3 = {
  Wav: "wav",
} as const;
export type V2SpeakPostParametersContainer3 =
  | (typeof V2SpeakPostParametersContainer3)[keyof typeof V2SpeakPostParametersContainer3]
  | (string & {});

export const v2SpeakPostParametersContainer3Schema: EnumSchema<V2SpeakPostParametersContainer3> =
  s.enumOf<V2SpeakPostParametersContainer3>(V2SpeakPostParametersContainer3);
