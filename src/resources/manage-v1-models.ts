import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  get5(
    request: ManageV1Models.Get5Request,
    options?: RequestOptions,
  ): ApiPromise<GetModelV1Response, ManageV1Models.Get5Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/models/{model_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getModelV1ResponseSchema },
        errorFactory: ManageV1Models.Get5Error,
      },
      options,
    );
  }

  list6(
    request: ManageV1Models.List6Request,
    options?: RequestOptions,
  ): ApiPromise<ListModelsV1Response, ManageV1Models.List6Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/models"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "include_outdated", value: request.includeOutdated, schema: s.optional(s.boolean()) },
        ],
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
    modelId: string;
  };

  export class Get5Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Get5Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List6Request = {
    includeOutdated?: boolean;
  };

  export class List6Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List6Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
