import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateAgentVariableV1Request = {
  value: Record<string, unknown>;
};

export const updateAgentVariableV1RequestSchema: Schema<UpdateAgentVariableV1Request> =
  s.object<UpdateAgentVariableV1Request>({
    value: s.record(s.string(), s.unknown()),
  });
