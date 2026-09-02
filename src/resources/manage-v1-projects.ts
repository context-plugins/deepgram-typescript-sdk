import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  deleteProjectV1ResponseSchema,
  type DeleteProjectV1Response,
} from "../models/delete-project-v1-response.js";
import { getProjectV1ResponseSchema, type GetProjectV1Response } from "../models/get-project-v1-response.js";
import {
  leaveProjectV1ResponseSchema,
  type LeaveProjectV1Response,
} from "../models/leave-project-v1-response.js";
import {
  listProjectsV1ResponseSchema,
  type ListProjectsV1Response,
} from "../models/list-projects-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  updateProjectV1RequestSchema,
  type UpdateProjectV1Request,
} from "../models/update-project-v1-request.js";
import {
  updateProjectV1ResponseSchema,
  type UpdateProjectV1Response,
} from "../models/update-project-v1-response.js";
import type { Servers } from "../servers.js";

export class ManageV1Projects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  delete3(
    request: ManageV1Projects.Delete3Request,
    options?: RequestOptions,
  ): ApiPromise<DeleteProjectV1Response, ManageV1Projects.Delete3Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/v1/projects/{project_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteProjectV1ResponseSchema },
        errorFactory: ManageV1Projects.Delete3Error,
      },
      options,
    );
  }

  get3(
    request: ManageV1Projects.Get3Request,
    options?: RequestOptions,
  ): ApiPromise<GetProjectV1Response, ManageV1Projects.Get3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 10) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProjectV1ResponseSchema },
        errorFactory: ManageV1Projects.Get3Error,
      },
      options,
    );
  }

  leave(
    request: ManageV1Projects.LeaveRequest,
    options?: RequestOptions,
  ): ApiPromise<LeaveProjectV1Response, ManageV1Projects.LeaveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/v1/projects/{project_id}/leave"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaveProjectV1ResponseSchema },
        errorFactory: ManageV1Projects.LeaveError,
      },
      options,
    );
  }

  list4(options?: RequestOptions): ApiPromise<ListProjectsV1Response, ManageV1Projects.List4Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectsV1ResponseSchema },
        errorFactory: ManageV1Projects.List4Error,
      },
      options,
    );
  }

  update3(
    request: ManageV1Projects.Update3Request,
    options?: RequestOptions,
  ): ApiPromise<UpdateProjectV1Response, ManageV1Projects.Update3Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/v1/projects/{project_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateProjectV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateProjectV1ResponseSchema },
        errorFactory: ManageV1Projects.Update3Error,
      },
      options,
    );
  }
}

export namespace ManageV1Projects {
  export type Delete3Request = {
    projectId: string;
  };

  export class Delete3Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Delete3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get3Request = {
    projectId: string;
    limit?: number;
    page?: number;
  };

  export class Get3Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Get3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type LeaveRequest = {
    projectId: string;
  };

  export class LeaveError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<LeaveError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class List4Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Update3Request = {
    projectId: string;
    body?: UpdateProjectV1Request;
  };

  export class Update3Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Update3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
