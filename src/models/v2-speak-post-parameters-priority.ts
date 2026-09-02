import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersPriority = {
  Low: "low",
} as const;
export type V2SpeakPostParametersPriority =
  | (typeof V2SpeakPostParametersPriority)[keyof typeof V2SpeakPostParametersPriority]
  | (string & {});

export const v2SpeakPostParametersPrioritySchema: EnumSchema<V2SpeakPostParametersPriority> =
  s.enumOf<V2SpeakPostParametersPriority>(V2SpeakPostParametersPriority);
