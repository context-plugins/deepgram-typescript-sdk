import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ListenPostParametersCustomIntent = string | string[];

export const v1ListenPostParametersCustomIntentSchema: Schema<V1ListenPostParametersCustomIntent> =
  s.of<V1ListenPostParametersCustomIntent>(s.union([s.string(), s.array(s.string())]));
