import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectKeysV1ResponseApiKeysItemsMember = {
  memberId?: string;
  email?: string;
};

export const listProjectKeysV1ResponseApiKeysItemsMemberSchema: Schema<ListProjectKeysV1ResponseApiKeysItemsMember> =
  s.object<ListProjectKeysV1ResponseApiKeysItemsMember>({
    memberId: s.optional(s.string()),
    email: s.optional(s.string()),
    _keysMap: {
      memberId: "member_id",
    },
  });
