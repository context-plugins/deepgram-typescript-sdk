import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { readV1ResponseMetadataSchema, type ReadV1ResponseMetadata } from "./read-v1-response-metadata.js";
import { readV1ResponseResultsSchema, type ReadV1ResponseResults } from "./read-v1-response-results.js";

/** The standard text response */
export type ReadV1Response = {
  metadata: ReadV1ResponseMetadata;
  results: ReadV1ResponseResults;
};

export const readV1ResponseSchema: Schema<ReadV1Response> = s.object<ReadV1Response>({
  metadata: readV1ResponseMetadataSchema,
  results: readV1ResponseResultsSchema,
});
