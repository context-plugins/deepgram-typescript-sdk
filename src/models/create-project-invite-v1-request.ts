import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for creating a project invite */
export type CreateProjectInviteV1Request = {
  /** The email address of the invitee */
  email: string;
  /** The scope of the invitee */
  scope: string;
};

export const createProjectInviteV1RequestSchema: Schema<CreateProjectInviteV1Request> =
  s.object<CreateProjectInviteV1Request>({
    email: s.string(),
    scope: s.string(),
  });
