import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseMetadataSchema,
  type ListenV1ResponseMetadata,
} from "./listen-v1-response-metadata.js";
import { listenV1ResponseResultsSchema, type ListenV1ResponseResults } from "./listen-v1-response-results.js";

export type ListenV1ResponseError = {
  metadata: ListenV1ResponseMetadata;
  results: ListenV1ResponseResults;
};

export const listenV1ResponseErrorSchema: Schema<ListenV1ResponseError> = s.object<ListenV1ResponseError>({
  metadata: listenV1ResponseMetadataSchema,
  results: listenV1ResponseResultsSchema,
});
