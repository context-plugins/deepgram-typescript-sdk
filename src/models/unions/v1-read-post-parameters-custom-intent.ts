import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ReadPostParametersCustomIntent = string | string[];

export const v1ReadPostParametersCustomIntentSchema: Schema<V1ReadPostParametersCustomIntent> =
  s.of<V1ReadPostParametersCustomIntent>(s.union([s.string(), s.array(s.string())]));
