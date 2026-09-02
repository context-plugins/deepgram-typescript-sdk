import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials = {
  distributionCredentialsId: string;
  provider: string;
  comment?: string;
  scopes: string[];
  created: Date;
};

export const listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentialsSchema: Schema<ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials> =
  s.object<ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials>({
    distributionCredentialsId: s.string(),
    provider: s.string(),
    comment: s.optional(s.string()),
    scopes: s.array(s.string()),
    created: s.dateTime(),
    _keysMap: {
      distributionCredentialsId: "distribution_credentials_id",
    },
  });
