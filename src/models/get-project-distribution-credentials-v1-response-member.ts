import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetProjectDistributionCredentialsV1ResponseMember = {
  /** Unique identifier for the member */
  memberId: string;
  /** Email address of the member */
  email: string;
};

export const getProjectDistributionCredentialsV1ResponseMemberSchema: Schema<GetProjectDistributionCredentialsV1ResponseMember> =
  s.object<GetProjectDistributionCredentialsV1ResponseMember>({
    memberId: s.string(),
    email: s.string(),
    _keysMap: {
      memberId: "member_id",
    },
  });
