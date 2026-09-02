import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ReadPostParametersTag = string | string[];

export const v1ReadPostParametersTagSchema: Schema<V1ReadPostParametersTag> = s.of<V1ReadPostParametersTag>(
  s.union([s.string(), s.array(s.string())]),
);
