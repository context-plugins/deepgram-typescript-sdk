import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v2SpeakPostParametersSampleRate0Schema,
  type V2SpeakPostParametersSampleRate0,
} from "../v2-speak-post-parameters-sample-rate0.js";
import {
  v2SpeakPostParametersSampleRate1Schema,
  type V2SpeakPostParametersSampleRate1,
} from "../v2-speak-post-parameters-sample-rate1.js";
import {
  v2SpeakPostParametersSampleRate2Schema,
  type V2SpeakPostParametersSampleRate2,
} from "../v2-speak-post-parameters-sample-rate2.js";
import {
  v2SpeakPostParametersSampleRate3Schema,
  type V2SpeakPostParametersSampleRate3,
} from "../v2-speak-post-parameters-sample-rate3.js";

export type V2SpeakPostParametersSampleRate =
  | V2SpeakPostParametersSampleRate0
  | V2SpeakPostParametersSampleRate1
  | V2SpeakPostParametersSampleRate2
  | V2SpeakPostParametersSampleRate3;

export const v2SpeakPostParametersSampleRateSchema: Schema<V2SpeakPostParametersSampleRate> =
  s.of<V2SpeakPostParametersSampleRate>(
    s.union([
      s.lazy(() => v2SpeakPostParametersSampleRate0Schema),
      s.lazy(() => v2SpeakPostParametersSampleRate1Schema),
      s.lazy(() => v2SpeakPostParametersSampleRate2Schema),
      s.lazy(() => v2SpeakPostParametersSampleRate3Schema),
    ]),
  );
