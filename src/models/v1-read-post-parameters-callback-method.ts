import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ReadPostParametersCallbackMethod = {
  Post: "POST",
  Put: "PUT",
} as const;
export type V1ReadPostParametersCallbackMethod =
  | (typeof V1ReadPostParametersCallbackMethod)[keyof typeof V1ReadPostParametersCallbackMethod]
  | (string & {});

export const v1ReadPostParametersCallbackMethodSchema: EnumSchema<V1ReadPostParametersCallbackMethod> =
  s.enumOf<V1ReadPostParametersCallbackMethod>(V1ReadPostParametersCallbackMethod);
