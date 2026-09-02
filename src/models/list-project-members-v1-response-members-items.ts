import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectMembersV1ResponseMembersItems = {
  memberId?: string;
  scopes?: string[];
  email?: string;
  firstName?: string;
  lastName?: string;
};

export const listProjectMembersV1ResponseMembersItemsSchema: Schema<ListProjectMembersV1ResponseMembersItems> =
  s.object<ListProjectMembersV1ResponseMembersItems>({
    memberId: s.optional(s.string()),
    scopes: s.optional(s.array(s.string())),
    email: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    _keysMap: {
      memberId: "member_id",
      firstName: "first_name",
      lastName: "last_name",
    },
  });
