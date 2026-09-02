import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1ListenPostParametersSummarize0Schema,
  type V1ListenPostParametersSummarize0,
} from "../v1-listen-post-parameters-summarize0.js";

export type V1ListenPostParametersSummarize = V1ListenPostParametersSummarize0 | boolean;

export const v1ListenPostParametersSummarizeSchema: Schema<V1ListenPostParametersSummarize> =
  s.of<V1ListenPostParametersSummarize>(
    s.union([s.lazy(() => v1ListenPostParametersSummarize0Schema), s.boolean()]),
  );
