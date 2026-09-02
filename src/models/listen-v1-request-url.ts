import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1RequestUrl = {
  url: string;
};

export const listenV1RequestUrlSchema: Schema<ListenV1RequestUrl> = s.object<ListenV1RequestUrl>({
  url: s.string(),
});
