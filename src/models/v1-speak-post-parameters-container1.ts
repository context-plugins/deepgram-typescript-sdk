import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersContainer1 = {
  Wav: "wav",
} as const;
export type V1SpeakPostParametersContainer1 =
  | (typeof V1SpeakPostParametersContainer1)[keyof typeof V1SpeakPostParametersContainer1]
  | (string & {});

export const v1SpeakPostParametersContainer1Schema: EnumSchema<V1SpeakPostParametersContainer1> =
  s.enumOf<V1SpeakPostParametersContainer1>(V1SpeakPostParametersContainer1);
