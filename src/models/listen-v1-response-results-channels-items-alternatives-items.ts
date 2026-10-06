import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItemsSchema,
  type ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems,
} from "./listen-v1-response-results-channels-items-alternatives-items-entities-items.js";
import {
  listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsSchema,
  type ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs,
} from "./listen-v1-response-results-channels-items-alternatives-items-paragraphs.js";
import {
  listenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItemsSchema,
  type ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems,
} from "./listen-v1-response-results-channels-items-alternatives-items-summaries-items.js";
import {
  listenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItemsSchema,
  type ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems,
} from "./listen-v1-response-results-channels-items-alternatives-items-topics-items.js";
import {
  listenV1ResponseResultsChannelsItemsAlternativesItemsWordsItemsSchema,
  type ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems,
} from "./listen-v1-response-results-channels-items-alternatives-items-words-items.js";

export type ListenV1ResponseResultsChannelsItemsAlternativesItems = {
  transcript?: string;
  confidence?: number;
  words?: ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems[];
  paragraphs?: ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs;
  entities?: ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems[];
  summaries?: ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems[];
  topics?: ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems[];
};

export const listenV1ResponseResultsChannelsItemsAlternativesItemsSchema: Schema<ListenV1ResponseResultsChannelsItemsAlternativesItems> =
  s.object<ListenV1ResponseResultsChannelsItemsAlternativesItems>({
    transcript: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    words: s.optional(
      s.array(s.lazy(() => listenV1ResponseResultsChannelsItemsAlternativesItemsWordsItemsSchema)),
    ),
    paragraphs: s.optional(
      s.lazy(() => listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsSchema),
    ),
    entities: s.optional(
      s.array(s.lazy(() => listenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItemsSchema)),
    ),
    summaries: s.optional(
      s.array(s.lazy(() => listenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItemsSchema)),
    ),
    topics: s.optional(
      s.array(s.lazy(() => listenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItemsSchema)),
    ),
  });
