import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateProjectV1Response = {
  /** confirmation message */
  message?: string;
};

export const updateProjectV1ResponseSchema: Schema<UpdateProjectV1Response> =
  s.object<UpdateProjectV1Response>({
    message: s.optional(s.string()),
  });
