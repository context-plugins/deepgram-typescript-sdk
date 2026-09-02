import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersSampleRate2 = {
  _8000: "8000",
  _16000: "16000",
} as const;
export type V1SpeakPostParametersSampleRate2 =
  | (typeof V1SpeakPostParametersSampleRate2)[keyof typeof V1SpeakPostParametersSampleRate2]
  | (string & {});

export const v1SpeakPostParametersSampleRate2Schema: EnumSchema<V1SpeakPostParametersSampleRate2> =
  s.enumOf<V1SpeakPostParametersSampleRate2>(V1SpeakPostParametersSampleRate2);
