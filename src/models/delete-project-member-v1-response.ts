import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteProjectMemberV1Response = {
  message?: string;
};

export const deleteProjectMemberV1ResponseSchema: Schema<DeleteProjectMemberV1Response> =
  s.object<DeleteProjectMemberV1Response>({
    message: s.optional(s.string()),
  });
