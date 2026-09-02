import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ListenPostParametersSummarize0 = {
  V2: "v2",
} as const;
export type V1ListenPostParametersSummarize0 =
  | (typeof V1ListenPostParametersSummarize0)[keyof typeof V1ListenPostParametersSummarize0]
  | (string & {});

export const v1ListenPostParametersSummarize0Schema: EnumSchema<V1ListenPostParametersSummarize0> =
  s.enumOf<V1ListenPostParametersSummarize0>(V1ListenPostParametersSummarize0);
