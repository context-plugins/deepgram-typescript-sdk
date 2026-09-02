import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageFieldsV1ResponseModelsItems = {
  name?: string;
  language?: string;
  version?: string;
  modelId?: string;
};

export const usageFieldsV1ResponseModelsItemsSchema: Schema<UsageFieldsV1ResponseModelsItems> =
  s.object<UsageFieldsV1ResponseModelsItems>({
    name: s.optional(s.string()),
    language: s.optional(s.string()),
    version: s.optional(s.string()),
    modelId: s.optional(s.string()),
    _keysMap: {
      modelId: "model_id",
    },
  });
