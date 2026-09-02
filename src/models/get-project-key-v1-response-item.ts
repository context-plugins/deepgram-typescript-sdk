import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getProjectKeyV1ResponseItemMemberSchema,
  type GetProjectKeyV1ResponseItemMember,
} from "./get-project-key-v1-response-item-member.js";

export type GetProjectKeyV1ResponseItem = {
  member?: GetProjectKeyV1ResponseItemMember;
};

export const getProjectKeyV1ResponseItemSchema: Schema<GetProjectKeyV1ResponseItem> =
  s.object<GetProjectKeyV1ResponseItem>({
    member: s.optional(s.lazy(() => getProjectKeyV1ResponseItemMemberSchema)),
  });
