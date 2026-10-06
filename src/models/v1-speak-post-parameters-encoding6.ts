import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - aac. Advanced audio format offering better quality at smaller file sizes than mp3. */
export const V1SpeakPostParametersEncoding6 = {
  Aac: "aac",
} as const;
export type V1SpeakPostParametersEncoding6 =
  | (typeof V1SpeakPostParametersEncoding6)[keyof typeof V1SpeakPostParametersEncoding6]
  | (string & {});

export const v1SpeakPostParametersEncoding6Schema: EnumSchema<V1SpeakPostParametersEncoding6> =
  s.enumOf<V1SpeakPostParametersEncoding6>(V1SpeakPostParametersEncoding6);
