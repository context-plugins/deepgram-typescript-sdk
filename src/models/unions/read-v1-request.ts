import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { readV1RequestTextSchema, type ReadV1RequestText } from "../read-v1-request-text.js";
import { readV1RequestUrlSchema, type ReadV1RequestUrl } from "../read-v1-request-url.js";

export type ReadV1Request = ReadV1RequestUrl | ReadV1RequestText;

export const readV1RequestSchema: Schema<ReadV1Request> = s.of<ReadV1Request>(
  s.union([s.lazy(() => readV1RequestUrlSchema), s.lazy(() => readV1RequestTextSchema)]),
);
