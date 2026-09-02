import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { v1ListenPostParametersVersion0Schema } from "../v1-listen-post-parameters-version0.js";

export type V1ListenPostParametersVersion = string;

export const v1ListenPostParametersVersionSchema: Schema<V1ListenPostParametersVersion> =
  s.of<V1ListenPostParametersVersion>(
    s.union([s.lazy(() => v1ListenPostParametersVersion0Schema), s.string()]),
  );
