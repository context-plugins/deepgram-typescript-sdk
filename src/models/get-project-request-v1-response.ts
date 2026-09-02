import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { projectRequestResponseSchema, type ProjectRequestResponse } from "./project-request-response.js";

export type GetProjectRequestV1Response = {
  request?: ProjectRequestResponse;
};

export const getProjectRequestV1ResponseSchema: Schema<GetProjectRequestV1Response> =
  s.object<GetProjectRequestV1Response>({
    request: s.optional(s.lazy(() => projectRequestResponseSchema)),
  });
