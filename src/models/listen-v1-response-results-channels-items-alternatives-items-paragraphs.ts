import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSchema,
  type ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems,
} from "./listen-v1-response-results-channels-items-alternatives-items-paragraphs-paragraphs-items.js";

export type ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs = {
  transcript?: string;
  paragraphs?: ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems[];
};

export const listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsSchema: Schema<ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs> =
  s.object<ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs>({
    transcript: s.optional(s.string()),
    paragraphs: s.optional(
      s.array(
        s.lazy(() => listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSchema),
      ),
    ),
  });
