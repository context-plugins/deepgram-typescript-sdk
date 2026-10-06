import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember = {
  /** Unique identifier for the member */
  memberId: string;
  /** Email address of the member */
  email: string;
};

export const listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMemberSchema: Schema<ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember> =
  s.object<ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember>({
    memberId: s.string(),
    email: s.string(),
    _keysMap: {
      memberId: "member_id",
    },
  });
