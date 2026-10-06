import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listenV1ResponseMetadataIntentsInfoSchema,
  type ListenV1ResponseMetadataIntentsInfo,
} from "./listen-v1-response-metadata-intents-info.js";
import {
  listenV1ResponseMetadataSentimentInfoSchema,
  type ListenV1ResponseMetadataSentimentInfo,
} from "./listen-v1-response-metadata-sentiment-info.js";
import {
  listenV1ResponseMetadataSummaryInfoSchema,
  type ListenV1ResponseMetadataSummaryInfo,
} from "./listen-v1-response-metadata-summary-info.js";
import {
  listenV1ResponseMetadataTopicsInfoSchema,
  type ListenV1ResponseMetadataTopicsInfo,
} from "./listen-v1-response-metadata-topics-info.js";

export type ListenV1ResponseMetadata = {
  /** @default "deprecated" */
  transactionKey?: string;
  requestId: string;
  sha256: string;
  created: Date;
  duration: number;
  channels: number;
  models: string[];
  modelInfo: Record<string, unknown>;
  summaryInfo?: ListenV1ResponseMetadataSummaryInfo;
  sentimentInfo?: ListenV1ResponseMetadataSentimentInfo;
  topicsInfo?: ListenV1ResponseMetadataTopicsInfo;
  intentsInfo?: ListenV1ResponseMetadataIntentsInfo;
  tags?: string[];
};

export const listenV1ResponseMetadataSchema: Schema<ListenV1ResponseMetadata> =
  s.object<ListenV1ResponseMetadata>({
    transactionKey: s.defaulted(s.string(), "deprecated"),
    requestId: s.string(),
    sha256: s.string(),
    created: s.dateTime(),
    duration: s.float64(),
    channels: s.int(),
    models: s.array(s.string()),
    modelInfo: s.record(s.string(), s.unknown()),
    summaryInfo: s.optional(s.lazy(() => listenV1ResponseMetadataSummaryInfoSchema)),
    sentimentInfo: s.optional(s.lazy(() => listenV1ResponseMetadataSentimentInfoSchema)),
    topicsInfo: s.optional(s.lazy(() => listenV1ResponseMetadataTopicsInfoSchema)),
    intentsInfo: s.optional(s.lazy(() => listenV1ResponseMetadataIntentsInfoSchema)),
    tags: s.optional(s.array(s.string())),
    _keysMap: {
      transactionKey: "transaction_key",
      requestId: "request_id",
      modelInfo: "model_info",
      summaryInfo: "summary_info",
      sentimentInfo: "sentiment_info",
      topicsInfo: "topics_info",
      intentsInfo: "intents_info",
    },
  });
