import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantV1Response = {
  accessToken: string;
  expiresIn?: number;
};

export const grantV1ResponseSchema: Schema<GrantV1Response> = s.object<GrantV1Response>({
  accessToken: s.string(),
  expiresIn: s.optional(s.number()),
  _keysMap: {
    accessToken: "access_token",
    expiresIn: "expires_in",
  },
});
