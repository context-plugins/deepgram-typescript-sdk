import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listModelsV1ResponseTtsModelsMetadataSchema,
  type ListModelsV1ResponseTtsModelsMetadata,
} from "./list-models-v1-response-tts-models-metadata.js";

export type ListModelsV1ResponseTtsModels = {
  name?: string;
  canonicalName?: string;
  architecture?: string;
  languages?: string[];
  version?: string;
  uuid?: string;
  metadata?: ListModelsV1ResponseTtsModelsMetadata;
};

export const listModelsV1ResponseTtsModelsSchema: Schema<ListModelsV1ResponseTtsModels> =
  s.object<ListModelsV1ResponseTtsModels>({
    name: s.optional(s.string()),
    canonicalName: s.optional(s.string()),
    architecture: s.optional(s.string()),
    languages: s.optional(s.array(s.string())),
    version: s.optional(s.string()),
    uuid: s.optional(s.string()),
    metadata: s.optional(s.lazy(() => listModelsV1ResponseTtsModelsMetadataSchema)),
    _keysMap: {
      canonicalName: "canonical_name",
    },
  });
