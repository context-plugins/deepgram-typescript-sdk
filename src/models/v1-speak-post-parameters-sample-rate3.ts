import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - mp3. Sample rate is fixed and not configurable (22050 Hz). */
export const V1SpeakPostParametersSampleRate3 = {
  _22050: "22050",
} as const;
export type V1SpeakPostParametersSampleRate3 =
  | (typeof V1SpeakPostParametersSampleRate3)[keyof typeof V1SpeakPostParametersSampleRate3]
  | (string & {});

export const v1SpeakPostParametersSampleRate3Schema: EnumSchema<V1SpeakPostParametersSampleRate3> =
  s.enumOf<V1SpeakPostParametersSampleRate3>(V1SpeakPostParametersSampleRate3);
