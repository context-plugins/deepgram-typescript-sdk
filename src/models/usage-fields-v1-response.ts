import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usageFieldsV1ResponseModelsItemsSchema,
  type UsageFieldsV1ResponseModelsItems,
} from "./usage-fields-v1-response-models-items.js";

export type UsageFieldsV1Response = {
  tags?: string[];
  models?: UsageFieldsV1ResponseModelsItems[];
  processingMethods?: string[];
  features?: string[];
};

export const usageFieldsV1ResponseSchema: Schema<UsageFieldsV1Response> = s.object<UsageFieldsV1Response>({
  tags: s.optional(s.array(s.string())),
  models: s.optional(s.array(s.lazy(() => usageFieldsV1ResponseModelsItemsSchema))),
  processingMethods: s.optional(s.array(s.string())),
  features: s.optional(s.array(s.string())),
  _keysMap: {
    processingMethods: "processing_methods",
  },
});
