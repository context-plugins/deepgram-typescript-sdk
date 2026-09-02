import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersEncoding5 = {
  Opus: "opus",
} as const;
export type V2SpeakPostParametersEncoding5 =
  | (typeof V2SpeakPostParametersEncoding5)[keyof typeof V2SpeakPostParametersEncoding5]
  | (string & {});

export const v2SpeakPostParametersEncoding5Schema: EnumSchema<V2SpeakPostParametersEncoding5> =
  s.enumOf<V2SpeakPostParametersEncoding5>(V2SpeakPostParametersEncoding5);
