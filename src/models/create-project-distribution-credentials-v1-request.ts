import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateProjectDistributionCredentialsV1Request = {
  comment?: string;
};

export const createProjectDistributionCredentialsV1RequestSchema: Schema<CreateProjectDistributionCredentialsV1Request> =
  s.object<CreateProjectDistributionCredentialsV1Request>({
    comment: s.optional(s.string()),
  });
