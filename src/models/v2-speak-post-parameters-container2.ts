import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersContainer2 = {
  Wav: "wav",
} as const;
export type V2SpeakPostParametersContainer2 =
  | (typeof V2SpeakPostParametersContainer2)[keyof typeof V2SpeakPostParametersContainer2]
  | (string & {});

export const v2SpeakPostParametersContainer2Schema: EnumSchema<V2SpeakPostParametersContainer2> =
  s.enumOf<V2SpeakPostParametersContainer2>(V2SpeakPostParametersContainer2);
