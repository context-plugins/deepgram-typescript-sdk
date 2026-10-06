import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usageFieldsV1ResponseModelsItemsSchema,
  type UsageFieldsV1ResponseModelsItems,
} from "./usage-fields-v1-response-models-items.js";

export type UsageFieldsV1Response = {
  /** List of tags associated with the project */
  tags?: string[];
  /** List of models available for the project. */
  models?: UsageFieldsV1ResponseModelsItems[];
  /** Processing methods supported by the API */
  processingMethods?: string[];
  /** API features available to the project */
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
