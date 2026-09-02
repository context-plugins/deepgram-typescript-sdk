import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItemsSchema,
  type ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems,
} from "./listen-v1-response-results-channels-items-alternatives-items-paragraphs-paragraphs-items-sentences-items.js";

export type ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems = {
  sentences?: ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems[];
  speaker?: number;
  numWords?: number;
  start?: number;
  end?: number;
};

export const listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSchema: Schema<ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems> =
  s.object<ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems>({
    sentences: s.optional(
      s.array(
        s.lazy(
          () =>
            listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItemsSchema,
        ),
      ),
    ),
    speaker: s.optional(s.number()),
    numWords: s.optional(s.number()),
    start: s.optional(s.number()),
    end: s.optional(s.number()),
    _keysMap: {
      numWords: "num_words",
    },
  });
