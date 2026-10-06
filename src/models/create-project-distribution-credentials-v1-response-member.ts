import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateProjectDistributionCredentialsV1ResponseMember = {
  /** Unique identifier for the member */
  memberId: string;
  /** Email address of the member */
  email: string;
};

export const createProjectDistributionCredentialsV1ResponseMemberSchema: Schema<CreateProjectDistributionCredentialsV1ResponseMember> =
  s.object<CreateProjectDistributionCredentialsV1ResponseMember>({
    memberId: s.string(),
    email: s.string(),
    _keysMap: {
      memberId: "member_id",
    },
  });
