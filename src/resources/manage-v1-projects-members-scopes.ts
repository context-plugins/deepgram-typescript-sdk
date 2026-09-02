import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  list9(
    request: ManageV1ProjectsMembersScopes.List9Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectMemberScopesV1Response, ManageV1ProjectsMembersScopes.List9Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/members/{member_id}/scopes"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "member_id", value: request.memberId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectMemberScopesV1ResponseSchema },
        errorFactory: ManageV1ProjectsMembersScopes.List9Error,
      },
      options,
    );
  }

  update4(
    request: ManageV1ProjectsMembersScopes.Update4Request,
    options?: RequestOptions,
  ): ApiPromise<UpdateProjectMemberScopesV1Response, ManageV1ProjectsMembersScopes.Update4Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/v1/projects/{project_id}/members/{member_id}/scopes"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "member_id", value: request.memberId, schema: s.string() },
        ],
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
    projectId: string;
    memberId: string;
  };

  export class List9Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List9Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Update4Request = {
    projectId: string;
    memberId: string;
    body?: UpdateProjectMemberScopesV1Request;
  };

  export class Update4Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Update4Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
