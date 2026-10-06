import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateProjectV1Request = {
  /** The name of the project */
  name?: string;
};

export const updateProjectV1RequestSchema: Schema<UpdateProjectV1Request> = s.object<UpdateProjectV1Request>({
  name: s.optional(s.string()),
});
