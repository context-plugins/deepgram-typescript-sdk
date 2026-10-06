import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - mulaw. Supported container - wav (default), or no container. */
export const V1SpeakPostParametersContainer2 = {
  Wav: "wav",
} as const;
export type V1SpeakPostParametersContainer2 =
  | (typeof V1SpeakPostParametersContainer2)[keyof typeof V1SpeakPostParametersContainer2]
  | (string & {});

export const v1SpeakPostParametersContainer2Schema: EnumSchema<V1SpeakPostParametersContainer2> =
  s.enumOf<V1SpeakPostParametersContainer2>(V1SpeakPostParametersContainer2);
