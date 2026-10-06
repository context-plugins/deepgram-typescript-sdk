import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems = {
  confidence?: number;
  start?: number;
  end?: number;
  snippet?: string;
};

export const listenV1ResponseResultsChannelsItemsSearchItemsHitsItemsSchema: Schema<ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems> =
  s.object<ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems>({
    confidence: s.optional(s.float64()),
    start: s.optional(s.float64()),
    end: s.optional(s.float64()),
    snippet: s.optional(s.string()),
  });
