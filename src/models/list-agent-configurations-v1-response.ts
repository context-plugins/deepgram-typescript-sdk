import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentConfigurationV1Schema, type AgentConfigurationV1 } from "./agent-configuration-v1.js";

export type ListAgentConfigurationsV1Response = {
  /** A list of agent configurations for the project */
  agents?: AgentConfigurationV1[];
};

export const listAgentConfigurationsV1ResponseSchema: Schema<ListAgentConfigurationsV1Response> =
  s.object<ListAgentConfigurationsV1Response>({
    agents: s.optional(s.array(s.lazy(() => agentConfigurationV1Schema))),
  });
