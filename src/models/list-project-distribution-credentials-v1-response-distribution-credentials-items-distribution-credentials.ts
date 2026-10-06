import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials =
  {
    /** Unique identifier for the distribution credentials */
    distributionCredentialsId: string;
    /** The provider of the distribution service */
    provider: string;
    /** Optional comment about the credentials */
    comment?: string;
    /** List of permission scopes for the credentials */
    scopes: string[];
    /** Timestamp when the credentials were created */
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
