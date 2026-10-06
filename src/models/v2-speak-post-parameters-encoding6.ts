import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - aac. Advanced audio format offering better quality at smaller file sizes than mp3. */
export const V2SpeakPostParametersEncoding6 = {
  Aac: "aac",
} as const;
export type V2SpeakPostParametersEncoding6 =
  | (typeof V2SpeakPostParametersEncoding6)[keyof typeof V2SpeakPostParametersEncoding6]
  | (string & {});

export const v2SpeakPostParametersEncoding6Schema: EnumSchema<V2SpeakPostParametersEncoding6> =
  s.enumOf<V2SpeakPostParametersEncoding6>(V2SpeakPostParametersEncoding6);
