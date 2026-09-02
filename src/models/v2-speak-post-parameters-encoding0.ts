import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersEncoding0 = {
  Linear16: "linear16",
} as const;
export type V2SpeakPostParametersEncoding0 =
  | (typeof V2SpeakPostParametersEncoding0)[keyof typeof V2SpeakPostParametersEncoding0]
  | (string & {});

export const v2SpeakPostParametersEncoding0Schema: EnumSchema<V2SpeakPostParametersEncoding0> =
  s.enumOf<V2SpeakPostParametersEncoding0>(V2SpeakPostParametersEncoding0);
