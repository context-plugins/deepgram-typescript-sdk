import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - opus. Supported container - ogg (default). */
export const V1SpeakPostParametersContainer4 = {
  Ogg: "ogg",
} as const;
export type V1SpeakPostParametersContainer4 =
  | (typeof V1SpeakPostParametersContainer4)[keyof typeof V1SpeakPostParametersContainer4]
  | (string & {});

export const v1SpeakPostParametersContainer4Schema: EnumSchema<V1SpeakPostParametersContainer4> =
  s.enumOf<V1SpeakPostParametersContainer4>(V1SpeakPostParametersContainer4);
