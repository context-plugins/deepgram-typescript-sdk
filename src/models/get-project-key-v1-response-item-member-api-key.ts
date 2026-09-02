import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetProjectKeyV1ResponseItemMemberApiKey = {
  apiKeyId?: string;
  comment?: string;
  scopes?: string[];
  tags?: string[];
  expirationDate?: Date;
  created?: Date;
};

export const getProjectKeyV1ResponseItemMemberApiKeySchema: Schema<GetProjectKeyV1ResponseItemMemberApiKey> =
  s.object<GetProjectKeyV1ResponseItemMemberApiKey>({
    apiKeyId: s.optional(s.string()),
    comment: s.optional(s.string()),
    scopes: s.optional(s.array(s.string())),
    tags: s.optional(s.array(s.string())),
    expirationDate: s.optional(s.dateTime()),
    created: s.optional(s.dateTime()),
    _keysMap: {
      apiKeyId: "api_key_id",
      expirationDate: "expiration_date",
    },
  });
