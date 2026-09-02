import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersEncoding3 = {
  Alaw: "alaw",
} as const;
export type V1SpeakPostParametersEncoding3 =
  | (typeof V1SpeakPostParametersEncoding3)[keyof typeof V1SpeakPostParametersEncoding3]
  | (string & {});

export const v1SpeakPostParametersEncoding3Schema: EnumSchema<V1SpeakPostParametersEncoding3> =
  s.enumOf<V1SpeakPostParametersEncoding3>(V1SpeakPostParametersEncoding3);
