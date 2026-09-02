import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  delete5(
    request: ManageV1ProjectsMembers.Delete5Request,
    options?: RequestOptions,
  ): ApiPromise<DeleteProjectMemberV1Response, ManageV1ProjectsMembers.Delete5Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/v1/projects/{project_id}/members/{member_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "member_id", value: request.memberId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteProjectMemberV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembers.Delete5Error,
      },
      options,
    );
  }

  list8(
    request: ManageV1ProjectsMembers.List8Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectMembersV1Response, ManageV1ProjectsMembers.List8Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/members"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
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
    projectId: string;
    memberId: string;
  };

  export class Delete5Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Delete5Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List8Request = {
    projectId: string;
  };

  export class List8Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List8Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
