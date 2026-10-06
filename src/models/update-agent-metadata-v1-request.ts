import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for updating agent configuration metadata */
export type UpdateAgentMetadataV1Request = {
  /** A map of string key-value pairs to associate with this agent configuration */
  metadata: Record<string, string>;
};

export const updateAgentMetadataV1RequestSchema: Schema<UpdateAgentMetadataV1Request> =
  s.object<UpdateAgentMetadataV1Request>({
    metadata: s.record(s.string(), s.string()),
  });
