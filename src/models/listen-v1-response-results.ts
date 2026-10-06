import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseResultsChannelsItemsSchema,
  type ListenV1ResponseResultsChannelsItems,
} from "./listen-v1-response-results-channels-items.js";
import {
  listenV1ResponseResultsSummarySchema,
  type ListenV1ResponseResultsSummary,
} from "./listen-v1-response-results-summary.js";
import {
  listenV1ResponseResultsUtterancesItemsSchema,
  type ListenV1ResponseResultsUtterancesItems,
} from "./listen-v1-response-results-utterances-items.js";
import { sharedIntentsSchema, type SharedIntents } from "./shared-intents.js";
import { sharedSentimentsSchema, type SharedSentiments } from "./shared-sentiments.js";
import { sharedTopicsSchema, type SharedTopics } from "./shared-topics.js";

export type ListenV1ResponseResults = {
  channels: ListenV1ResponseResultsChannelsItems[];
  utterances?: ListenV1ResponseResultsUtterancesItems[];
  summary?: ListenV1ResponseResultsSummary;
  /** Output whenever `topics=true` is used */
  topics?: SharedTopics;
  /** Output whenever `intents=true` is used */
  intents?: SharedIntents;
  /** Output whenever `sentiment=true` is used */
  sentiments?: SharedSentiments;
};

export const listenV1ResponseResultsSchema: Schema<ListenV1ResponseResults> =
  s.object<ListenV1ResponseResults>({
    channels: s.array(s.lazy(() => listenV1ResponseResultsChannelsItemsSchema)),
    utterances: s.optional(s.array(s.lazy(() => listenV1ResponseResultsUtterancesItemsSchema))),
    summary: s.optional(s.lazy(() => listenV1ResponseResultsSummarySchema)),
    topics: s.optional(s.lazy(() => sharedTopicsSchema)),
    intents: s.optional(s.lazy(() => sharedIntentsSchema)),
    sentiments: s.optional(s.lazy(() => sharedSentimentsSchema)),
  });
