import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ReadPostParametersCustomIntentMode = {
  Extended: "extended",
  Strict: "strict",
} as const;
export type V1ReadPostParametersCustomIntentMode =
  | (typeof V1ReadPostParametersCustomIntentMode)[keyof typeof V1ReadPostParametersCustomIntentMode]
  | (string & {});

export const v1ReadPostParametersCustomIntentModeSchema: EnumSchema<V1ReadPostParametersCustomIntentMode> =
  s.enumOf<V1ReadPostParametersCustomIntentMode>(V1ReadPostParametersCustomIntentMode);
