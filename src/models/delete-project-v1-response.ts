import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteProjectV1Response = {
  message?: string;
};

export const deleteProjectV1ResponseSchema: Schema<DeleteProjectV1Response> =
  s.object<DeleteProjectV1Response>({
    message: s.optional(s.string()),
  });
