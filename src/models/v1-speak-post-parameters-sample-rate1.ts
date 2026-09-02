import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersSampleRate1 = {
  _8000: "8000",
  _16000: "16000",
} as const;
export type V1SpeakPostParametersSampleRate1 =
  | (typeof V1SpeakPostParametersSampleRate1)[keyof typeof V1SpeakPostParametersSampleRate1]
  | (string & {});

export const v1SpeakPostParametersSampleRate1Schema: EnumSchema<V1SpeakPostParametersSampleRate1> =
  s.enumOf<V1SpeakPostParametersSampleRate1>(V1SpeakPostParametersSampleRate1);
