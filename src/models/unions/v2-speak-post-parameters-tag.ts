import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V2SpeakPostParametersTag = string | string[];

export const v2SpeakPostParametersTagSchema: Schema<V2SpeakPostParametersTag> =
  s.of<V2SpeakPostParametersTag>(s.union([s.string(), s.array(s.string())]));
