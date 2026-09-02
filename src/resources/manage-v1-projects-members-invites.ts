import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  create4(
    request: ManageV1ProjectsMembersInvites.Create4Request,
    options?: RequestOptions,
  ): ApiPromise<CreateProjectInviteV1Response, ManageV1ProjectsMembersInvites.Create4Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/projects/{project_id}/invites"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
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

  delete6(
    request: ManageV1ProjectsMembersInvites.Delete6Request,
    options?: RequestOptions,
  ): ApiPromise<DeleteProjectInviteV1Response, ManageV1ProjectsMembersInvites.Delete6Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/v1/projects/{project_id}/invites/{email}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "email", value: request.email, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteProjectInviteV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembersInvites.Delete6Error,
      },
      options,
    );
  }

  list10(
    request: ManageV1ProjectsMembersInvites.List10Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectInvitesV1Response, ManageV1ProjectsMembersInvites.List10Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/invites"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
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
    projectId: string;
    body?: CreateProjectInviteV1Request;
  };

  export class Create4Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Create4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Delete6Request = {
    projectId: string;
    email: string;
  };

  export class Delete6Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Delete6Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List10Request = {
    projectId: string;
  };

  export class List10Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List10Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
