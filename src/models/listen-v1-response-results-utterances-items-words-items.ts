import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListenV1ResponseResultsUtterancesItemsWordsItems = {
  word?: string;
  start?: number;
  end?: number;
  confidence?: number;
  speaker?: number;
  speakerConfidence?: number;
  punctuatedWord?: string;
};

export const listenV1ResponseResultsUtterancesItemsWordsItemsSchema: Schema<ListenV1ResponseResultsUtterancesItemsWordsItems> =
  s.object<ListenV1ResponseResultsUtterancesItemsWordsItems>({
    word: s.optional(s.string()),
    start: s.optional(s.number()),
    end: s.optional(s.number()),
    confidence: s.optional(s.number()),
    speaker: s.optional(s.number()),
    speakerConfidence: s.optional(s.number()),
    punctuatedWord: s.optional(s.string()),
    _keysMap: {
      speakerConfidence: "speaker_confidence",
      punctuatedWord: "punctuated_word",
    },
  });
