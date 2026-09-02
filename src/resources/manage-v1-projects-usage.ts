import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import { usageV1ResponseSchema, type UsageV1Response } from "../models/usage-v1-response.js";
import {
  v1ProjectsProjectIdUsageGetParametersDeploymentSchema,
  type V1ProjectsProjectIdUsageGetParametersDeployment,
} from "../models/v1-projects-project-id-usage-get-parameters-deployment.js";
import {
  v1ProjectsProjectIdUsageGetParametersEndpointSchema,
  type V1ProjectsProjectIdUsageGetParametersEndpoint,
} from "../models/v1-projects-project-id-usage-get-parameters-endpoint.js";
import {
  v1ProjectsProjectIdUsageGetParametersMethodSchema,
  type V1ProjectsProjectIdUsageGetParametersMethod,
} from "../models/v1-projects-project-id-usage-get-parameters-method.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsUsage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  get8(
    request: ManageV1ProjectsUsage.Get8Request,
    options?: RequestOptions,
  ): ApiPromise<UsageV1Response, ManageV1ProjectsUsage.Get8Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/usage"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
          { name: "accessor", value: request.accessor, schema: s.optional(s.string()) },
          { name: "alternatives", value: request.alternatives, schema: s.optional(s.boolean()) },
          { name: "callback_method", value: request.callbackMethod, schema: s.optional(s.boolean()) },
          { name: "callback", value: request.callback, schema: s.optional(s.boolean()) },
          { name: "channels", value: request.channels, schema: s.optional(s.boolean()) },
          { name: "custom_intent_mode", value: request.customIntentMode, schema: s.optional(s.boolean()) },
          { name: "custom_intent", value: request.customIntent, schema: s.optional(s.boolean()) },
          { name: "custom_topic_mode", value: request.customTopicMode, schema: s.optional(s.boolean()) },
          { name: "custom_topic", value: request.customTopic, schema: s.optional(s.boolean()) },
          {
            name: "deployment",
            value: request.deployment,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdUsageGetParametersDeploymentSchema)),
          },
          { name: "detect_entities", value: request.detectEntities, schema: s.optional(s.boolean()) },
          { name: "detect_language", value: request.detectLanguage, schema: s.optional(s.boolean()) },
          { name: "diarize", value: request.diarize, schema: s.optional(s.boolean()) },
          { name: "dictation", value: request.dictation, schema: s.optional(s.boolean()) },
          { name: "encoding", value: request.encoding, schema: s.optional(s.boolean()) },
          {
            name: "endpoint",
            value: request.endpoint,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdUsageGetParametersEndpointSchema)),
          },
          { name: "extra", value: request.extra, schema: s.optional(s.boolean()) },
          { name: "filler_words", value: request.fillerWords, schema: s.optional(s.boolean()) },
          { name: "intents", value: request.intents, schema: s.optional(s.boolean()) },
          { name: "keyterm", value: request.keyterm, schema: s.optional(s.boolean()) },
          { name: "keywords", value: request.keywords, schema: s.optional(s.boolean()) },
          { name: "language", value: request.language, schema: s.optional(s.boolean()) },
          { name: "measurements", value: request.measurements, schema: s.optional(s.boolean()) },
          {
            name: "method",
            value: request.method,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdUsageGetParametersMethodSchema)),
          },
          { name: "model", value: request.model, schema: s.optional(s.string()) },
          { name: "multichannel", value: request.multichannel, schema: s.optional(s.boolean()) },
          { name: "numerals", value: request.numerals, schema: s.optional(s.boolean()) },
          { name: "paragraphs", value: request.paragraphs, schema: s.optional(s.boolean()) },
          { name: "profanity_filter", value: request.profanityFilter, schema: s.optional(s.boolean()) },
          { name: "punctuate", value: request.punctuate, schema: s.optional(s.boolean()) },
          { name: "redact", value: request.redact, schema: s.optional(s.boolean()) },
          { name: "replace", value: request.replace, schema: s.optional(s.boolean()) },
          { name: "sample_rate", value: request.sampleRate, schema: s.optional(s.boolean()) },
          { name: "search", value: request.search, schema: s.optional(s.boolean()) },
          { name: "sentiment", value: request.sentiment, schema: s.optional(s.boolean()) },
          { name: "smart_format", value: request.smartFormat, schema: s.optional(s.boolean()) },
          { name: "summarize", value: request.summarize, schema: s.optional(s.boolean()) },
          { name: "tag", value: request.tag, schema: s.optional(s.string()) },
          { name: "topics", value: request.topics, schema: s.optional(s.boolean()) },
          { name: "utt_split", value: request.uttSplit, schema: s.optional(s.boolean()) },
          { name: "utterances", value: request.utterances, schema: s.optional(s.boolean()) },
          { name: "version", value: request.version, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageV1ResponseSchema },
        errorFactory: ManageV1ProjectsUsage.Get8Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsUsage {
  export type Get8Request = {
    projectId: string;
    start?: string;
    end?: string;
    accessor?: string;
    alternatives?: boolean;
    callbackMethod?: boolean;
    callback?: boolean;
    channels?: boolean;
    customIntentMode?: boolean;
    customIntent?: boolean;
    customTopicMode?: boolean;
    customTopic?: boolean;
    deployment?: V1ProjectsProjectIdUsageGetParametersDeployment;
    detectEntities?: boolean;
    detectLanguage?: boolean;
    diarize?: boolean;
    dictation?: boolean;
    encoding?: boolean;
    endpoint?: V1ProjectsProjectIdUsageGetParametersEndpoint;
    extra?: boolean;
    fillerWords?: boolean;
    intents?: boolean;
    keyterm?: boolean;
    keywords?: boolean;
    language?: boolean;
    measurements?: boolean;
    method?: V1ProjectsProjectIdUsageGetParametersMethod;
    model?: string;
    multichannel?: boolean;
    numerals?: boolean;
    paragraphs?: boolean;
    profanityFilter?: boolean;
    punctuate?: boolean;
    redact?: boolean;
    replace?: boolean;
    sampleRate?: boolean;
    search?: boolean;
    sentiment?: boolean;
    smartFormat?: boolean;
    summarize?: boolean;
    tag?: string;
    topics?: boolean;
    uttSplit?: boolean;
    utterances?: boolean;
    version?: boolean;
  };

  export class Get8Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Get8Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
