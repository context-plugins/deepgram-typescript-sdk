import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A reusable agent configuration */
export type AgentConfigurationV1 = {
  /** The unique identifier of the agent configuration */
  agentId: string;
  /** The agent configuration object */
  config: Record<string, unknown>;
  /** A map of arbitrary key-value pairs for labeling or organizing the agent configuration */
  metadata?: Record<string, string>;
  /** Timestamp when the configuration was created */
  createdAt?: Date;
  /** Timestamp when the configuration was last updated */
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
