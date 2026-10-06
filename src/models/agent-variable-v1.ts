import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A template variable for agent configurations */
export type AgentVariableV1 = {
  /** The unique identifier of the variable */
  variableId: string;
  /** The variable name, following the DG_<VARIABLE_NAME> format */
  key: string;
  /** The value to substitute. Can be any valid JSON type */
  value: Record<string, unknown>;
  /** Timestamp when the variable was created */
  createdAt?: Date;
  /** Timestamp when the variable was last updated */
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
