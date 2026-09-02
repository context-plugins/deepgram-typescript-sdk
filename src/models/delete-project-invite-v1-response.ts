import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteProjectInviteV1Response = {
  message?: string;
};

export const deleteProjectInviteV1ResponseSchema: Schema<DeleteProjectInviteV1Response> =
  s.object<DeleteProjectInviteV1Response>({
    message: s.optional(s.string()),
  });
