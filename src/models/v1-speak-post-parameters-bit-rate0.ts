import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encoding - mp3(default). Supported bitrates - 32000, 48000(default) bps. */
export const V1SpeakPostParametersBitRate0 = {
  _32000: "32000",
  _48000: "48000",
} as const;
export type V1SpeakPostParametersBitRate0 =
  | (typeof V1SpeakPostParametersBitRate0)[keyof typeof V1SpeakPostParametersBitRate0]
  | (string & {});

export const v1SpeakPostParametersBitRate0Schema: EnumSchema<V1SpeakPostParametersBitRate0> =
  s.enumOf<V1SpeakPostParametersBitRate0>(V1SpeakPostParametersBitRate0);
