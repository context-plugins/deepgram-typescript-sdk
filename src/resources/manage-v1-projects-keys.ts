import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { createKeyV1ResponseSchema, type CreateKeyV1Response } from "../models/create-key-v1-response.js";
import {
  deleteProjectKeyV1ResponseSchema,
  type DeleteProjectKeyV1Response,
} from "../models/delete-project-key-v1-response.js";
import {
  getProjectKeyV1ResponseSchema,
  type GetProjectKeyV1Response,
} from "../models/get-project-key-v1-response.js";
import {
  listProjectKeysV1ResponseSchema,
  type ListProjectKeysV1Response,
} from "../models/list-project-keys-v1-response.js";
import { createKeyV1RequestSchema, type CreateKeyV1Request } from "../models/unions/create-key-v1-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  v1ProjectsProjectIdKeysGetParametersStatusSchema,
  type V1ProjectsProjectIdKeysGetParametersStatus,
} from "../models/v1-projects-project-id-keys-get-parameters-status.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsKeys {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  create3(
    request: ManageV1ProjectsKeys.Create3Request,
    options?: RequestOptions,
  ): ApiPromise<CreateKeyV1Response, ManageV1ProjectsKeys.Create3Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/projects/{project_id}/keys"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createKeyV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createKeyV1ResponseSchema },
        errorFactory: ManageV1ProjectsKeys.Create3Error,
      },
      options,
    );
  }

  delete4(
    request: ManageV1ProjectsKeys.Delete4Request,
    options?: RequestOptions,
  ): ApiPromise<DeleteProjectKeyV1Response, ManageV1ProjectsKeys.Delete4Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/v1/projects/{project_id}/keys/{key_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "key_id", value: request.keyId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteProjectKeyV1ResponseSchema },
        errorFactory: ManageV1ProjectsKeys.Delete4Error,
      },
      options,
    );
  }

  get6(
    request: ManageV1ProjectsKeys.Get6Request,
    options?: RequestOptions,
  ): ApiPromise<GetProjectKeyV1Response, ManageV1ProjectsKeys.Get6Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/keys/{key_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "key_id", value: request.keyId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProjectKeyV1ResponseSchema },
        errorFactory: ManageV1ProjectsKeys.Get6Error,
      },
      options,
    );
  }

  list7(
    request: ManageV1ProjectsKeys.List7Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectKeysV1Response, ManageV1ProjectsKeys.List7Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/keys"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdKeysGetParametersStatusSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectKeysV1ResponseSchema },
        errorFactory: ManageV1ProjectsKeys.List7Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsKeys {
  export type Create3Request = {
    projectId: string;
    body?: CreateKeyV1Request;
  };

  export class Create3Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Create3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Delete4Request = {
    projectId: string;
    keyId: string;
  };

  export class Delete4Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Delete4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get6Request = {
    projectId: string;
    keyId: string;
  };

  export class Get6Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Get6Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List7Request = {
    projectId: string;
    status?: V1ProjectsProjectIdKeysGetParametersStatus;
  };

  export class List7Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List7Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
