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

export class ManageV1ProjectsModels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a Project Model
   *
   * @remarks
   * Returns metadata for a specific model
   *
   * @returns A model object that can be either STT or TTS
   *
   * @throws {@link ManageV1ProjectsModels.Get4Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get4(
    request: ManageV1ProjectsModels.Get4Request,
    options?: RequestOptions,
  ): ApiPromise<GetModelV1Response, ManageV1ProjectsModels.Get4Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/models/{model_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "model_id", value: request.modelId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getModelV1ResponseSchema },
        errorFactory: ManageV1ProjectsModels.Get4Error,
      },
      options,
    );
  }

  /**
   * List Project Models
   *
   * @remarks
   * Returns metadata on all the latest models that a specific project has access to, including
   * non-public models
   *
   * @returns A list of models
   *
   * @throws {@link ManageV1ProjectsModels.List5Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list5(
    request: ManageV1ProjectsModels.List5Request,
    options?: RequestOptions,
  ): ApiPromise<ListModelsV1Response, ManageV1ProjectsModels.List5Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/models"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "include_outdated", value: request.includeOutdated, schema: s.optional(s.boolean()) },
        ],
        headers: [],
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
    /** The unique identifier of the project */
    projectId: string;
    /** The specific UUID of the model */
    modelId: string;
  };

  export class Get4Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Get4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List5Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** returns non-latest versions of models */
    includeOutdated?: boolean;
  };

  export class List5Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List5Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
