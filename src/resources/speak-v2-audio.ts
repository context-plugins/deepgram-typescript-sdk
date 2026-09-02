import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  generate2(
    request: SpeakV2Audio.Generate2Request,
    options?: RequestOptions,
  ): ApiPromise<SpeakV2AcceptedResponse, SpeakV2Audio.Generate2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v2/speak"),
        auth: this.#auth.apiKeyAuth,
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
    model: string;
    callback?: string;
    callbackMethod?: V1ListenPostParametersCallbackMethod;
    mipOptOut?: boolean;
    tag?: V2SpeakPostParametersTag;
    bitRate?: V2SpeakPostParametersBitRate;
    container?: V2SpeakPostParametersContainer;
    encoding?: V2SpeakPostParametersEncoding;
    sampleRate?: V2SpeakPostParametersSampleRate;
    priority?: V2SpeakPostParametersPriority;
    body?: SpeakV2Request;
  };

  export class Generate2Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Generate2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
