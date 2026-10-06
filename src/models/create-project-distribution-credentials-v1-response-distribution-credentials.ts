import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateProjectDistributionCredentialsV1ResponseDistributionCredentials = {
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

export const createProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema: Schema<CreateProjectDistributionCredentialsV1ResponseDistributionCredentials> =
  s.object<CreateProjectDistributionCredentialsV1ResponseDistributionCredentials>({
    distributionCredentialsId: s.string(),
    provider: s.string(),
    comment: s.optional(s.string()),
    scopes: s.array(s.string()),
    created: s.dateTime(),
    _keysMap: {
      distributionCredentialsId: "distribution_credentials_id",
    },
  });
