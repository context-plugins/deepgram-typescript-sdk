import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  readV1ResponseMetadataMetadataSchema,
  type ReadV1ResponseMetadataMetadata,
} from "./read-v1-response-metadata-metadata.js";

export type ReadV1ResponseMetadata = {
  metadata?: ReadV1ResponseMetadataMetadata;
};

export const readV1ResponseMetadataSchema: Schema<ReadV1ResponseMetadata> = s.object<ReadV1ResponseMetadata>({
  metadata: s.optional(s.lazy(() => readV1ResponseMetadataMetadataSchema)),
});
