import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectKeysV1ResponseApiKeysItemsApiKeySchema,
  type ListProjectKeysV1ResponseApiKeysItemsApiKey,
} from "./list-project-keys-v1-response-api-keys-items-api-key.js";
import {
  listProjectKeysV1ResponseApiKeysItemsMemberSchema,
  type ListProjectKeysV1ResponseApiKeysItemsMember,
} from "./list-project-keys-v1-response-api-keys-items-member.js";

export type ListProjectKeysV1ResponseApiKeysItems = {
  member?: ListProjectKeysV1ResponseApiKeysItemsMember;
  apiKey?: ListProjectKeysV1ResponseApiKeysItemsApiKey;
};

export const listProjectKeysV1ResponseApiKeysItemsSchema: Schema<ListProjectKeysV1ResponseApiKeysItems> =
  s.object<ListProjectKeysV1ResponseApiKeysItems>({
    member: s.optional(s.lazy(() => listProjectKeysV1ResponseApiKeysItemsMemberSchema)),
    apiKey: s.optional(s.lazy(() => listProjectKeysV1ResponseApiKeysItemsApiKeySchema)),
    _keysMap: {
      apiKey: "api_key",
    },
  });
