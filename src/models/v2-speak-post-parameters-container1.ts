import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersContainer1 = {
  Wav: "wav",
} as const;
export type V2SpeakPostParametersContainer1 =
  | (typeof V2SpeakPostParametersContainer1)[keyof typeof V2SpeakPostParametersContainer1]
  | (string & {});

export const v2SpeakPostParametersContainer1Schema: EnumSchema<V2SpeakPostParametersContainer1> =
  s.enumOf<V2SpeakPostParametersContainer1>(V2SpeakPostParametersContainer1);
