import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember = {
  memberId: string;
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
