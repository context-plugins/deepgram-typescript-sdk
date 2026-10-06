import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseMetadataTopicsInfo = {
  modelUuid?: string;
  inputTokens?: number;
  outputTokens?: number;
};

export const listenV1ResponseMetadataTopicsInfoSchema: Schema<ListenV1ResponseMetadataTopicsInfo> =
  s.object<ListenV1ResponseMetadataTopicsInfo>({
    modelUuid: s.optional(s.string()),
    inputTokens: s.optional(s.int()),
    outputTokens: s.optional(s.int()),
    _keysMap: {
      modelUuid: "model_uuid",
      inputTokens: "input_tokens",
      outputTokens: "output_tokens",
    },
  });
