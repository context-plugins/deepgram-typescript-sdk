import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { getModelV1Response0Schema, type GetModelV1Response0 } from "../get-model-v1-response0.js";
import { getModelV1Response1Schema, type GetModelV1Response1 } from "../get-model-v1-response1.js";

export type GetModelV1Response = GetModelV1Response0 | GetModelV1Response1;

export const getModelV1ResponseSchema: Schema<GetModelV1Response> = s.of<GetModelV1Response>(
  s.union([s.lazy(() => getModelV1Response0Schema), s.lazy(() => getModelV1Response1Schema)]),
);
