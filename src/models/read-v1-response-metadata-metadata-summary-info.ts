import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadV1ResponseMetadataMetadataSummaryInfo = {
  modelUuid?: string;
  inputTokens?: number;
  outputTokens?: number;
};

export const readV1ResponseMetadataMetadataSummaryInfoSchema: Schema<ReadV1ResponseMetadataMetadataSummaryInfo> =
  s.object<ReadV1ResponseMetadataMetadataSummaryInfo>({
    modelUuid: s.optional(s.string()),
    inputTokens: s.optional(s.number()),
    outputTokens: s.optional(s.number()),
    _keysMap: {
      modelUuid: "model_uuid",
      inputTokens: "input_tokens",
      outputTokens: "output_tokens",
    },
  });
