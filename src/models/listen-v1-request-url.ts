import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Audio file URL to transcribe */
export type ListenV1RequestUrl = {
  url: string;
};

export const listenV1RequestUrlSchema: Schema<ListenV1RequestUrl> = s.object<ListenV1RequestUrl>({
  url: s.string(),
});
