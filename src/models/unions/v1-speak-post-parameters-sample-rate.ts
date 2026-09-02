import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1SpeakPostParametersSampleRate0Schema,
  type V1SpeakPostParametersSampleRate0,
} from "../v1-speak-post-parameters-sample-rate0.js";
import {
  v1SpeakPostParametersSampleRate1Schema,
  type V1SpeakPostParametersSampleRate1,
} from "../v1-speak-post-parameters-sample-rate1.js";
import {
  v1SpeakPostParametersSampleRate2Schema,
  type V1SpeakPostParametersSampleRate2,
} from "../v1-speak-post-parameters-sample-rate2.js";
import {
  v1SpeakPostParametersSampleRate3Schema,
  type V1SpeakPostParametersSampleRate3,
} from "../v1-speak-post-parameters-sample-rate3.js";
import {
  v1SpeakPostParametersSampleRate4Schema,
  type V1SpeakPostParametersSampleRate4,
} from "../v1-speak-post-parameters-sample-rate4.js";

export type V1SpeakPostParametersSampleRate =
  | V1SpeakPostParametersSampleRate0
  | V1SpeakPostParametersSampleRate1
  | V1SpeakPostParametersSampleRate2
  | V1SpeakPostParametersSampleRate3
  | V1SpeakPostParametersSampleRate4;

export const v1SpeakPostParametersSampleRateSchema: Schema<V1SpeakPostParametersSampleRate> =
  s.of<V1SpeakPostParametersSampleRate>(
    s.union([
      s.lazy(() => v1SpeakPostParametersSampleRate0Schema),
      s.lazy(() => v1SpeakPostParametersSampleRate1Schema),
      s.lazy(() => v1SpeakPostParametersSampleRate2Schema),
      s.lazy(() => v1SpeakPostParametersSampleRate3Schema),
      s.lazy(() => v1SpeakPostParametersSampleRate4Schema),
    ]),
  );
