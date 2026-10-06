import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { listModelsV1ResponseSchema, type ListModelsV1Response } from "../models/list-models-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import { getModelV1ResponseSchema, type GetModelV1Response } from "../models/unions/get-model-v1-response.js";
import type { Servers } from "../servers.js";

export class ManageV1Models {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a specific Model
   *
   * @remarks
   * Returns metadata for a specific public model
   *
   * @returns A model object that can be either STT or TTS
   *
   * @throws {@link ManageV1Models.Get5Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get5(
    request: ManageV1Models.Get5Request,
    options?: RequestOptions,
  ): ApiPromise<GetModelV1Response, ManageV1Models.Get5Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/models/{model_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getModelV1ResponseSchema },
        errorFactory: ManageV1Models.Get5Error,
      },
      options,
    );
  }

  /**
   * List Models
   *
   * @remarks
   * Returns metadata on all the latest public models. To retrieve custom models, use Get Project
   * Models.
   *
   * @returns A list of models
   *
   * @throws {@link ManageV1Models.List6Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list6(
    request: ManageV1Models.List6Request,
    options?: RequestOptions,
  ): ApiPromise<ListModelsV1Response, ManageV1Models.List6Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/models"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "include_outdated", value: request.includeOutdated, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listModelsV1ResponseSchema },
        errorFactory: ManageV1Models.List6Error,
      },
      options,
    );
  }
}

export namespace ManageV1Models {
  export type Get5Request = {
    /** The specific UUID of the model */
    modelId: string;
  };

  export class Get5Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Get5Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List6Request = {
    /** returns non-latest versions of models */
    includeOutdated?: boolean;
  };

  export class List6Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List6Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
