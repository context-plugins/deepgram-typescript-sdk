import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantV1Request = {
  /** Time to live in seconds for the token. Defaults to 30 seconds. */
  ttlSeconds?: number;
};

export const grantV1RequestSchema: Schema<GrantV1Request> = s.object<GrantV1Request>({
  ttlSeconds: s.optional(s.float64()),
  _keysMap: {
    ttlSeconds: "ttl_seconds",
  },
});
