import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersSampleRate3 = {
  _8000: "8000",
  _16000: "16000",
  _22050: "22050",
  _32000: "32000",
  _48000: "48000",
} as const;
export type V2SpeakPostParametersSampleRate3 =
  | (typeof V2SpeakPostParametersSampleRate3)[keyof typeof V2SpeakPostParametersSampleRate3]
  | (string & {});

export const v2SpeakPostParametersSampleRate3Schema: EnumSchema<V2SpeakPostParametersSampleRate3> =
  s.enumOf<V2SpeakPostParametersSampleRate3>(V2SpeakPostParametersSampleRate3);
