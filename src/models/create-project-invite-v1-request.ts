import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateProjectInviteV1Request = {
  email: string;
  scope: string;
};

export const createProjectInviteV1RequestSchema: Schema<CreateProjectInviteV1Request> =
  s.object<CreateProjectInviteV1Request>({
    email: s.string(),
    scope: s.string(),
  });
