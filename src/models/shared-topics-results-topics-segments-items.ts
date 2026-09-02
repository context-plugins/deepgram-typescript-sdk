import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sharedTopicsResultsTopicsSegmentsItemsTopicsItemsSchema,
  type SharedTopicsResultsTopicsSegmentsItemsTopicsItems,
} from "./shared-topics-results-topics-segments-items-topics-items.js";

export type SharedTopicsResultsTopicsSegmentsItems = {
  text?: string;
  startWord?: number;
  endWord?: number;
  topics?: SharedTopicsResultsTopicsSegmentsItemsTopicsItems[];
};

export const sharedTopicsResultsTopicsSegmentsItemsSchema: Schema<SharedTopicsResultsTopicsSegmentsItems> =
  s.object<SharedTopicsResultsTopicsSegmentsItems>({
    text: s.optional(s.string()),
    startWord: s.optional(s.number()),
    endWord: s.optional(s.number()),
    topics: s.optional(s.array(s.lazy(() => sharedTopicsResultsTopicsSegmentsItemsTopicsItemsSchema))),
    _keysMap: {
      startWord: "start_word",
      endWord: "end_word",
    },
  });
