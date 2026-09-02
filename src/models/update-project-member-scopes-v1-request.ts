import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateProjectMemberScopesV1Request = {
  scope: string;
};

export const updateProjectMemberScopesV1RequestSchema: Schema<UpdateProjectMemberScopesV1Request> =
  s.object<UpdateProjectMemberScopesV1Request>({
    scope: s.string(),
  });
