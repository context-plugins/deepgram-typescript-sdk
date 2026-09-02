import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersEncoding3 = {
  Alaw: "alaw",
} as const;
export type V2SpeakPostParametersEncoding3 =
  | (typeof V2SpeakPostParametersEncoding3)[keyof typeof V2SpeakPostParametersEncoding3]
  | (string & {});

export const v2SpeakPostParametersEncoding3Schema: EnumSchema<V2SpeakPostParametersEncoding3> =
  s.enumOf<V2SpeakPostParametersEncoding3>(V2SpeakPostParametersEncoding3);
