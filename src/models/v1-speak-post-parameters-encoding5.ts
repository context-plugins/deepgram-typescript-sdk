import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersEncoding5 = {
  Opus: "opus",
} as const;
export type V1SpeakPostParametersEncoding5 =
  | (typeof V1SpeakPostParametersEncoding5)[keyof typeof V1SpeakPostParametersEncoding5]
  | (string & {});

export const v1SpeakPostParametersEncoding5Schema: EnumSchema<V1SpeakPostParametersEncoding5> =
  s.enumOf<V1SpeakPostParametersEncoding5>(V1SpeakPostParametersEncoding5);
