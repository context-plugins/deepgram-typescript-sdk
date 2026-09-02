import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProjectRequestResponse = {
  requestId?: string;
  projectUuid?: string;
  created?: Date;
  path?: string;
  apiKeyId?: string;
  response?: Record<string, unknown>;
  code?: number;
  deployment?: string;
  callback?: string;
};

export const projectRequestResponseSchema: Schema<ProjectRequestResponse> = s.object<ProjectRequestResponse>({
  requestId: s.optional(s.string()),
  projectUuid: s.optional(s.string()),
  created: s.optional(s.dateTime()),
  path: s.optional(s.string()),
  apiKeyId: s.optional(s.string()),
  response: s.optional(s.record(s.string(), s.unknown())),
  code: s.optional(s.number()),
  deployment: s.optional(s.string()),
  callback: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
    projectUuid: "project_uuid",
    apiKeyId: "api_key_id",
  },
});
