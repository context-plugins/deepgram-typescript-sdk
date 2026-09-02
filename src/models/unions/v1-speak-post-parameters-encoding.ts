import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1SpeakPostParametersEncoding0Schema,
  type V1SpeakPostParametersEncoding0,
} from "../v1-speak-post-parameters-encoding0.js";
import {
  v1SpeakPostParametersEncoding1Schema,
  type V1SpeakPostParametersEncoding1,
} from "../v1-speak-post-parameters-encoding1.js";
import {
  v1SpeakPostParametersEncoding2Schema,
  type V1SpeakPostParametersEncoding2,
} from "../v1-speak-post-parameters-encoding2.js";
import {
  v1SpeakPostParametersEncoding3Schema,
  type V1SpeakPostParametersEncoding3,
} from "../v1-speak-post-parameters-encoding3.js";
import {
  v1SpeakPostParametersEncoding4Schema,
  type V1SpeakPostParametersEncoding4,
} from "../v1-speak-post-parameters-encoding4.js";
import {
  v1SpeakPostParametersEncoding5Schema,
  type V1SpeakPostParametersEncoding5,
} from "../v1-speak-post-parameters-encoding5.js";
import {
  v1SpeakPostParametersEncoding6Schema,
  type V1SpeakPostParametersEncoding6,
} from "../v1-speak-post-parameters-encoding6.js";

export type V1SpeakPostParametersEncoding =
  | V1SpeakPostParametersEncoding0
  | V1SpeakPostParametersEncoding1
  | V1SpeakPostParametersEncoding2
  | V1SpeakPostParametersEncoding3
  | V1SpeakPostParametersEncoding4
  | V1SpeakPostParametersEncoding5
  | V1SpeakPostParametersEncoding6;

export const v1SpeakPostParametersEncodingSchema: Schema<V1SpeakPostParametersEncoding> =
  s.of<V1SpeakPostParametersEncoding>(
    s.union([
      s.lazy(() => v1SpeakPostParametersEncoding0Schema),
      s.lazy(() => v1SpeakPostParametersEncoding1Schema),
      s.lazy(() => v1SpeakPostParametersEncoding2Schema),
      s.lazy(() => v1SpeakPostParametersEncoding3Schema),
      s.lazy(() => v1SpeakPostParametersEncoding4Schema),
      s.lazy(() => v1SpeakPostParametersEncoding5Schema),
      s.lazy(() => v1SpeakPostParametersEncoding6Schema),
    ]),
  );
