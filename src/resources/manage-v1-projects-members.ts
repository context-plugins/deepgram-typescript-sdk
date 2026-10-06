import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  deleteProjectMemberV1ResponseSchema,
  type DeleteProjectMemberV1Response,
} from "../models/delete-project-member-v1-response.js";
import {
  listProjectMembersV1ResponseSchema,
  type ListProjectMembersV1Response,
} from "../models/list-project-members-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsMembers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a Project Member
   *
   * @remarks
   * Removes a member from the project using their unique member ID
   *
   * @returns Delete the specific member from the project
   *
   * @throws {@link ManageV1ProjectsMembers.Delete5Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete5(
    request: ManageV1ProjectsMembers.Delete5Request,
    options?: RequestOptions,
  ): ApiPromise<DeleteProjectMemberV1Response, ManageV1ProjectsMembers.Delete5Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/members/{member_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "member_id", value: request.memberId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteProjectMemberV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembers.Delete5Error,
      },
      options,
    );
  }

  /**
   * List Project Members
   *
   * @remarks
   * Retrieves a list of members for a given project
   *
   * @returns A list of members for a given project
   *
   * @throws {@link ManageV1ProjectsMembers.List8Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list8(
    request: ManageV1ProjectsMembers.List8Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectMembersV1Response, ManageV1ProjectsMembers.List8Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/members"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectMembersV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembers.List8Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsMembers {
  export type Delete5Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the Member */
    memberId: string;
  };

  export class Delete5Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Delete5Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List8Request = {
    /** The unique identifier of the project */
    projectId: string;
  };

  export class List8Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List8Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
