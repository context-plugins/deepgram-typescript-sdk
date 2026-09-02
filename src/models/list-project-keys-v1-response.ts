import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectKeysV1ResponseApiKeysItemsSchema,
  type ListProjectKeysV1ResponseApiKeysItems,
} from "./list-project-keys-v1-response-api-keys-items.js";

export type ListProjectKeysV1Response = {
  apiKeys?: ListProjectKeysV1ResponseApiKeysItems[];
};

export const listProjectKeysV1ResponseSchema: Schema<ListProjectKeysV1Response> =
  s.object<ListProjectKeysV1Response>({
    apiKeys: s.optional(s.array(s.lazy(() => listProjectKeysV1ResponseApiKeysItemsSchema))),
    _keysMap: {
      apiKeys: "api_keys",
    },
  });
