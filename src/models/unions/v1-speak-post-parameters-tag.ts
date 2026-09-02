import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1SpeakPostParametersTag = string | string[];

export const v1SpeakPostParametersTagSchema: Schema<V1SpeakPostParametersTag> =
  s.of<V1SpeakPostParametersTag>(s.union([s.string(), s.array(s.string())]));
