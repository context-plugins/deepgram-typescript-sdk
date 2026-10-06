import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for creating distribution credentials */
export type CreateProjectDistributionCredentialsV1Request = {
  /** Optional comment about the credentials */
  comment?: string;
};

export const createProjectDistributionCredentialsV1RequestSchema: Schema<CreateProjectDistributionCredentialsV1Request> =
  s.object<CreateProjectDistributionCredentialsV1Request>({
    comment: s.optional(s.string()),
  });
