import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { v1ListenPostParametersModel0Schema } from "../v1-listen-post-parameters-model0.js";

export type V1ListenPostParametersModel = string;

export const v1ListenPostParametersModelSchema: Schema<V1ListenPostParametersModel> =
  s.of<V1ListenPostParametersModel>(s.union([s.lazy(() => v1ListenPostParametersModel0Schema), s.string()]));
