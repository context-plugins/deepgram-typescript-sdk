import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectsV1ResponseProjectsItems = {
  /** The unique identifier of the project */
  projectId?: string;
  /** The name of the project */
  name?: string;
};

export const listProjectsV1ResponseProjectsItemsSchema: Schema<ListProjectsV1ResponseProjectsItems> =
  s.object<ListProjectsV1ResponseProjectsItems>({
    projectId: s.optional(s.string()),
    name: s.optional(s.string()),
    _keysMap: {
      projectId: "project_id",
    },
  });
