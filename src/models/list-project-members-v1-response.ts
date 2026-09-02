import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectMembersV1ResponseMembersItemsSchema,
  type ListProjectMembersV1ResponseMembersItems,
} from "./list-project-members-v1-response-members-items.js";

export type ListProjectMembersV1Response = {
  members?: ListProjectMembersV1ResponseMembersItems[];
};

export const listProjectMembersV1ResponseSchema: Schema<ListProjectMembersV1Response> =
  s.object<ListProjectMembersV1Response>({
    members: s.optional(s.array(s.lazy(() => listProjectMembersV1ResponseMembersItemsSchema))),
  });
