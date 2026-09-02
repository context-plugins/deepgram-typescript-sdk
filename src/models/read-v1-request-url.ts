import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadV1RequestUrl = {
  url: string;
};

export const readV1RequestUrlSchema: Schema<ReadV1RequestUrl> = s.object<ReadV1RequestUrl>({
  url: s.string(),
});
