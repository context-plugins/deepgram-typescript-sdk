import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v2SpeakPostParametersContainer0Schema,
  type V2SpeakPostParametersContainer0,
} from "../v2-speak-post-parameters-container0.js";
import {
  v2SpeakPostParametersContainer1Schema,
  type V2SpeakPostParametersContainer1,
} from "../v2-speak-post-parameters-container1.js";
import {
  v2SpeakPostParametersContainer2Schema,
  type V2SpeakPostParametersContainer2,
} from "../v2-speak-post-parameters-container2.js";
import {
  v2SpeakPostParametersContainer3Schema,
  type V2SpeakPostParametersContainer3,
} from "../v2-speak-post-parameters-container3.js";
import {
  v2SpeakPostParametersContainer4Schema,
  type V2SpeakPostParametersContainer4,
} from "../v2-speak-post-parameters-container4.js";

export type V2SpeakPostParametersContainer =
  | V2SpeakPostParametersContainer0
  | V2SpeakPostParametersContainer1
  | V2SpeakPostParametersContainer2
  | V2SpeakPostParametersContainer3
  | V2SpeakPostParametersContainer4;

export const v2SpeakPostParametersContainerSchema: Schema<V2SpeakPostParametersContainer> =
  s.of<V2SpeakPostParametersContainer>(
    s.union([
      s.lazy(() => v2SpeakPostParametersContainer0Schema),
      s.lazy(() => v2SpeakPostParametersContainer1Schema),
      s.lazy(() => v2SpeakPostParametersContainer2Schema),
      s.lazy(() => v2SpeakPostParametersContainer3Schema),
      s.lazy(() => v2SpeakPostParametersContainer4Schema),
    ]),
  );
