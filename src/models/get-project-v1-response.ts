import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetProjectV1Response = {
  projectId?: string;
  mipOptOut?: boolean;
  name?: string;
};

export const getProjectV1ResponseSchema: Schema<GetProjectV1Response> = s.object<GetProjectV1Response>({
  projectId: s.optional(s.string()),
  mipOptOut: s.optional(s.boolean()),
  name: s.optional(s.string()),
  _keysMap: {
    projectId: "project_id",
    mipOptOut: "mip_opt_out",
  },
});
