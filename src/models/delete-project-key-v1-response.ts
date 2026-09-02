import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteProjectKeyV1Response = {
  message?: string;
};

export const deleteProjectKeyV1ResponseSchema: Schema<DeleteProjectKeyV1Response> =
  s.object<DeleteProjectKeyV1Response>({
    message: s.optional(s.string()),
  });
