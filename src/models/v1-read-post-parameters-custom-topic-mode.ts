import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ReadPostParametersCustomTopicMode = {
  Extended: "extended",
  Strict: "strict",
} as const;
export type V1ReadPostParametersCustomTopicMode =
  | (typeof V1ReadPostParametersCustomTopicMode)[keyof typeof V1ReadPostParametersCustomTopicMode]
  | (string & {});

export const v1ReadPostParametersCustomTopicModeSchema: EnumSchema<V1ReadPostParametersCustomTopicMode> =
  s.enumOf<V1ReadPostParametersCustomTopicMode>(V1ReadPostParametersCustomTopicMode);
