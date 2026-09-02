import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ListenPostParametersSearch = string | string[];

export const v1ListenPostParametersSearchSchema: Schema<V1ListenPostParametersSearch> =
  s.of<V1ListenPostParametersSearch>(s.union([s.string(), s.array(s.string())]));
