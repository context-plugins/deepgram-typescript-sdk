import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1SpeakPostParametersContainer0Schema,
  type V1SpeakPostParametersContainer0,
} from "../v1-speak-post-parameters-container0.js";
import {
  v1SpeakPostParametersContainer1Schema,
  type V1SpeakPostParametersContainer1,
} from "../v1-speak-post-parameters-container1.js";
import {
  v1SpeakPostParametersContainer2Schema,
  type V1SpeakPostParametersContainer2,
} from "../v1-speak-post-parameters-container2.js";
import {
  v1SpeakPostParametersContainer3Schema,
  type V1SpeakPostParametersContainer3,
} from "../v1-speak-post-parameters-container3.js";
import {
  v1SpeakPostParametersContainer4Schema,
  type V1SpeakPostParametersContainer4,
} from "../v1-speak-post-parameters-container4.js";

export type V1SpeakPostParametersContainer =
  | V1SpeakPostParametersContainer0
  | V1SpeakPostParametersContainer1
  | V1SpeakPostParametersContainer2
  | V1SpeakPostParametersContainer3
  | V1SpeakPostParametersContainer4;

export const v1SpeakPostParametersContainerSchema: Schema<V1SpeakPostParametersContainer> =
  s.of<V1SpeakPostParametersContainer>(
    s.union([
      s.lazy(() => v1SpeakPostParametersContainer0Schema),
      s.lazy(() => v1SpeakPostParametersContainer1Schema),
      s.lazy(() => v1SpeakPostParametersContainer2Schema),
      s.lazy(() => v1SpeakPostParametersContainer3Schema),
      s.lazy(() => v1SpeakPostParametersContainer4Schema),
    ]),
  );
