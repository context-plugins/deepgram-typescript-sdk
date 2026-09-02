import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  analyze(
    request: ReadV1Text.AnalyzeRequest,
    options?: RequestOptions,
  ): ApiPromise<ReadV1Response, ReadV1Text.AnalyzeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/read"),
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
    callback?: string;
    callbackMethod?: V1ListenPostParametersCallbackMethod;
    sentiment?: boolean;
    summarize?: V1ReadPostParametersSummarize;
    tag?: V1ReadPostParametersTag;
    topics?: boolean;
    customTopic?: V1ReadPostParametersCustomTopic;
    customTopicMode?: V1ListenPostParametersCustomTopicMode;
    intents?: boolean;
    customIntent?: V1ReadPostParametersCustomIntent;
    customIntentMode?: V1ListenPostParametersCustomTopicMode;
    language?: string;
    body?: ReadV1Request;
  };

  export class AnalyzeError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<AnalyzeError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
