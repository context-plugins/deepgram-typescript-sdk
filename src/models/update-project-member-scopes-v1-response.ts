import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateProjectMemberScopesV1Response = {
  message?: string;
};

export const updateProjectMemberScopesV1ResponseSchema: Schema<UpdateProjectMemberScopesV1Response> =
  s.object<UpdateProjectMemberScopesV1Response>({
    message: s.optional(s.string()),
  });
