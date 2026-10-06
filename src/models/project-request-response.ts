import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single request */
export type ProjectRequestResponse = {
  /** The unique identifier of the request */
  requestId?: string;
  /** The unique identifier of the project */
  projectUuid?: string;
  /** The date and time the request was created */
  created?: Date;
  /** The API path of the request */
  path?: string;
  /** The unique identifier of the API key */
  apiKeyId?: string;
  /** The response of the request */
  response?: Record<string, unknown>;
  /** The response code of the request */
  code?: number;
  /** The deployment type */
  deployment?: string;
  /** The callback URL for the request */
  callback?: string;
};

export const projectRequestResponseSchema: Schema<ProjectRequestResponse> = s.object<ProjectRequestResponse>({
  requestId: s.optional(s.string()),
  projectUuid: s.optional(s.string()),
  created: s.optional(s.dateTime()),
  path: s.optional(s.string()),
  apiKeyId: s.optional(s.string()),
  response: s.optional(s.record(s.string(), s.unknown())),
  code: s.optional(s.float64()),
  deployment: s.optional(s.string()),
  callback: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
    projectUuid: "project_uuid",
    apiKeyId: "api_key_id",
  },
});
