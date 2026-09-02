import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersEncoding4 = {
  Mp3: "mp3",
} as const;
export type V2SpeakPostParametersEncoding4 =
  | (typeof V2SpeakPostParametersEncoding4)[keyof typeof V2SpeakPostParametersEncoding4]
  | (string & {});

export const v2SpeakPostParametersEncoding4Schema: EnumSchema<V2SpeakPostParametersEncoding4> =
  s.enumOf<V2SpeakPostParametersEncoding4>(V2SpeakPostParametersEncoding4);
