import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getModelV1ResponseOneOf1MetadataSchema,
  type GetModelV1ResponseOneOf1Metadata,
} from "./get-model-v1-response-one-of1-metadata.js";

export type GetModelV1Response1 = {
  name?: string;
  canonicalName?: string;
  architecture?: string;
  languages?: string[];
  version?: string;
  uuid?: string;
  metadata?: GetModelV1ResponseOneOf1Metadata;
};

export const getModelV1Response1Schema: Schema<GetModelV1Response1> = s.object<GetModelV1Response1>({
  name: s.optional(s.string()),
  canonicalName: s.optional(s.string()),
  architecture: s.optional(s.string()),
  languages: s.optional(s.array(s.string())),
  version: s.optional(s.string()),
  uuid: s.optional(s.string()),
  metadata: s.optional(s.lazy(() => getModelV1ResponseOneOf1MetadataSchema)),
  _keysMap: {
    canonicalName: "canonical_name",
  },
});
