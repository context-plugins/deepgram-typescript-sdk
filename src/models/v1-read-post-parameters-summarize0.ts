import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ReadPostParametersSummarize0 = {
  V2: "v2",
} as const;
export type V1ReadPostParametersSummarize0 =
  | (typeof V1ReadPostParametersSummarize0)[keyof typeof V1ReadPostParametersSummarize0]
  | (string & {});

export const v1ReadPostParametersSummarize0Schema: EnumSchema<V1ReadPostParametersSummarize0> =
  s.enumOf<V1ReadPostParametersSummarize0>(V1ReadPostParametersSummarize0);
