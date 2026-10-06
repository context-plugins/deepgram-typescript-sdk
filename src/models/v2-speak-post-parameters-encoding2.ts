import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - mulaw. Compressed audio format commonly used in telephony. */
export const V2SpeakPostParametersEncoding2 = {
  Mulaw: "mulaw",
} as const;
export type V2SpeakPostParametersEncoding2 =
  | (typeof V2SpeakPostParametersEncoding2)[keyof typeof V2SpeakPostParametersEncoding2]
  | (string & {});

export const v2SpeakPostParametersEncoding2Schema: EnumSchema<V2SpeakPostParametersEncoding2> =
  s.enumOf<V2SpeakPostParametersEncoding2>(V2SpeakPostParametersEncoding2);
