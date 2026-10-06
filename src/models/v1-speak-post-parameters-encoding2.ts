import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - mulaw. Compressed audio format commonly used in telephony. */
export const V1SpeakPostParametersEncoding2 = {
  Mulaw: "mulaw",
} as const;
export type V1SpeakPostParametersEncoding2 =
  | (typeof V1SpeakPostParametersEncoding2)[keyof typeof V1SpeakPostParametersEncoding2]
  | (string & {});

export const v1SpeakPostParametersEncoding2Schema: EnumSchema<V1SpeakPostParametersEncoding2> =
  s.enumOf<V1SpeakPostParametersEncoding2>(V1SpeakPostParametersEncoding2);
