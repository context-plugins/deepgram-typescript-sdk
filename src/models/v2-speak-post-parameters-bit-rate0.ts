import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersBitRate0 = {
  _8000: "8000",
  _16000: "16000",
  _24000: "24000",
  _32000: "32000",
  _40000: "40000",
  _48000: "48000",
} as const;
export type V2SpeakPostParametersBitRate0 =
  | (typeof V2SpeakPostParametersBitRate0)[keyof typeof V2SpeakPostParametersBitRate0]
  | (string & {});

export const v2SpeakPostParametersBitRate0Schema: EnumSchema<V2SpeakPostParametersBitRate0> =
  s.enumOf<V2SpeakPostParametersBitRate0>(V2SpeakPostParametersBitRate0);
