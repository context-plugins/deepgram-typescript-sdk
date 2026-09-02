import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ListenPostParametersKeywords = string | string[];

export const v1ListenPostParametersKeywordsSchema: Schema<V1ListenPostParametersKeywords> =
  s.of<V1ListenPostParametersKeywords>(s.union([s.string(), s.array(s.string())]));
