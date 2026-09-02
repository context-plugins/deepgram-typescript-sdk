import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersSampleRate1 = {
  _8000: "8000",
  _16000: "16000",
} as const;
export type V2SpeakPostParametersSampleRate1 =
  | (typeof V2SpeakPostParametersSampleRate1)[keyof typeof V2SpeakPostParametersSampleRate1]
  | (string & {});

export const v2SpeakPostParametersSampleRate1Schema: EnumSchema<V2SpeakPostParametersSampleRate1> =
  s.enumOf<V2SpeakPostParametersSampleRate1>(V2SpeakPostParametersSampleRate1);
