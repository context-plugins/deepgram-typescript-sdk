import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateAgentConfigurationV1Request = {
  config: string;
  metadata?: Record<string, string>;
  apiVersion?: number;
};

export const createAgentConfigurationV1RequestSchema: Schema<CreateAgentConfigurationV1Request> =
  s.object<CreateAgentConfigurationV1Request>({
    config: s.string(),
    metadata: s.optional(s.record(s.string(), s.string())),
    apiVersion: s.optional(s.number()),
    _keysMap: {
      apiVersion: "api_version",
    },
  });
