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

export class ManageV1ProjectsModels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  get4(
    request: ManageV1ProjectsModels.Get4Request,
    options?: RequestOptions,
  ): ApiPromise<GetModelV1Response, ManageV1ProjectsModels.Get4Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/models/{model_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "model_id", value: request.modelId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getModelV1ResponseSchema },
        errorFactory: ManageV1ProjectsModels.Get4Error,
      },
      options,
    );
  }

  list5(
    request: ManageV1ProjectsModels.List5Request,
    options?: RequestOptions,
  ): ApiPromise<ListModelsV1Response, ManageV1ProjectsModels.List5Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/models"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "include_outdated", value: request.includeOutdated, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listModelsV1ResponseSchema },
        errorFactory: ManageV1ProjectsModels.List5Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsModels {
  export type Get4Request = {
    projectId: string;
    modelId: string;
  };

  export class Get4Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Get4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List5Request = {
    projectId: string;
    includeOutdated?: boolean;
  };

  export class List5Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List5Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
