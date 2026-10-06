import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadV1ResponseMetadataMetadataIntentsInfo = {
  modelUuid?: string;
  inputTokens?: number;
  outputTokens?: number;
};

export const readV1ResponseMetadataMetadataIntentsInfoSchema: Schema<ReadV1ResponseMetadataMetadataIntentsInfo> =
  s.object<ReadV1ResponseMetadataMetadataIntentsInfo>({
    modelUuid: s.optional(s.string()),
    inputTokens: s.optional(s.int()),
    outputTokens: s.optional(s.int()),
    _keysMap: {
      modelUuid: "model_uuid",
      inputTokens: "input_tokens",
      outputTokens: "output_tokens",
    },
  });
