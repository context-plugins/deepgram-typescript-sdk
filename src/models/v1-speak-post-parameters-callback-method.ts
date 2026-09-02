import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1SpeakPostParametersCallbackMethod = {
  Post: "POST",
  Put: "PUT",
} as const;
export type V1SpeakPostParametersCallbackMethod =
  | (typeof V1SpeakPostParametersCallbackMethod)[keyof typeof V1SpeakPostParametersCallbackMethod]
  | (string & {});

export const v1SpeakPostParametersCallbackMethodSchema: EnumSchema<V1SpeakPostParametersCallbackMethod> =
  s.enumOf<V1SpeakPostParametersCallbackMethod>(V1SpeakPostParametersCallbackMethod);
