import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - opus. Sample rate is fixed at 48000 Hz. */
export const V1SpeakPostParametersSampleRate4 = {
  _48000: "48000",
} as const;
export type V1SpeakPostParametersSampleRate4 =
  | (typeof V1SpeakPostParametersSampleRate4)[keyof typeof V1SpeakPostParametersSampleRate4]
  | (string & {});

export const v1SpeakPostParametersSampleRate4Schema: EnumSchema<V1SpeakPostParametersSampleRate4> =
  s.enumOf<V1SpeakPostParametersSampleRate4>(V1SpeakPostParametersSampleRate4);
