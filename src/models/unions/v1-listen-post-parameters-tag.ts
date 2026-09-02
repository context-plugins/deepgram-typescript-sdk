import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ListenPostParametersTag = string | string[];

export const v1ListenPostParametersTagSchema: Schema<V1ListenPostParametersTag> =
  s.of<V1ListenPostParametersTag>(s.union([s.string(), s.array(s.string())]));
