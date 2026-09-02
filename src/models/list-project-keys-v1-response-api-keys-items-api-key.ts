import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectKeysV1ResponseApiKeysItemsApiKey = {
  apiKeyId?: string;
  comment?: string;
  scopes?: string[];
  created?: Date;
};

export const listProjectKeysV1ResponseApiKeysItemsApiKeySchema: Schema<ListProjectKeysV1ResponseApiKeysItemsApiKey> =
  s.object<ListProjectKeysV1ResponseApiKeysItemsApiKey>({
    apiKeyId: s.optional(s.string()),
    comment: s.optional(s.string()),
    scopes: s.optional(s.array(s.string())),
    created: s.optional(s.dateTime()),
    _keysMap: {
      apiKeyId: "api_key_id",
    },
  });
