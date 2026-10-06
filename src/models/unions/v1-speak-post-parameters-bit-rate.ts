import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1SpeakPostParametersBitRate0Schema,
  type V1SpeakPostParametersBitRate0,
} from "../v1-speak-post-parameters-bit-rate0.js";

export type V1SpeakPostParametersBitRate = V1SpeakPostParametersBitRate0 | number;

export const v1SpeakPostParametersBitRateSchema: Schema<V1SpeakPostParametersBitRate> =
  s.of<V1SpeakPostParametersBitRate>(
    s.union([s.lazy(() => v1SpeakPostParametersBitRate0Schema), s.float64()]),
  );
