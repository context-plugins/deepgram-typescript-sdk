import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantV1Response = {
  /** JSON Web Token (JWT) */
  accessToken: string;
  /** Time in seconds until the JWT expires */
  expiresIn?: number;
};

export const grantV1ResponseSchema: Schema<GrantV1Response> = s.object<GrantV1Response>({
  accessToken: s.string(),
  expiresIn: s.optional(s.float64()),
  _keysMap: {
    accessToken: "access_token",
    expiresIn: "expires_in",
  },
});
