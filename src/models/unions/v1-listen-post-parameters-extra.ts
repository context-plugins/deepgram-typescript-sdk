import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ListenPostParametersExtra = string | string[];

export const v1ListenPostParametersExtraSchema: Schema<V1ListenPostParametersExtra> =
  s.of<V1ListenPostParametersExtra>(s.union([s.string(), s.array(s.string())]));
