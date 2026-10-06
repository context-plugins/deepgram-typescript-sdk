import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  usageBreakdownV1ResponseSchema,
  type UsageBreakdownV1Response,
} from "../models/usage-breakdown-v1-response.js";
import {
  v1ProjectsProjectIdUsageBreakdownGetParametersDeploymentSchema,
  type V1ProjectsProjectIdUsageBreakdownGetParametersDeployment,
} from "../models/v1-projects-project-id-usage-breakdown-get-parameters-deployment.js";
import {
  v1ProjectsProjectIdUsageBreakdownGetParametersEndpointSchema,
  type V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint,
} from "../models/v1-projects-project-id-usage-breakdown-get-parameters-endpoint.js";
import {
  v1ProjectsProjectIdUsageBreakdownGetParametersGroupingSchema,
  type V1ProjectsProjectIdUsageBreakdownGetParametersGrouping,
} from "../models/v1-projects-project-id-usage-breakdown-get-parameters-grouping.js";
import {
  v1ProjectsProjectIdUsageBreakdownGetParametersMethodSchema,
  type V1ProjectsProjectIdUsageBreakdownGetParametersMethod,
} from "../models/v1-projects-project-id-usage-breakdown-get-parameters-method.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsUsageBreakdown {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Project Usage Breakdown
   *
   * @remarks
   * Retrieves the usage breakdown for a specific project, with various filter options by API
   * feature or by groupings. Setting a feature (e.g. diarize) to true includes requests that used
   * that feature, while false excludes requests that used it. Multiple true filters are combined
   * with OR logic, while false filters use AND logic.
   *
   * @returns Usage breakdown response
   *
   * @throws {@link ManageV1ProjectsUsageBreakdown.Get9Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get9(
    request: ManageV1ProjectsUsageBreakdown.Get9Request,
    options?: RequestOptions,
  ): ApiPromise<UsageBreakdownV1Response, ManageV1ProjectsUsageBreakdown.Get9Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/usage/breakdown"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
          {
            name: "grouping",
            value: request.grouping,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdUsageBreakdownGetParametersGroupingSchema)),
          },
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
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdUsageBreakdownGetParametersDeploymentSchema)),
          },
          { name: "detect_entities", value: request.detectEntities, schema: s.optional(s.boolean()) },
          { name: "detect_language", value: request.detectLanguage, schema: s.optional(s.boolean()) },
          { name: "diarize", value: request.diarize, schema: s.optional(s.boolean()) },
          { name: "dictation", value: request.dictation, schema: s.optional(s.boolean()) },
          { name: "encoding", value: request.encoding, schema: s.optional(s.boolean()) },
          {
            name: "endpoint",
            value: request.endpoint,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdUsageBreakdownGetParametersEndpointSchema)),
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
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdUsageBreakdownGetParametersMethodSchema)),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageBreakdownV1ResponseSchema },
        errorFactory: ManageV1ProjectsUsageBreakdown.Get9Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsUsageBreakdown {
  export type Get9Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** Start date of the requested date range. Format accepted is YYYY-MM-DD */
    start?: string;
    /** End date of the requested date range. Format accepted is YYYY-MM-DD */
    end?: string;
    /** Common usage grouping parameters */
    grouping?: V1ProjectsProjectIdUsageBreakdownGetParametersGrouping;
    /** Filter for requests where a specific accessor was used */
    accessor?: string;
    /** Filter for requests where alternatives were used */
    alternatives?: boolean;
    /** Filter for requests where callback method was used */
    callbackMethod?: boolean;
    /** Filter for requests where callback was used */
    callback?: boolean;
    /** Filter for requests where channels were used */
    channels?: boolean;
    /** Filter for requests where custom intent mode was used */
    customIntentMode?: boolean;
    /** Filter for requests where custom intent was used */
    customIntent?: boolean;
    /** Filter for requests where custom topic mode was used */
    customTopicMode?: boolean;
    /** Filter for requests where custom topic was used */
    customTopic?: boolean;
    /** Filter for requests where a specific deployment was used */
    deployment?: V1ProjectsProjectIdUsageBreakdownGetParametersDeployment;
    /** Filter for requests where detect entities was used */
    detectEntities?: boolean;
    /** Filter for requests where detect language was used */
    detectLanguage?: boolean;
    /** Filter for requests where diarize was used */
    diarize?: boolean;
    /** Filter for requests where dictation was used */
    dictation?: boolean;
    /** Filter for requests where encoding was used */
    encoding?: boolean;
    /** Filter for requests where a specific endpoint was used */
    endpoint?: V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint;
    /** Filter for requests where extra was used */
    extra?: boolean;
    /** Filter for requests where filler words was used */
    fillerWords?: boolean;
    /** Filter for requests where intents was used */
    intents?: boolean;
    /** Filter for requests where keyterm was used */
    keyterm?: boolean;
    /** Filter for requests where keywords was used */
    keywords?: boolean;
    /** Filter for requests where language was used */
    language?: boolean;
    /** Filter for requests where measurements were used */
    measurements?: boolean;
    /** Filter for requests where a specific method was used */
    method?: V1ProjectsProjectIdUsageBreakdownGetParametersMethod;
    /** Filter for requests where a specific model uuid was used */
    model?: string;
    /** Filter for requests where multichannel was used */
    multichannel?: boolean;
    /** Filter for requests where numerals were used */
    numerals?: boolean;
    /** Filter for requests where paragraphs were used */
    paragraphs?: boolean;
    /** Filter for requests where profanity filter was used */
    profanityFilter?: boolean;
    /** Filter for requests where punctuate was used */
    punctuate?: boolean;
    /** Filter for requests where redact was used */
    redact?: boolean;
    /** Filter for requests where replace was used */
    replace?: boolean;
    /** Filter for requests where sample rate was used */
    sampleRate?: boolean;
    /** Filter for requests where search was used */
    search?: boolean;
    /** Filter for requests where sentiment was used */
    sentiment?: boolean;
    /** Filter for requests where smart format was used */
    smartFormat?: boolean;
    /** Filter for requests where summarize was used */
    summarize?: boolean;
    /** Filter for requests where a specific tag was used */
    tag?: string;
    /** Filter for requests where topics was used */
    topics?: boolean;
    /** Filter for requests where utt split was used */
    uttSplit?: boolean;
    /** Filter for requests where utterances was used */
    utterances?: boolean;
    /** Filter for requests where version was used */
    version?: boolean;
  };

  export class Get9Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Get9Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
