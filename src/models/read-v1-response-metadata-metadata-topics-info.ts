import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadV1ResponseMetadataMetadataTopicsInfo = {
  modelUuid?: string;
  inputTokens?: number;
  outputTokens?: number;
};

export const readV1ResponseMetadataMetadataTopicsInfoSchema: Schema<ReadV1ResponseMetadataMetadataTopicsInfo> =
  s.object<ReadV1ResponseMetadataMetadataTopicsInfo>({
    modelUuid: s.optional(s.string()),
    inputTokens: s.optional(s.int()),
    outputTokens: s.optional(s.int()),
    _keysMap: {
      modelUuid: "model_uuid",
      inputTokens: "input_tokens",
      outputTokens: "output_tokens",
    },
  });
