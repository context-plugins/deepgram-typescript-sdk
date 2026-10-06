import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { speakV1RequestSchema, type SpeakV1Request } from "../models/speak-v1-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  v1SpeakPostParametersBitRateSchema,
  type V1SpeakPostParametersBitRate,
} from "../models/unions/v1-speak-post-parameters-bit-rate.js";
import {
  v1SpeakPostParametersContainerSchema,
  type V1SpeakPostParametersContainer,
} from "../models/unions/v1-speak-post-parameters-container.js";
import {
  v1SpeakPostParametersEncodingSchema,
  type V1SpeakPostParametersEncoding,
} from "../models/unions/v1-speak-post-parameters-encoding.js";
import {
  v1SpeakPostParametersSampleRateSchema,
  type V1SpeakPostParametersSampleRate,
} from "../models/unions/v1-speak-post-parameters-sample-rate.js";
import {
  v1SpeakPostParametersTagSchema,
  type V1SpeakPostParametersTag,
} from "../models/unions/v1-speak-post-parameters-tag.js";
import {
  V1ListenPostParametersCallbackMethod,
  v1ListenPostParametersCallbackMethodSchema,
} from "../models/v1-listen-post-parameters-callback-method.js";
import {
  V1SpeakPostParametersModel,
  v1SpeakPostParametersModelSchema,
} from "../models/v1-speak-post-parameters-model.js";
import type { Servers } from "../servers.js";

export class SpeakV1Audio {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Text to Speech transformation
   *
   * @remarks
   * Convert text into natural-sounding speech using Deepgram's TTS REST API
   *
   * @returns Successful text-to-speech transformation
   *
   * @throws {@link SpeakV1Audio.GenerateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generate(
    request: SpeakV1Audio.GenerateRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, SpeakV1Audio.GenerateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/speak"),
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
          { name: "mip_opt_out", value: request.mipOptOut, schema: s.defaulted(s.boolean(), false) },
          {
            name: "tag",
            value: request.tag,
            schema: s.optional(s.lazy(() => v1SpeakPostParametersTagSchema)),
          },
          {
            name: "bit_rate",
            value: request.bitRate,
            schema: s.optional(s.lazy(() => v1SpeakPostParametersBitRateSchema)),
          },
          {
            name: "container",
            value: request.container,
            schema: s.optional(s.lazy(() => v1SpeakPostParametersContainerSchema)),
          },
          {
            name: "encoding",
            value: request.encoding,
            schema: s.optional(s.lazy(() => v1SpeakPostParametersEncodingSchema)),
          },
          {
            name: "model",
            value: request.model,
            schema: s.defaulted(v1SpeakPostParametersModelSchema, V1SpeakPostParametersModel.AuraAsteriaEn),
          },
          {
            name: "sample_rate",
            value: request.sampleRate,
            schema: s.optional(s.lazy(() => v1SpeakPostParametersSampleRateSchema)),
          },
          { name: "speed", value: request.speed, schema: s.defaulted(s.float64(), 1) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => speakV1RequestSchema)) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: SpeakV1Audio.GenerateError,
      },
      options,
    );
  }
}

export namespace SpeakV1Audio {
  export type GenerateRequest = {
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
    tag?: V1SpeakPostParametersTag;
    /**
     * The bitrate of the audio in bits per second. Choose from predefined ranges or specific values
     * based on the encoding type.
     */
    bitRate?: V1SpeakPostParametersBitRate;
    /**
     * Container specifies the file format wrapper for the output audio. The available options
     * depend on the encoding type.
     */
    container?: V1SpeakPostParametersContainer;
    /** Encoding allows you to specify the expected encoding of your audio output */
    encoding?: V1SpeakPostParametersEncoding;
    /** AI model used to process submitted text @default V1SpeakPostParametersModel.AuraAsteriaEn */
    model?: V1SpeakPostParametersModel;
    /**
     * Sample Rate specifies the sample rate for the output audio. Based on the encoding, different
     * sample rates are supported. For some encodings, the sample rate is not configurable
     */
    sampleRate?: V1SpeakPostParametersSampleRate;
    /**
     * Speaking rate multiplier that adjusts the pace of generated speech while preserving natural
     * prosody and voice quality. Not yet supported in all languages.
     *
     * @default 1
     */
    speed?: number;
    /** Transform text to speech */
    body?: SpeakV1Request;
  };

  export class GenerateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GenerateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
