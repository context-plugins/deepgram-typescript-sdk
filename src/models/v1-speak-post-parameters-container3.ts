import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersContainer3 = {
  Wav: "wav",
} as const;
export type V1SpeakPostParametersContainer3 =
  | (typeof V1SpeakPostParametersContainer3)[keyof typeof V1SpeakPostParametersContainer3]
  | (string & {});

export const v1SpeakPostParametersContainer3Schema: EnumSchema<V1SpeakPostParametersContainer3> =
  s.enumOf<V1SpeakPostParametersContainer3>(V1SpeakPostParametersContainer3);
