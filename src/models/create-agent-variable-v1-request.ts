import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for creating an agent variable */
export type CreateAgentVariableV1Request = {
  /** The variable name, following the DG_<VARIABLE_NAME> format */
  key: string;
  /**
   * The value to substitute. Can be any valid JSON type (string, number, boolean, object, or array)
   */
  value: Record<string, unknown>;
  /** API version. Defaults to 1 @default 1 */
  apiVersion?: number;
};

export const createAgentVariableV1RequestSchema: Schema<CreateAgentVariableV1Request> =
  s.object<CreateAgentVariableV1Request>({
    key: s.string(),
    value: s.record(s.string(), s.unknown()),
    apiVersion: s.defaulted(s.int(), 1),
    _keysMap: {
      apiVersion: "api_version",
    },
  });
