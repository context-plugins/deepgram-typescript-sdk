import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1ReadPostParametersSummarize0Schema,
  type V1ReadPostParametersSummarize0,
} from "../v1-read-post-parameters-summarize0.js";

export type V1ReadPostParametersSummarize = V1ReadPostParametersSummarize0 | boolean;

export const v1ReadPostParametersSummarizeSchema: Schema<V1ReadPostParametersSummarize> =
  s.of<V1ReadPostParametersSummarize>(
    s.union([s.lazy(() => v1ReadPostParametersSummarize0Schema), s.boolean()]),
  );
