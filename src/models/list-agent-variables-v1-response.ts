import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentVariableV1Schema, type AgentVariableV1 } from "./agent-variable-v1.js";

export type ListAgentVariablesV1Response = {
  /** A list of agent variables for the project */
  variables?: AgentVariableV1[];
};

export const listAgentVariablesV1ResponseSchema: Schema<ListAgentVariablesV1Response> =
  s.object<ListAgentVariablesV1Response>({
    variables: s.optional(s.array(s.lazy(() => agentVariableV1Schema))),
  });
