import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateAgentMetadataV1Request = {
  metadata: Record<string, string>;
};

export const updateAgentMetadataV1RequestSchema: Schema<UpdateAgentMetadataV1Request> =
  s.object<UpdateAgentMetadataV1Request>({
    metadata: s.record(s.string(), s.string()),
  });
