import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete a Project
   *
   * @remarks
   * Deletes the specified project
   *
   * @returns A project
   *
   * @throws {@link ManageV1Projects.Delete3Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete3(
    request: ManageV1Projects.Delete3Request,
    options?: RequestOptions,
  ): ApiPromise<DeleteProjectV1Response, ManageV1Projects.Delete3Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteProjectV1ResponseSchema },
        errorFactory: ManageV1Projects.Delete3Error,
      },
      options,
    );
  }

  /**
   * Get a Project
   *
   * @remarks
   * Retrieves information about the specified project
   *
   * @returns A project
   *
   * @throws {@link ManageV1Projects.Get3Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get3(
    request: ManageV1Projects.Get3Request,
    options?: RequestOptions,
  ): ApiPromise<GetProjectV1Response, ManageV1Projects.Get3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 10) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProjectV1ResponseSchema },
        errorFactory: ManageV1Projects.Get3Error,
      },
      options,
    );
  }

  /**
   * Leave a Project
   *
   * @remarks
   * Removes the authenticated account from the specific project
   *
   * @returns Successfully removed account from project
   *
   * @throws {@link ManageV1Projects.LeaveError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  leave(
    request: ManageV1Projects.LeaveRequest,
    options?: RequestOptions,
  ): ApiPromise<LeaveProjectV1Response, ManageV1Projects.LeaveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/leave"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaveProjectV1ResponseSchema },
        errorFactory: ManageV1Projects.LeaveError,
      },
      options,
    );
  }

  /**
   * List Projects
   *
   * @remarks
   * Retrieves basic information about the projects associated with the API key
   *
   * @returns A list of projects
   *
   * @throws {@link ManageV1Projects.List4Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list4(options?: RequestOptions): ApiPromise<ListProjectsV1Response, ManageV1Projects.List4Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectsV1ResponseSchema },
        errorFactory: ManageV1Projects.List4Error,
      },
      options,
    );
  }

  /**
   * Update a Project
   *
   * @remarks
   * Updates the name or other properties of an existing project
   *
   * @returns A project
   *
   * @throws {@link ManageV1Projects.Update3Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update3(
    request: ManageV1Projects.Update3Request,
    options?: RequestOptions,
  ): ApiPromise<UpdateProjectV1Response, ManageV1Projects.Update3Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the project */
    projectId: string;
  };

  export class Delete3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Delete3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get3Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** Number of results to return per page. Default 10. Range [1,1000] @default 10 */
    limit?: number;
    /**
     * Navigate and return the results to retrieve specific portions of information of the response
     */
    page?: number;
  };

  export class Get3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Get3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type LeaveRequest = {
    /** The unique identifier of the project */
    projectId: string;
  };

  export class LeaveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<LeaveError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class List4Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Update3Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The name of the project */
    body?: UpdateProjectV1Request;
  };

  export class Update3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Update3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
