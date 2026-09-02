import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectMemberScopesV1Response = {
  scopes?: string[];
};

export const listProjectMemberScopesV1ResponseSchema: Schema<ListProjectMemberScopesV1Response> =
  s.object<ListProjectMemberScopesV1Response>({
    scopes: s.optional(s.array(s.string())),
  });
