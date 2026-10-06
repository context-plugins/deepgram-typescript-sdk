import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - flac. Lossless audio format for high-quality compression. */
export const V2SpeakPostParametersEncoding1 = {
  Flac: "flac",
} as const;
export type V2SpeakPostParametersEncoding1 =
  | (typeof V2SpeakPostParametersEncoding1)[keyof typeof V2SpeakPostParametersEncoding1]
  | (string & {});

export const v2SpeakPostParametersEncoding1Schema: EnumSchema<V2SpeakPostParametersEncoding1> =
  s.enumOf<V2SpeakPostParametersEncoding1>(V2SpeakPostParametersEncoding1);
