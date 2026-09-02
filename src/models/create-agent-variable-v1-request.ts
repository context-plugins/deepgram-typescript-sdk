import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateAgentVariableV1Request = {
  key: string;
  value: Record<string, unknown>;
  apiVersion?: number;
};

export const createAgentVariableV1RequestSchema: Schema<CreateAgentVariableV1Request> =
  s.object<CreateAgentVariableV1Request>({
    key: s.string(),
    value: s.record(s.string(), s.unknown()),
    apiVersion: s.optional(s.number()),
    _keysMap: {
      apiVersion: "api_version",
    },
  });
