import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseResultsUtterancesItemsWordsItemsSchema,
  type ListenV1ResponseResultsUtterancesItemsWordsItems,
} from "./listen-v1-response-results-utterances-items-words-items.js";

export type ListenV1ResponseResultsUtterancesItems = {
  start?: number;
  end?: number;
  confidence?: number;
  channel?: number;
  transcript?: string;
  words?: ListenV1ResponseResultsUtterancesItemsWordsItems[];
  speaker?: number;
  id?: string;
};

export const listenV1ResponseResultsUtterancesItemsSchema: Schema<ListenV1ResponseResultsUtterancesItems> =
  s.object<ListenV1ResponseResultsUtterancesItems>({
    start: s.optional(s.float64()),
    end: s.optional(s.float64()),
    confidence: s.optional(s.float64()),
    channel: s.optional(s.int()),
    transcript: s.optional(s.string()),
    words: s.optional(s.array(s.lazy(() => listenV1ResponseResultsUtterancesItemsWordsItemsSchema))),
    speaker: s.optional(s.int()),
    id: s.optional(s.string()),
  });
