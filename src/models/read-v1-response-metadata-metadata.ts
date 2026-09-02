import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  readV1ResponseMetadataMetadataIntentsInfoSchema,
  type ReadV1ResponseMetadataMetadataIntentsInfo,
} from "./read-v1-response-metadata-metadata-intents-info.js";
import {
  readV1ResponseMetadataMetadataSentimentInfoSchema,
  type ReadV1ResponseMetadataMetadataSentimentInfo,
} from "./read-v1-response-metadata-metadata-sentiment-info.js";
import {
  readV1ResponseMetadataMetadataSummaryInfoSchema,
  type ReadV1ResponseMetadataMetadataSummaryInfo,
} from "./read-v1-response-metadata-metadata-summary-info.js";
import {
  readV1ResponseMetadataMetadataTopicsInfoSchema,
  type ReadV1ResponseMetadataMetadataTopicsInfo,
} from "./read-v1-response-metadata-metadata-topics-info.js";

export type ReadV1ResponseMetadataMetadata = {
  requestId?: string;
  created?: Date;
  language?: string;
  summaryInfo?: ReadV1ResponseMetadataMetadataSummaryInfo;
  sentimentInfo?: ReadV1ResponseMetadataMetadataSentimentInfo;
  topicsInfo?: ReadV1ResponseMetadataMetadataTopicsInfo;
  intentsInfo?: ReadV1ResponseMetadataMetadataIntentsInfo;
};

export const readV1ResponseMetadataMetadataSchema: Schema<ReadV1ResponseMetadataMetadata> =
  s.object<ReadV1ResponseMetadataMetadata>({
    requestId: s.optional(s.string()),
    created: s.optional(s.dateTime()),
    language: s.optional(s.string()),
    summaryInfo: s.optional(s.lazy(() => readV1ResponseMetadataMetadataSummaryInfoSchema)),
    sentimentInfo: s.optional(s.lazy(() => readV1ResponseMetadataMetadataSentimentInfoSchema)),
    topicsInfo: s.optional(s.lazy(() => readV1ResponseMetadataMetadataTopicsInfoSchema)),
    intentsInfo: s.optional(s.lazy(() => readV1ResponseMetadataMetadataIntentsInfoSchema)),
    _keysMap: {
      requestId: "request_id",
      summaryInfo: "summary_info",
      sentimentInfo: "sentiment_info",
      topicsInfo: "topics_info",
      intentsInfo: "intents_info",
    },
  });
