import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v2SpeakPostParametersBitRate0Schema,
  type V2SpeakPostParametersBitRate0,
} from "../v2-speak-post-parameters-bit-rate0.js";

export type V2SpeakPostParametersBitRate = V2SpeakPostParametersBitRate0 | number;

export const v2SpeakPostParametersBitRateSchema: Schema<V2SpeakPostParametersBitRate> =
  s.of<V2SpeakPostParametersBitRate>(
    s.union([s.lazy(() => v2SpeakPostParametersBitRate0Schema), s.number()]),
  );
