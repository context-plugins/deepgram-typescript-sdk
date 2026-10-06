import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateProjectInviteV1Response = {
  /** confirmation message */
  message?: string;
};

export const createProjectInviteV1ResponseSchema: Schema<CreateProjectInviteV1Response> =
  s.object<CreateProjectInviteV1Response>({
    message: s.optional(s.string()),
  });
