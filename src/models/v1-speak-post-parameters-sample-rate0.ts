import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersSampleRate0 = {
  _8000: "8000",
  _16000: "16000",
  _24000: "24000",
  _32000: "32000",
  _48000: "48000",
} as const;
export type V1SpeakPostParametersSampleRate0 =
  | (typeof V1SpeakPostParametersSampleRate0)[keyof typeof V1SpeakPostParametersSampleRate0]
  | (string & {});

export const v1SpeakPostParametersSampleRate0Schema: EnumSchema<V1SpeakPostParametersSampleRate0> =
  s.enumOf<V1SpeakPostParametersSampleRate0>(V1SpeakPostParametersSampleRate0);
