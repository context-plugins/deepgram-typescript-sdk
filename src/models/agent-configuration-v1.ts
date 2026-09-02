import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentConfigurationV1 = {
  agentId: string;
  config: Record<string, unknown>;
  metadata?: Record<string, string>;
  createdAt?: Date;
  updatedAt?: Date;
};

export const agentConfigurationV1Schema: Schema<AgentConfigurationV1> = s.object<AgentConfigurationV1>({
  agentId: s.string(),
  config: s.record(s.string(), s.unknown()),
  metadata: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    agentId: "agent_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
