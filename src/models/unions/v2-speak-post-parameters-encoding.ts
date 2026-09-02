import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v2SpeakPostParametersEncoding0Schema,
  type V2SpeakPostParametersEncoding0,
} from "../v2-speak-post-parameters-encoding0.js";
import {
  v2SpeakPostParametersEncoding1Schema,
  type V2SpeakPostParametersEncoding1,
} from "../v2-speak-post-parameters-encoding1.js";
import {
  v2SpeakPostParametersEncoding2Schema,
  type V2SpeakPostParametersEncoding2,
} from "../v2-speak-post-parameters-encoding2.js";
import {
  v2SpeakPostParametersEncoding3Schema,
  type V2SpeakPostParametersEncoding3,
} from "../v2-speak-post-parameters-encoding3.js";
import {
  v2SpeakPostParametersEncoding4Schema,
  type V2SpeakPostParametersEncoding4,
} from "../v2-speak-post-parameters-encoding4.js";
import {
  v2SpeakPostParametersEncoding5Schema,
  type V2SpeakPostParametersEncoding5,
} from "../v2-speak-post-parameters-encoding5.js";
import {
  v2SpeakPostParametersEncoding6Schema,
  type V2SpeakPostParametersEncoding6,
} from "../v2-speak-post-parameters-encoding6.js";

export type V2SpeakPostParametersEncoding =
  | V2SpeakPostParametersEncoding0
  | V2SpeakPostParametersEncoding1
  | V2SpeakPostParametersEncoding2
  | V2SpeakPostParametersEncoding3
  | V2SpeakPostParametersEncoding4
  | V2SpeakPostParametersEncoding5
  | V2SpeakPostParametersEncoding6;

export const v2SpeakPostParametersEncodingSchema: Schema<V2SpeakPostParametersEncoding> =
  s.of<V2SpeakPostParametersEncoding>(
    s.union([
      s.lazy(() => v2SpeakPostParametersEncoding0Schema),
      s.lazy(() => v2SpeakPostParametersEncoding1Schema),
      s.lazy(() => v2SpeakPostParametersEncoding2Schema),
      s.lazy(() => v2SpeakPostParametersEncoding3Schema),
      s.lazy(() => v2SpeakPostParametersEncoding4Schema),
      s.lazy(() => v2SpeakPostParametersEncoding5Schema),
      s.lazy(() => v2SpeakPostParametersEncoding6Schema),
    ]),
  );
