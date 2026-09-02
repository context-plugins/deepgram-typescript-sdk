import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getProjectKeyV1ResponseItemSchema,
  type GetProjectKeyV1ResponseItem,
} from "./get-project-key-v1-response-item.js";

export type GetProjectKeyV1Response = {
  item?: GetProjectKeyV1ResponseItem;
};

export const getProjectKeyV1ResponseSchema: Schema<GetProjectKeyV1Response> =
  s.object<GetProjectKeyV1Response>({
    item: s.optional(s.lazy(() => getProjectKeyV1ResponseItemSchema)),
  });
