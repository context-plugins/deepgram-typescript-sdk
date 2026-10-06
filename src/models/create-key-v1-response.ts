import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** API key created */
export type CreateKeyV1Response = {
  /** The unique identifier of the API key */
  apiKeyId?: string;
  /** The API key */
  key?: string;
  /** A comment for the API key */
  comment?: string;
  /** The scopes for the API key */
  scopes?: string[];
  /** The tags for the API key */
  tags?: string[];
  /** The expiration date of the API key */
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
