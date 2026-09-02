import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseMetadataSummaryInfo = {
  modelUuid?: string;
  inputTokens?: number;
  outputTokens?: number;
};

export const listenV1ResponseMetadataSummaryInfoSchema: Schema<ListenV1ResponseMetadataSummaryInfo> =
  s.object<ListenV1ResponseMetadataSummaryInfo>({
    modelUuid: s.optional(s.string()),
    inputTokens: s.optional(s.number()),
    outputTokens: s.optional(s.number()),
    _keysMap: {
      modelUuid: "model_uuid",
      inputTokens: "input_tokens",
      outputTokens: "output_tokens",
    },
  });
