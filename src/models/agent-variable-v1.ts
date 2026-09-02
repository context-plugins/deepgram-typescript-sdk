import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentVariableV1 = {
  variableId: string;
  key: string;
  value: Record<string, unknown>;
  createdAt?: Date;
  updatedAt?: Date;
};

export const agentVariableV1Schema: Schema<AgentVariableV1> = s.object<AgentVariableV1>({
  variableId: s.string(),
  key: s.string(),
  value: s.record(s.string(), s.unknown()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    variableId: "variable_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
