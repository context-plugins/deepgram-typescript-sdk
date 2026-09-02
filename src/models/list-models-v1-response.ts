import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listModelsV1ResponseSttModelsSchema,
  type ListModelsV1ResponseSttModels,
} from "./list-models-v1-response-stt-models.js";
import {
  listModelsV1ResponseTtsModelsSchema,
  type ListModelsV1ResponseTtsModels,
} from "./list-models-v1-response-tts-models.js";

export type ListModelsV1Response = {
  stt?: ListModelsV1ResponseSttModels[];
  tts?: ListModelsV1ResponseTtsModels[];
};

export const listModelsV1ResponseSchema: Schema<ListModelsV1Response> = s.object<ListModelsV1Response>({
  stt: s.optional(s.array(s.lazy(() => listModelsV1ResponseSttModelsSchema))),
  tts: s.optional(s.array(s.lazy(() => listModelsV1ResponseTtsModelsSchema))),
});
