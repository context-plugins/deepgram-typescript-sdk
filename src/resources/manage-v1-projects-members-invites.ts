import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createProjectInviteV1RequestSchema,
  type CreateProjectInviteV1Request,
} from "../models/create-project-invite-v1-request.js";
import {
  createProjectInviteV1ResponseSchema,
  type CreateProjectInviteV1Response,
} from "../models/create-project-invite-v1-response.js";
import {
  deleteProjectInviteV1ResponseSchema,
  type DeleteProjectInviteV1Response,
} from "../models/delete-project-invite-v1-response.js";
import {
  listProjectInvitesV1ResponseSchema,
  type ListProjectInvitesV1Response,
} from "../models/list-project-invites-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsMembersInvites {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Project Invite
   *
   * @remarks
   * Generates an invite for a specific project
   *
   * @returns The invite was successfully generated
   *
   * @throws {@link ManageV1ProjectsMembersInvites.Create4Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create4(
    request: ManageV1ProjectsMembersInvites.Create4Request,
    options?: RequestOptions,
  ): ApiPromise<CreateProjectInviteV1Response, ManageV1ProjectsMembersInvites.Create4Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/invites"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createProjectInviteV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createProjectInviteV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembersInvites.Create4Error,
      },
      options,
    );
  }

  /**
   * Delete a Project Invite
   *
   * @remarks
   * Deletes an invite for a specific project
   *
   * @returns The invite was successfully deleted
   *
   * @throws {@link ManageV1ProjectsMembersInvites.Delete6Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete6(
    request: ManageV1ProjectsMembersInvites.Delete6Request,
    options?: RequestOptions,
  ): ApiPromise<DeleteProjectInviteV1Response, ManageV1ProjectsMembersInvites.Delete6Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/invites/{email}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "email", value: request.email, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteProjectInviteV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembersInvites.Delete6Error,
      },
      options,
    );
  }

  /**
   * List Project Invites
   *
   * @remarks
   * Generates a list of invites for a specific project
   *
   * @returns A list of invites for a specific project
   *
   * @throws {@link ManageV1ProjectsMembersInvites.List10Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list10(
    request: ManageV1ProjectsMembersInvites.List10Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectInvitesV1Response, ManageV1ProjectsMembersInvites.List10Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/invites"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectInvitesV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembersInvites.List10Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsMembersInvites {
  export type Create4Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** email to invite to the project */
    body?: CreateProjectInviteV1Request;
  };

  export class Create4Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Create4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Delete6Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The email address of the member */
    email: string;
  };

  export class Delete6Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Delete6Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List10Request = {
    /** The unique identifier of the project */
    projectId: string;
  };

  export class List10Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List10Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
