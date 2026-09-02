import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ListenPostParametersCallbackMethod = {
  Post: "POST",
  Put: "PUT",
} as const;
export type V1ListenPostParametersCallbackMethod =
  | (typeof V1ListenPostParametersCallbackMethod)[keyof typeof V1ListenPostParametersCallbackMethod]
  | (string & {});

export const v1ListenPostParametersCallbackMethodSchema: EnumSchema<V1ListenPostParametersCallbackMethod> =
  s.enumOf<V1ListenPostParametersCallbackMethod>(V1ListenPostParametersCallbackMethod);
