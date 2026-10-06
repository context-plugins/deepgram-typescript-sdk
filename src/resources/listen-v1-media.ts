import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Transcribe and analyze pre-recorded audio and video
   *
   * @remarks
   * Transcribe audio and video using Deepgram's speech-to-text REST API
   *
   * @returns Returns either transcription results, or a request_id when using a callback.
   *
   * @throws {@link ListenV1Media.TranscribeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transcribe(
    request: ListenV1Media.TranscribeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListenV1MediaTranscribeResponse200, ListenV1Media.TranscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/listen"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
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
          { name: "utt_split", value: request.uttSplit, schema: s.defaulted(s.float64(), 0.8) },
          {
            name: "version",
            value: request.version,
            schema: s.optional(s.lazy(() => v1ListenPostParametersVersionSchema)),
          },
          { name: "mip_opt_out", value: request.mipOptOut, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** URL to which we'll make the callback request */
    callback?: string;
    /**
     * HTTP method by which the callback request will be made
     *
     * @default V1ListenPostParametersCallbackMethod.Post
     */
    callbackMethod?: V1ListenPostParametersCallbackMethod;
    /**
     * Arbitrary key-value pairs that are attached to the API response for usage in downstream
     * processing
     */
    extra?: V1ListenPostParametersExtra;
    /** Recognizes the sentiment throughout a transcript or text @default false */
    sentiment?: boolean;
    /**
     * Summarize content. For Listen API, supports string version option. For Read API, accepts
     * boolean only.
     */
    summarize?: V1ListenPostParametersSummarize;
    /** Label your requests for the purpose of identification during usage reporting */
    tag?: V1ListenPostParametersTag;
    /** Detect topics throughout a transcript or text @default false */
    topics?: boolean;
    /**
     * Custom topics you want the model to detect within your input audio or text if present Submit
     * up to `100`.
     */
    customTopic?: V1ListenPostParametersCustomTopic;
    /**
     * Sets how the model will interpret strings submitted to the `custom_topic` param. When
     * `strict`, the model will only return topics submitted using the `custom_topic` param. When
     * `extended`, the model will return its own detected topics in addition to those submitted
     * using the `custom_topic` param
     *
     * @default V1ListenPostParametersCustomTopicMode.Extended
     */
    customTopicMode?: V1ListenPostParametersCustomTopicMode;
    /** Recognizes speaker intent throughout a transcript or text @default false */
    intents?: boolean;
    /** Custom intents you want the model to detect within your input audio if present */
    customIntent?: V1ListenPostParametersCustomIntent;
    /**
     * Sets how the model will interpret intents submitted to the `custom_intent` param. When
     * `strict`, the model will only return intents submitted using the `custom_intent` param. When
     * `extended`, the model will return its own detected intents in the `custom_intent` param.
     *
     * @default V1ListenPostParametersCustomTopicMode.Extended
     */
    customIntentMode?: V1ListenPostParametersCustomTopicMode;
    /** Identifies and extracts key entities from content in submitted audio @default false */
    detectEntities?: boolean;
    /** Identifies the dominant language spoken in submitted audio */
    detectLanguage?: V1ListenPostParametersDetectLanguage;
    /**
     * Deprecated: use `diarize_model` instead. Recognize speaker changes. Each word in the
     * transcript will be assigned a speaker number starting at 0.
     *
     * @default false
     */
    diarize?: boolean;
    /**
     * Select and enable a specific diarization model version. Specifying this parameter enables
     * diarization and selects the model — you do not need to also set the deprecated `diarize=true`
     * parameter. For batch, supported values are `latest` (currently v2), `v1`, and `v2`. For
     * streaming, supported values are `latest` (currently v1) and `v1`; `v2` returns a validation
     * error on streaming requests.
     */
    diarizeModel?: V1ListenPostParametersDiarizeModel;
    /** Dictation mode for controlling formatting with dictated speech @default false */
    dictation?: boolean;
    /** Specify the expected encoding of your submitted audio */
    encoding?: V1ListenPostParametersEncoding;
    /**
     * Filler Words can help transcribe interruptions in your audio, like "uh" and "um"
     *
     * @default false
     */
    fillerWords?: boolean;
    /**
     * Key term prompting improves recognition of specialized terminology and brands. Only
     * compatible with Nova-3.
     *
     * `keyterm` accepts plain terms only. Unlike the legacy `keywords` feature, it does not support
     * weights or intensifiers. Appending one (for example, `keyterm=term:0.15`) is not rejected—the
     * weight is silently ignored and the entire value is treated as a literal keyterm.
     *
     * To boost multiple separate keyterms, repeat the `keyterm` parameter (for example,
     * `keyterm=term1&keyterm=term2`). To boost one multi-word phrase as a single keyterm, join the
     * words with `%20` or `+` (for example, `keyterm=customer%20service`). Do not separate keyterms
     * with commas, semicolons, or line breaks.
     */
    keyterm?: string[];
    /** Keywords can boost or suppress specialized terminology and brands */
    keywords?: V1ListenPostParametersKeywords;
    /**
     * The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken
     * language. Depending on the Model and API endpoint you choose only certain languages are
     * available
     *
     * @default "en"
     */
    language?: string;
    /** Spoken measurements will be converted to their corresponding abbreviations @default false */
    measurements?: boolean;
    /** AI model used to process submitted audio */
    model?: V1ListenPostParametersModel;
    /** Transcribe each audio channel independently @default false */
    multichannel?: boolean;
    /** Numerals converts numbers from written format to numerical format @default false */
    numerals?: boolean;
    /** Splits audio into paragraphs to improve transcript readability @default false */
    paragraphs?: boolean;
    /**
     * Profanity Filter looks for recognized profanity and converts it to the nearest recognized
     * non-profane word or removes it from the transcript completely
     *
     * @default false
     */
    profanityFilter?: boolean;
    /** Add punctuation and capitalization to the transcript @default false */
    punctuate?: boolean;
    /** Redaction removes sensitive information from your transcripts */
    redact?: V1ListenPostParametersRedact;
    /** Search for terms or phrases in submitted audio and replaces them */
    replace?: V1ListenPostParametersReplace;
    /** Search for terms or phrases in submitted audio */
    search?: V1ListenPostParametersSearch;
    /**
     * Apply formatting to transcript output. When set to true, additional formatting will be
     * applied to transcripts to improve readability
     *
     * @default false
     */
    smartFormat?: boolean;
    /** Segments speech into meaningful semantic units @default false */
    utterances?: boolean;
    /** Seconds to wait before detecting a pause between words in submitted audio @default 0.8 */
    uttSplit?: number;
    /** Version of an AI model to use */
    version?: V1ListenPostParametersVersion;
    /**
     * Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing
     * impacts before setting this to true. https://dpgr.am/deepgram-mip
     *
     * @default false
     */
    mipOptOut?: boolean;
    /** Transcribe an audio or video file */
    body?: ListenV1RequestUrl;
  };

  export class TranscribeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"listenV1Response", ListenV1Response>>;

    static readonly errors: ErrorDecoders<TranscribeError> = [
      { on: 400, kind: "listenV1Response", decode: { kind: "json", schema: listenV1ResponseSchema } },
    ];
  }
}
