import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - mp3. Popular compressed audio format for music and streaming. */
export const V1SpeakPostParametersEncoding4 = {
  Mp3: "mp3",
} as const;
export type V1SpeakPostParametersEncoding4 =
  | (typeof V1SpeakPostParametersEncoding4)[keyof typeof V1SpeakPostParametersEncoding4]
  | (string & {});

export const v1SpeakPostParametersEncoding4Schema: EnumSchema<V1SpeakPostParametersEncoding4> =
  s.enumOf<V1SpeakPostParametersEncoding4>(V1SpeakPostParametersEncoding4);
