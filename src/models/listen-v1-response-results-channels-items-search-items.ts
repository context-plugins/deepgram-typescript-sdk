import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseResultsChannelsItemsSearchItemsHitsItemsSchema,
  type ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems,
} from "./listen-v1-response-results-channels-items-search-items-hits-items.js";

export type ListenV1ResponseResultsChannelsItemsSearchItems = {
  query?: string;
  hits?: ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems[];
};

export const listenV1ResponseResultsChannelsItemsSearchItemsSchema: Schema<ListenV1ResponseResultsChannelsItemsSearchItems> =
  s.object<ListenV1ResponseResultsChannelsItemsSearchItems>({
    query: s.optional(s.string()),
    hits: s.optional(s.array(s.lazy(() => listenV1ResponseResultsChannelsItemsSearchItemsHitsItemsSchema))),
  });
