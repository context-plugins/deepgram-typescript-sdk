import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V2SpeakPostParametersCallbackMethod = {
  Post: "POST",
  Put: "PUT",
} as const;
export type V2SpeakPostParametersCallbackMethod =
  | (typeof V2SpeakPostParametersCallbackMethod)[keyof typeof V2SpeakPostParametersCallbackMethod]
  | (string & {});

export const v2SpeakPostParametersCallbackMethodSchema: EnumSchema<V2SpeakPostParametersCallbackMethod> =
  s.enumOf<V2SpeakPostParametersCallbackMethod>(V2SpeakPostParametersCallbackMethod);
