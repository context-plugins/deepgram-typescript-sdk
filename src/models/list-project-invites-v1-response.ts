import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectInvitesV1ResponseInvitesItemsSchema,
  type ListProjectInvitesV1ResponseInvitesItems,
} from "./list-project-invites-v1-response-invites-items.js";

export type ListProjectInvitesV1Response = {
  invites?: ListProjectInvitesV1ResponseInvitesItems[];
};

export const listProjectInvitesV1ResponseSchema: Schema<ListProjectInvitesV1Response> =
  s.object<ListProjectInvitesV1Response>({
    invites: s.optional(s.array(s.lazy(() => listProjectInvitesV1ResponseInvitesItemsSchema))),
  });
