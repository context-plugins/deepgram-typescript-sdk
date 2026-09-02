import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ListenPostParametersCustomTopicMode = {
  Extended: "extended",
  Strict: "strict",
} as const;
export type V1ListenPostParametersCustomTopicMode =
  | (typeof V1ListenPostParametersCustomTopicMode)[keyof typeof V1ListenPostParametersCustomTopicMode]
  | (string & {});

export const v1ListenPostParametersCustomTopicModeSchema: EnumSchema<V1ListenPostParametersCustomTopicMode> =
  s.enumOf<V1ListenPostParametersCustomTopicMode>(V1ListenPostParametersCustomTopicMode);
