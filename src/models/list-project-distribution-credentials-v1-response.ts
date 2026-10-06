import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsSchema,
  type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems,
} from "./list-project-distribution-credentials-v1-response-distribution-credentials-items.js";

export type ListProjectDistributionCredentialsV1Response = {
  /** Array of distribution credentials with associated member information */
  distributionCredentials?: ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems[];
};

export const listProjectDistributionCredentialsV1ResponseSchema: Schema<ListProjectDistributionCredentialsV1Response> =
  s.object<ListProjectDistributionCredentialsV1Response>({
    distributionCredentials: s.optional(
      s.array(s.lazy(() => listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsSchema)),
    ),
    _keysMap: {
      distributionCredentials: "distribution_credentials",
    },
  });
