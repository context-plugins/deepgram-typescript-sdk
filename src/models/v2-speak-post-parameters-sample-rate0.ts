import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - linear16. Supported sample rates - 8000, 16000, 24000, 32000, 44100, 48000 Hz. */
export const V2SpeakPostParametersSampleRate0 = {
  _8000: "8000",
  _16000: "16000",
  _24000: "24000",
  _32000: "32000",
  _44100: "44100",
  _48000: "48000",
} as const;
export type V2SpeakPostParametersSampleRate0 =
  | (typeof V2SpeakPostParametersSampleRate0)[keyof typeof V2SpeakPostParametersSampleRate0]
  | (string & {});

export const v2SpeakPostParametersSampleRate0Schema: EnumSchema<V2SpeakPostParametersSampleRate0> =
  s.enumOf<V2SpeakPostParametersSampleRate0>(V2SpeakPostParametersSampleRate0);
