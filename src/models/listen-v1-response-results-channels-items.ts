import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseResultsChannelsItemsAlternativesItemsSchema,
  type ListenV1ResponseResultsChannelsItemsAlternativesItems,
} from "./listen-v1-response-results-channels-items-alternatives-items.js";
import {
  listenV1ResponseResultsChannelsItemsSearchItemsSchema,
  type ListenV1ResponseResultsChannelsItemsSearchItems,
} from "./listen-v1-response-results-channels-items-search-items.js";

export type ListenV1ResponseResultsChannelsItems = {
  search?: ListenV1ResponseResultsChannelsItemsSearchItems[];
  alternatives?: ListenV1ResponseResultsChannelsItemsAlternativesItems[];
  detectedLanguage?: string;
};

export const listenV1ResponseResultsChannelsItemsSchema: Schema<ListenV1ResponseResultsChannelsItems> =
  s.object<ListenV1ResponseResultsChannelsItems>({
    search: s.optional(s.array(s.lazy(() => listenV1ResponseResultsChannelsItemsSearchItemsSchema))),
    alternatives: s.optional(
      s.array(s.lazy(() => listenV1ResponseResultsChannelsItemsAlternativesItemsSchema)),
    ),
    detectedLanguage: s.optional(s.string()),
    _keysMap: {
      detectedLanguage: "detected_language",
    },
  });
