import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ListenPostParametersCustomIntentMode = {
  Extended: "extended",
  Strict: "strict",
} as const;
export type V1ListenPostParametersCustomIntentMode =
  | (typeof V1ListenPostParametersCustomIntentMode)[keyof typeof V1ListenPostParametersCustomIntentMode]
  | (string & {});

export const v1ListenPostParametersCustomIntentModeSchema: EnumSchema<V1ListenPostParametersCustomIntentMode> =
  s.enumOf<V1ListenPostParametersCustomIntentMode>(V1ListenPostParametersCustomIntentMode);
