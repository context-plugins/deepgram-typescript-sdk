import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { projectRequestResponseSchema, type ProjectRequestResponse } from "./project-request-response.js";

export type ListProjectRequestsV1Response = {
  page?: number;
  limit?: number;
  requests?: ProjectRequestResponse[];
};

export const listProjectRequestsV1ResponseSchema: Schema<ListProjectRequestsV1Response> =
  s.object<ListProjectRequestsV1Response>({
    page: s.optional(s.number()),
    limit: s.optional(s.number()),
    requests: s.optional(s.array(s.lazy(() => projectRequestResponseSchema))),
  });
