import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - alaw. Supported sample rates - 8000, 16000 Hz. */
export const V2SpeakPostParametersSampleRate2 = {
  _8000: "8000",
  _16000: "16000",
} as const;
export type V2SpeakPostParametersSampleRate2 =
  | (typeof V2SpeakPostParametersSampleRate2)[keyof typeof V2SpeakPostParametersSampleRate2]
  | (string & {});

export const v2SpeakPostParametersSampleRate2Schema: EnumSchema<V2SpeakPostParametersSampleRate2> =
  s.enumOf<V2SpeakPostParametersSampleRate2>(V2SpeakPostParametersSampleRate2);
