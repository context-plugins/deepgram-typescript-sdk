import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ListenPostParametersEncoding = {
  Linear16: "linear16",
  Flac: "flac",
  Mulaw: "mulaw",
  AmrNb: "amr-nb",
  AmrWb: "amr-wb",
  Opus: "opus",
  Speex: "speex",
  G729: "g729",
} as const;
export type V1ListenPostParametersEncoding =
  | (typeof V1ListenPostParametersEncoding)[keyof typeof V1ListenPostParametersEncoding]
  | (string & {});

export const v1ListenPostParametersEncodingSchema: EnumSchema<V1ListenPostParametersEncoding> =
  s.enumOf<V1ListenPostParametersEncoding>(V1ListenPostParametersEncoding);
