import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  generate(
    request: SpeakV1Audio.GenerateRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, SpeakV1Audio.GenerateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/speak"),
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
          { name: "speed", value: request.speed, schema: s.defaulted(s.number(), 1) },
        ],
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
    callback?: string;
    callbackMethod?: V1ListenPostParametersCallbackMethod;
    mipOptOut?: boolean;
    tag?: V1SpeakPostParametersTag;
    bitRate?: V1SpeakPostParametersBitRate;
    container?: V1SpeakPostParametersContainer;
    encoding?: V1SpeakPostParametersEncoding;
    model?: V1SpeakPostParametersModel;
    sampleRate?: V1SpeakPostParametersSampleRate;
    speed?: number;
    body?: SpeakV1Request;
  };

  export class GenerateError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<GenerateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
