import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type V1ListenPostParametersDetectLanguage = boolean | string[];

export const v1ListenPostParametersDetectLanguageSchema: Schema<V1ListenPostParametersDetectLanguage> =
  s.of<V1ListenPostParametersDetectLanguage>(s.union([s.boolean(), s.array(s.string())]));
