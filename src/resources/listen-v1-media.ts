import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listenV1RequestUrlSchema, type ListenV1RequestUrl } from "../models/listen-v1-request-url.js";
import { listenV1ResponseSchema, type ListenV1Response } from "../models/listen-v1-response.js";
import {
  listenV1MediaTranscribeResponse200Schema,
  type ListenV1MediaTranscribeResponse200,
} from "../models/unions/listen-v1-media-transcribe-response200.js";
import {
  v1ListenPostParametersCustomIntentSchema,
  type V1ListenPostParametersCustomIntent,
} from "../models/unions/v1-listen-post-parameters-custom-intent.js";
import {
  v1ListenPostParametersCustomTopicSchema,
  type V1ListenPostParametersCustomTopic,
} from "../models/unions/v1-listen-post-parameters-custom-topic.js";
import {
  v1ListenPostParametersDetectLanguageSchema,
  type V1ListenPostParametersDetectLanguage,
} from "../models/unions/v1-listen-post-parameters-detect-language.js";
import {
  v1ListenPostParametersExtraSchema,
  type V1ListenPostParametersExtra,
} from "../models/unions/v1-listen-post-parameters-extra.js";
import {
  v1ListenPostParametersKeywordsSchema,
  type V1ListenPostParametersKeywords,
} from "../models/unions/v1-listen-post-parameters-keywords.js";
import {
  v1ListenPostParametersModelSchema,
  type V1ListenPostParametersModel,
} from "../models/unions/v1-listen-post-parameters-model.js";
import {
  v1ListenPostParametersRedactSchema,
  type V1ListenPostParametersRedact,
} from "../models/unions/v1-listen-post-parameters-redact.js";
import {
  v1ListenPostParametersReplaceSchema,
  type V1ListenPostParametersReplace,
} from "../models/unions/v1-listen-post-parameters-replace.js";
import {
  v1ListenPostParametersSearchSchema,
  type V1ListenPostParametersSearch,
} from "../models/unions/v1-listen-post-parameters-search.js";
import {
  v1ListenPostParametersSummarizeSchema,
  type V1ListenPostParametersSummarize,
} from "../models/unions/v1-listen-post-parameters-summarize.js";
import {
  v1ListenPostParametersTagSchema,
  type V1ListenPostParametersTag,
} from "../models/unions/v1-listen-post-parameters-tag.js";
import {
  v1ListenPostParametersVersionSchema,
  type V1ListenPostParametersVersion,
} from "../models/unions/v1-listen-post-parameters-version.js";
import {
  V1ListenPostParametersCallbackMethod,
  v1ListenPostParametersCallbackMethodSchema,
} from "../models/v1-listen-post-parameters-callback-method.js";
import {
  V1ListenPostParametersCustomTopicMode,
  v1ListenPostParametersCustomTopicModeSchema,
} from "../models/v1-listen-post-parameters-custom-topic-mode.js";
import {
  v1ListenPostParametersDiarizeModelSchema,
  type V1ListenPostParametersDiarizeModel,
} from "../models/v1-listen-post-parameters-diarize-model.js";
import {
  v1ListenPostParametersEncodingSchema,
  type V1ListenPostParametersEncoding,
} from "../models/v1-listen-post-parameters-encoding.js";
import type { Servers } from "../servers.js";

export class ListenV1Media {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  transcribe(
    request: ListenV1Media.TranscribeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListenV1MediaTranscribeResponse200, ListenV1Media.TranscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/listen"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "callback", value: request.callback, schema: s.optional(s.string()) },
          {
            name: "callback_method",
            value: request.callbackMethod,
            schema: s.defaulted(
              v1ListenPostParametersCallbackMethodSchema,
              V1ListenPostParametersCallbackMethod.Post,
            ),
          },
          {
            name: "extra",
            value: request.extra,
            schema: s.optional(s.lazy(() => v1ListenPostParametersExtraSchema)),
          },
          { name: "sentiment", value: request.sentiment, schema: s.defaulted(s.boolean(), false) },
          {
            name: "summarize",
            value: request.summarize,
            schema: s.optional(s.lazy(() => v1ListenPostParametersSummarizeSchema)),
          },
          {
            name: "tag",
            value: request.tag,
            schema: s.optional(s.lazy(() => v1ListenPostParametersTagSchema)),
          },
          { name: "topics", value: request.topics, schema: s.defaulted(s.boolean(), false) },
          {
            name: "custom_topic",
            value: request.customTopic,
            schema: s.optional(s.lazy(() => v1ListenPostParametersCustomTopicSchema)),
          },
          {
            name: "custom_topic_mode",
            value: request.customTopicMode,
            schema: s.defaulted(
              v1ListenPostParametersCustomTopicModeSchema,
              V1ListenPostParametersCustomTopicMode.Extended,
            ),
          },
          { name: "intents", value: request.intents, schema: s.defaulted(s.boolean(), false) },
          {
            name: "custom_intent",
            value: request.customIntent,
            schema: s.optional(s.lazy(() => v1ListenPostParametersCustomIntentSchema)),
          },
          {
            name: "custom_intent_mode",
            value: request.customIntentMode,
            schema: s.defaulted(
              v1ListenPostParametersCustomTopicModeSchema,
              V1ListenPostParametersCustomTopicMode.Extended,
            ),
          },
          { name: "detect_entities", value: request.detectEntities, schema: s.defaulted(s.boolean(), false) },
          {
            name: "detect_language",
            value: request.detectLanguage,
            schema: s.optional(s.lazy(() => v1ListenPostParametersDetectLanguageSchema)),
          },
          { name: "diarize", value: request.diarize, schema: s.defaulted(s.boolean(), false) },
          {
            name: "diarize_model",
            value: request.diarizeModel,
            schema: s.optional(s.lazy(() => v1ListenPostParametersDiarizeModelSchema)),
          },
          { name: "dictation", value: request.dictation, schema: s.defaulted(s.boolean(), false) },
          {
            name: "encoding",
            value: request.encoding,
            schema: s.optional(s.lazy(() => v1ListenPostParametersEncodingSchema)),
          },
          { name: "filler_words", value: request.fillerWords, schema: s.defaulted(s.boolean(), false) },
          { name: "keyterm", value: request.keyterm, schema: s.optional(s.array(s.string())) },
          {
            name: "keywords",
            value: request.keywords,
            schema: s.optional(s.lazy(() => v1ListenPostParametersKeywordsSchema)),
          },
          { name: "language", value: request.language, schema: s.defaulted(s.string(), "en") },
          { name: "measurements", value: request.measurements, schema: s.defaulted(s.boolean(), false) },
          {
            name: "model",
            value: request.model,
            schema: s.optional(s.lazy(() => v1ListenPostParametersModelSchema)),
          },
          { name: "multichannel", value: request.multichannel, schema: s.defaulted(s.boolean(), false) },
          { name: "numerals", value: request.numerals, schema: s.defaulted(s.boolean(), false) },
          { name: "paragraphs", value: request.paragraphs, schema: s.defaulted(s.boolean(), false) },
          {
            name: "profanity_filter",
            value: request.profanityFilter,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "punctuate", value: request.punctuate, schema: s.defaulted(s.boolean(), false) },
          {
            name: "redact",
            value: request.redact,
            schema: s.optional(s.lazy(() => v1ListenPostParametersRedactSchema)),
          },
          {
            name: "replace",
            value: request.replace,
            schema: s.optional(s.lazy(() => v1ListenPostParametersReplaceSchema)),
          },
          {
            name: "search",
            value: request.search,
            schema: s.optional(s.lazy(() => v1ListenPostParametersSearchSchema)),
          },
          { name: "smart_format", value: request.smartFormat, schema: s.defaulted(s.boolean(), false) },
          { name: "utterances", value: request.utterances, schema: s.defaulted(s.boolean(), false) },
          { name: "utt_split", value: request.uttSplit, schema: s.defaulted(s.number(), 0.8) },
          {
            name: "version",
            value: request.version,
            schema: s.optional(s.lazy(() => v1ListenPostParametersVersionSchema)),
          },
          { name: "mip_opt_out", value: request.mipOptOut, schema: s.defaulted(s.boolean(), false) },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listenV1RequestUrlSchema)),
        },
      },
      {
        success: { kind: "json", schema: listenV1MediaTranscribeResponse200Schema },
        errorFactory: ListenV1Media.TranscribeError,
      },
      options,
    );
  }
}

export namespace ListenV1Media {
  export type TranscribeRequest = {
    callback?: string;
    callbackMethod?: V1ListenPostParametersCallbackMethod;
    extra?: V1ListenPostParametersExtra;
    sentiment?: boolean;
    summarize?: V1ListenPostParametersSummarize;
    tag?: V1ListenPostParametersTag;
    topics?: boolean;
    customTopic?: V1ListenPostParametersCustomTopic;
    customTopicMode?: V1ListenPostParametersCustomTopicMode;
    intents?: boolean;
    customIntent?: V1ListenPostParametersCustomIntent;
    customIntentMode?: V1ListenPostParametersCustomTopicMode;
    detectEntities?: boolean;
    detectLanguage?: V1ListenPostParametersDetectLanguage;
    diarize?: boolean;
    diarizeModel?: V1ListenPostParametersDiarizeModel;
    dictation?: boolean;
    encoding?: V1ListenPostParametersEncoding;
    fillerWords?: boolean;
    keyterm?: string[];
    keywords?: V1ListenPostParametersKeywords;
    language?: string;
    measurements?: boolean;
    model?: V1ListenPostParametersModel;
    multichannel?: boolean;
    numerals?: boolean;
    paragraphs?: boolean;
    profanityFilter?: boolean;
    punctuate?: boolean;
    redact?: V1ListenPostParametersRedact;
    replace?: V1ListenPostParametersReplace;
    search?: V1ListenPostParametersSearch;
    smartFormat?: boolean;
    utterances?: boolean;
    uttSplit?: number;
    version?: V1ListenPostParametersVersion;
    mipOptOut?: boolean;
    body?: ListenV1RequestUrl;
  };

  export class TranscribeError extends ResponseError<Declared<"listenV1Response", ListenV1Response>> {
    static readonly errors: ErrorDecoders<TranscribeError> = [
      { on: 400, kind: "listenV1Response", decode: { kind: "json", schema: listenV1ResponseSchema } },
    ];
  }
}
