import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Encoding - linear16. Uncompressed, high-quality audio format often used for telephony or audio
 * processing.
 */
export const V1SpeakPostParametersEncoding0 = {
  Linear16: "linear16",
} as const;
export type V1SpeakPostParametersEncoding0 =
  | (typeof V1SpeakPostParametersEncoding0)[keyof typeof V1SpeakPostParametersEncoding0]
  | (string & {});

export const v1SpeakPostParametersEncoding0Schema: EnumSchema<V1SpeakPostParametersEncoding0> =
  s.enumOf<V1SpeakPostParametersEncoding0>(V1SpeakPostParametersEncoding0);
