import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getProjectKeyV1ResponseItemMemberApiKeySchema,
  type GetProjectKeyV1ResponseItemMemberApiKey,
} from "./get-project-key-v1-response-item-member-api-key.js";

export type GetProjectKeyV1ResponseItemMember = {
  memberId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  apiKey?: GetProjectKeyV1ResponseItemMemberApiKey;
};

export const getProjectKeyV1ResponseItemMemberSchema: Schema<GetProjectKeyV1ResponseItemMember> =
  s.object<GetProjectKeyV1ResponseItemMember>({
    memberId: s.optional(s.string()),
    email: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    apiKey: s.optional(s.lazy(() => getProjectKeyV1ResponseItemMemberApiKeySchema)),
    _keysMap: {
      memberId: "member_id",
      firstName: "first_name",
      lastName: "last_name",
      apiKey: "api_key",
    },
  });
