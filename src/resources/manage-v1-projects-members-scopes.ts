import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listProjectMemberScopesV1ResponseSchema,
  type ListProjectMemberScopesV1Response,
} from "../models/list-project-member-scopes-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  updateProjectMemberScopesV1RequestSchema,
  type UpdateProjectMemberScopesV1Request,
} from "../models/update-project-member-scopes-v1-request.js";
import {
  updateProjectMemberScopesV1ResponseSchema,
  type UpdateProjectMemberScopesV1Response,
} from "../models/update-project-member-scopes-v1-response.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsMembersScopes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Project Member Scopes
   *
   * @remarks
   * Retrieves a list of scopes for a specific member
   *
   * @returns A list of scopes for a specific member
   *
   * @throws {@link ManageV1ProjectsMembersScopes.List9Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list9(
    request: ManageV1ProjectsMembersScopes.List9Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectMemberScopesV1Response, ManageV1ProjectsMembersScopes.List9Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/members/{member_id}/scopes"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "member_id", value: request.memberId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectMemberScopesV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembersScopes.List9Error,
      },
      options,
    );
  }

  /**
   * Update Project Member Scopes
   *
   * @remarks
   * Updates the scopes for a specific member
   *
   * @returns Updated the scopes for a specific member
   *
   * @throws {@link ManageV1ProjectsMembersScopes.Update4Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update4(
    request: ManageV1ProjectsMembersScopes.Update4Request,
    options?: RequestOptions,
  ): ApiPromise<UpdateProjectMemberScopesV1Response, ManageV1ProjectsMembersScopes.Update4Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/members/{member_id}/scopes"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "member_id", value: request.memberId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateProjectMemberScopesV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateProjectMemberScopesV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembersScopes.Update4Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsMembersScopes {
  export type List9Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the Member */
    memberId: string;
  };

  export class List9Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List9Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Update4Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the Member */
    memberId: string;
    /** A scope to update */
    body?: UpdateProjectMemberScopesV1Request;
  };

  export class Update4Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Update4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
