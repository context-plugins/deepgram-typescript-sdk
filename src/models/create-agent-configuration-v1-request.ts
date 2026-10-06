import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for creating an agent configuration */
export type CreateAgentConfigurationV1Request = {
  /** A valid JSON string representing the agent block of a Settings message */
  config: string;
  /** A map of arbitrary key-value pairs for labeling or organizing the agent configuration */
  metadata?: Record<string, string>;
  /** API version. Defaults to 1 @default 1 */
  apiVersion?: number;
};

export const createAgentConfigurationV1RequestSchema: Schema<CreateAgentConfigurationV1Request> =
  s.object<CreateAgentConfigurationV1Request>({
    config: s.string(),
    metadata: s.optional(s.record(s.string(), s.string())),
    apiVersion: s.defaulted(s.int(), 1),
    _keysMap: {
      apiVersion: "api_version",
    },
  });
