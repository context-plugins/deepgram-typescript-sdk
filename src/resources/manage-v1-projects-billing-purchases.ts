import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listProjectPurchasesV1ResponseSchema,
  type ListProjectPurchasesV1Response,
} from "../models/list-project-purchases-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsBillingPurchases {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  list16(
    request: ManageV1ProjectsBillingPurchases.List16Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectPurchasesV1Response, ManageV1ProjectsBillingPurchases.List16Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/purchases"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.number(), 10) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectPurchasesV1ResponseSchema },
        errorFactory: ManageV1ProjectsBillingPurchases.List16Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsBillingPurchases {
  export type List16Request = {
    projectId: string;
    limit?: number;
  };

  export class List16Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List16Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
