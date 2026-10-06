import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectInvitesV1ResponseInvitesItems = {
  /** The email address of the invitee */
  email?: string;
  /** The scope of the invitee */
  scope?: string;
};

export const listProjectInvitesV1ResponseInvitesItemsSchema: Schema<ListProjectInvitesV1ResponseInvitesItems> =
  s.object<ListProjectInvitesV1ResponseInvitesItems>({
    email: s.optional(s.string()),
    scope: s.optional(s.string()),
  });
