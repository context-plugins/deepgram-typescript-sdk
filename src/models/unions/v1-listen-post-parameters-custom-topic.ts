import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ListenPostParametersCustomTopic = string | string[];

export const v1ListenPostParametersCustomTopicSchema: Schema<V1ListenPostParametersCustomTopic> =
  s.of<V1ListenPostParametersCustomTopic>(s.union([s.string(), s.array(s.string())]));
