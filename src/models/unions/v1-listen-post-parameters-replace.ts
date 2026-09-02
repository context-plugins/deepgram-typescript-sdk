import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ListenPostParametersReplace = string | string[];

export const v1ListenPostParametersReplaceSchema: Schema<V1ListenPostParametersReplace> =
  s.of<V1ListenPostParametersReplace>(s.union([s.string(), s.array(s.string())]));
