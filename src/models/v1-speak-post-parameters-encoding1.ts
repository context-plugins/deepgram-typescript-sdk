import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - flac. Lossless audio format for high-quality compression. */
export const V1SpeakPostParametersEncoding1 = {
  Flac: "flac",
} as const;
export type V1SpeakPostParametersEncoding1 =
  | (typeof V1SpeakPostParametersEncoding1)[keyof typeof V1SpeakPostParametersEncoding1]
  | (string & {});

export const v1SpeakPostParametersEncoding1Schema: EnumSchema<V1SpeakPostParametersEncoding1> =
  s.enumOf<V1SpeakPostParametersEncoding1>(V1SpeakPostParametersEncoding1);
