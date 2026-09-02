import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateAgentConfigurationV1Response = {
  agentId: string;
  config: Record<string, unknown>;
  metadata?: Record<string, string>;
};

export const createAgentConfigurationV1ResponseSchema: Schema<CreateAgentConfigurationV1Response> =
  s.object<CreateAgentConfigurationV1Response>({
    agentId: s.string(),
    config: s.record(s.string(), s.unknown()),
    metadata: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      agentId: "agent_id",
    },
  });
