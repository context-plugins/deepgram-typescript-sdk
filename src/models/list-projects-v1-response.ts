import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectsV1ResponseProjectsItemsSchema,
  type ListProjectsV1ResponseProjectsItems,
} from "./list-projects-v1-response-projects-items.js";

export type ListProjectsV1Response = {
  projects?: ListProjectsV1ResponseProjectsItems[];
};

export const listProjectsV1ResponseSchema: Schema<ListProjectsV1Response> = s.object<ListProjectsV1Response>({
  projects: s.optional(s.array(s.lazy(() => listProjectsV1ResponseProjectsItemsSchema))),
});
