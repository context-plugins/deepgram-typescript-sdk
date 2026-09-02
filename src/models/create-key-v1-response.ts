import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateKeyV1Response = {
  apiKeyId?: string;
  key?: string;
  comment?: string;
  scopes?: string[];
  tags?: string[];
  expirationDate?: Date;
};

export const createKeyV1ResponseSchema: Schema<CreateKeyV1Response> = s.object<CreateKeyV1Response>({
  apiKeyId: s.optional(s.string()),
  key: s.optional(s.string()),
  comment: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
  tags: s.optional(s.array(s.string())),
  expirationDate: s.optional(s.dateTime()),
  _keysMap: {
    apiKeyId: "api_key_id",
    expirationDate: "expiration_date",
  },
});
