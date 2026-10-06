import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { readV1ResponseSchema, type ReadV1Response } from "../models/read-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import { readV1RequestSchema, type ReadV1Request } from "../models/unions/read-v1-request.js";
import {
  v1ReadPostParametersCustomIntentSchema,
  type V1ReadPostParametersCustomIntent,
} from "../models/unions/v1-read-post-parameters-custom-intent.js";
import {
  v1ReadPostParametersCustomTopicSchema,
  type V1ReadPostParametersCustomTopic,
} from "../models/unions/v1-read-post-parameters-custom-topic.js";
import {
  v1ReadPostParametersSummarizeSchema,
  type V1ReadPostParametersSummarize,
} from "../models/unions/v1-read-post-parameters-summarize.js";
import {
  v1ReadPostParametersTagSchema,
  type V1ReadPostParametersTag,
} from "../models/unions/v1-read-post-parameters-tag.js";
import {
  V1ListenPostParametersCallbackMethod,
  v1ListenPostParametersCallbackMethodSchema,
} from "../models/v1-listen-post-parameters-callback-method.js";
import {
  V1ListenPostParametersCustomTopicMode,
  v1ListenPostParametersCustomTopicModeSchema,
} from "../models/v1-listen-post-parameters-custom-topic-mode.js";
import type { Servers } from "../servers.js";

export class ReadV1Text {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Analyze text content
   *
   * @remarks
   * Analyze text content using Deepgrams text analysis API
   *
   * @returns Successful text analysis
   *
   * @throws {@link ReadV1Text.AnalyzeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyze(
    request: ReadV1Text.AnalyzeRequest,
    options?: RequestOptions,
  ): ApiPromise<ReadV1Response, ReadV1Text.AnalyzeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/read"),
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
          { name: "sentiment", value: request.sentiment, schema: s.defaulted(s.boolean(), false) },
          {
            name: "summarize",
            value: request.summarize,
            schema: s.optional(s.lazy(() => v1ReadPostParametersSummarizeSchema)),
          },
          {
            name: "tag",
            value: request.tag,
            schema: s.optional(s.lazy(() => v1ReadPostParametersTagSchema)),
          },
          { name: "topics", value: request.topics, schema: s.defaulted(s.boolean(), false) },
          {
            name: "custom_topic",
            value: request.customTopic,
            schema: s.optional(s.lazy(() => v1ReadPostParametersCustomTopicSchema)),
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
            schema: s.optional(s.lazy(() => v1ReadPostParametersCustomIntentSchema)),
          },
          {
            name: "custom_intent_mode",
            value: request.customIntentMode,
            schema: s.defaulted(
              v1ListenPostParametersCustomTopicModeSchema,
              V1ListenPostParametersCustomTopicMode.Extended,
            ),
          },
          { name: "language", value: request.language, schema: s.defaulted(s.string(), "en") },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => readV1RequestSchema)) },
      },
      {
        success: { kind: "json", schema: readV1ResponseSchema },
        errorFactory: ReadV1Text.AnalyzeError,
      },
      options,
    );
  }
}

export namespace ReadV1Text {
  export type AnalyzeRequest = {
    /** URL to which we'll make the callback request */
    callback?: string;
    /**
     * HTTP method by which the callback request will be made
     *
     * @default V1ListenPostParametersCallbackMethod.Post
     */
    callbackMethod?: V1ListenPostParametersCallbackMethod;
    /** Recognizes the sentiment throughout a transcript or text @default false */
    sentiment?: boolean;
    /**
     * Summarize content. For Listen API, supports string version option. For Read API, accepts
     * boolean only.
     */
    summarize?: V1ReadPostParametersSummarize;
    /** Label your requests for the purpose of identification during usage reporting */
    tag?: V1ReadPostParametersTag;
    /** Detect topics throughout a transcript or text @default false */
    topics?: boolean;
    /**
     * Custom topics you want the model to detect within your input audio or text if present Submit
     * up to `100`.
     */
    customTopic?: V1ReadPostParametersCustomTopic;
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
    customIntent?: V1ReadPostParametersCustomIntent;
    /**
     * Sets how the model will interpret intents submitted to the `custom_intent` param. When
     * `strict`, the model will only return intents submitted using the `custom_intent` param. When
     * `extended`, the model will return its own detected intents in the `custom_intent` param.
     *
     * @default V1ListenPostParametersCustomTopicMode.Extended
     */
    customIntentMode?: V1ListenPostParametersCustomTopicMode;
    /**
     * The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken
     * language. Depending on the Model and API endpoint you choose only certain languages are
     * available
     *
     * @default "en"
     */
    language?: string;
    /** Analyze a text file */
    body?: ReadV1Request;
  };

  export class AnalyzeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<AnalyzeError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
