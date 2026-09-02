import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentialsSchema,
  type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials,
} from "./list-project-distribution-credentials-v1-response-distribution-credentials-items-distribution-credentials.js";
import {
  listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMemberSchema,
  type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember,
} from "./list-project-distribution-credentials-v1-response-distribution-credentials-items-member.js";

export type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems = {
  member: ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember;
  distributionCredentials: ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials;
};

export const listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsSchema: Schema<ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems> =
  s.object<ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems>({
    member: listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMemberSchema,
    distributionCredentials:
      listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentialsSchema,
    _keysMap: {
      distributionCredentials: "distribution_credentials",
    },
  });
