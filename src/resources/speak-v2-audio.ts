import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  speakV2AcceptedResponseSchema,
  type SpeakV2AcceptedResponse,
} from "../models/speak-v2-accepted-response.js";
import { speakV2RequestSchema, type SpeakV2Request } from "../models/speak-v2-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  v2SpeakPostParametersBitRateSchema,
  type V2SpeakPostParametersBitRate,
} from "../models/unions/v2-speak-post-parameters-bit-rate.js";
import {
  v2SpeakPostParametersContainerSchema,
  type V2SpeakPostParametersContainer,
} from "../models/unions/v2-speak-post-parameters-container.js";
import {
  v2SpeakPostParametersEncodingSchema,
  type V2SpeakPostParametersEncoding,
} from "../models/unions/v2-speak-post-parameters-encoding.js";
import {
  v2SpeakPostParametersSampleRateSchema,
  type V2SpeakPostParametersSampleRate,
} from "../models/unions/v2-speak-post-parameters-sample-rate.js";
import {
  v2SpeakPostParametersTagSchema,
  type V2SpeakPostParametersTag,
} from "../models/unions/v2-speak-post-parameters-tag.js";
import {
  V1ListenPostParametersCallbackMethod,
  v1ListenPostParametersCallbackMethodSchema,
} from "../models/v1-listen-post-parameters-callback-method.js";
import {
  v2SpeakPostParametersPrioritySchema,
  type V2SpeakPostParametersPriority,
} from "../models/v2-speak-post-parameters-priority.js";
import type { Servers } from "../servers.js";

export class SpeakV2Audio {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Flux Text to Speech (batch)
   *
   * @remarks
   * Synthesize a complete block of text into a single audio response using Deepgram's Flux TTS
   * batch (REST) API. Use this for pre-rendering fixed audio (IVR prompts, notifications,
   * narration) where the whole text is known up front and you don't need incremental playback or
   * interruption.
   *
   * @returns Returns the synthesized audio in the requested encoding as a binary stream. When a
   * `callback` URL is supplied, the request is processed asynchronously and the response body is
   * instead a JSON acknowledgement (Content-Type `application/json`) of the form {"request_id":
   * "..."}, with the audio delivered to the callback URL. Because this endpoint is typed as a
   * binary audio stream, SDK callers that set `callback` receive this JSON acknowledgement through
   * the audio byte iterator as raw bytes and must join the chunks and parse `request_id`
   * themselves.
   *
   * @throws {@link SpeakV2Audio.Generate2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generate2(
    request: SpeakV2Audio.Generate2Request,
    options?: RequestOptions,
  ): ApiPromise<SpeakV2AcceptedResponse, SpeakV2Audio.Generate2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/speak"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "model", value: request.model, schema: s.string() },
          { name: "callback", value: request.callback, schema: s.optional(s.string()) },
          {
            name: "callback_method",
            value: request.callbackMethod,
            schema: s.defaulted(
              v1ListenPostParametersCallbackMethodSchema,
              V1ListenPostParametersCallbackMethod.Post,
            ),
          },
          { name: "mip_opt_out", value: request.mipOptOut, schema: s.defaulted(s.boolean(), false) },
          {
            name: "tag",
            value: request.tag,
            schema: s.optional(s.lazy(() => v2SpeakPostParametersTagSchema)),
          },
          {
            name: "bit_rate",
            value: request.bitRate,
            schema: s.optional(s.lazy(() => v2SpeakPostParametersBitRateSchema)),
          },
          {
            name: "container",
            value: request.container,
            schema: s.optional(s.lazy(() => v2SpeakPostParametersContainerSchema)),
          },
          {
            name: "encoding",
            value: request.encoding,
            schema: s.optional(s.lazy(() => v2SpeakPostParametersEncodingSchema)),
          },
          {
            name: "sample_rate",
            value: request.sampleRate,
            schema: s.optional(s.lazy(() => v2SpeakPostParametersSampleRateSchema)),
          },
          {
            name: "priority",
            value: request.priority,
            schema: s.optional(s.lazy(() => v2SpeakPostParametersPrioritySchema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => speakV2RequestSchema)) },
      },
      {
        success: { kind: "json", schema: speakV2AcceptedResponseSchema },
        errorFactory: SpeakV2Audio.Generate2Error,
      },
      options,
    );
  }
}

export namespace SpeakV2Audio {
  export type Generate2Request = {
    /**
     * Flux TTS model used to synthesize the submitted text, in the form `flux-{voice}-{language}`
     * (for example, `flux-alexis-en`). Required; unlike the v1 (Aura) endpoint there is no default
     * and only flux models are accepted. English-only at launch.
     */
    model: string;
    /** URL to which we'll make the callback request */
    callback?: string;
    /**
     * HTTP method by which the callback request will be made
     *
     * @default V1ListenPostParametersCallbackMethod.Post
     */
    callbackMethod?: V1ListenPostParametersCallbackMethod;
    /**
     * Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing
     * impacts before setting this to true. https://dpgr.am/deepgram-mip
     *
     * @default false
     */
    mipOptOut?: boolean;
    /** Label your requests for the purpose of identification during usage reporting */
    tag?: V2SpeakPostParametersTag;
    /**
     * The bitrate of the audio in bits per second. Choose from predefined ranges or specific values
     * based on the encoding type.
     */
    bitRate?: V2SpeakPostParametersBitRate;
    /**
     * Container specifies the file format wrapper for the output audio. The available options
     * depend on the encoding type.
     */
    container?: V2SpeakPostParametersContainer;
    /** Encoding allows you to specify the expected encoding of your audio output */
    encoding?: V2SpeakPostParametersEncoding;
    /**
     * Sample Rate specifies the sample rate for the output audio. Based on the encoding, different
     * sample rates are supported. For some encodings, the sample rate is not configurable
     */
    sampleRate?: V2SpeakPostParametersSampleRate;
    /**
     * Processing priority for asynchronous (callback) requests. The only supported value is low.
     */
    priority?: V2SpeakPostParametersPriority;
    /** Transform text to speech */
    body?: SpeakV2Request;
  };

  export class Generate2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Generate2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
