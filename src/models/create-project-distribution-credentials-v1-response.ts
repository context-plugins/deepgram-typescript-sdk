import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema,
  type CreateProjectDistributionCredentialsV1ResponseDistributionCredentials,
} from "./create-project-distribution-credentials-v1-response-distribution-credentials.js";
import {
  createProjectDistributionCredentialsV1ResponseMemberSchema,
  type CreateProjectDistributionCredentialsV1ResponseMember,
} from "./create-project-distribution-credentials-v1-response-member.js";

export type CreateProjectDistributionCredentialsV1Response = {
  member: CreateProjectDistributionCredentialsV1ResponseMember;
  distributionCredentials: CreateProjectDistributionCredentialsV1ResponseDistributionCredentials;
};

export const createProjectDistributionCredentialsV1ResponseSchema: Schema<CreateProjectDistributionCredentialsV1Response> =
  s.object<CreateProjectDistributionCredentialsV1Response>({
    member: createProjectDistributionCredentialsV1ResponseMemberSchema,
    distributionCredentials: createProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema,
    _keysMap: {
      distributionCredentials: "distribution_credentials",
    },
  });
