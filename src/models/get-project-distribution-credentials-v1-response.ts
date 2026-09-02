import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema,
  type GetProjectDistributionCredentialsV1ResponseDistributionCredentials,
} from "./get-project-distribution-credentials-v1-response-distribution-credentials.js";
import {
  getProjectDistributionCredentialsV1ResponseMemberSchema,
  type GetProjectDistributionCredentialsV1ResponseMember,
} from "./get-project-distribution-credentials-v1-response-member.js";

export type GetProjectDistributionCredentialsV1Response = {
  member: GetProjectDistributionCredentialsV1ResponseMember;
  distributionCredentials: GetProjectDistributionCredentialsV1ResponseDistributionCredentials;
};

export const getProjectDistributionCredentialsV1ResponseSchema: Schema<GetProjectDistributionCredentialsV1Response> =
  s.object<GetProjectDistributionCredentialsV1Response>({
    member: getProjectDistributionCredentialsV1ResponseMemberSchema,
    distributionCredentials: getProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema,
    _keysMap: {
      distributionCredentials: "distribution_credentials",
    },
  });
