import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * List Project Purchases
   *
   * @remarks
   * Returns the original purchased amount on an order transaction
   *
   * @returns A list of purchases for a specific project
   *
   * @throws {@link ManageV1ProjectsBillingPurchases.List16Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list16(
    request: ManageV1ProjectsBillingPurchases.List16Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectPurchasesV1Response, ManageV1ProjectsBillingPurchases.List16Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/purchases"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 10) }],
        headers: [],
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
    /** The unique identifier of the project */
    projectId: string;
    /** Number of results to return per page. Default 10. Range [1,1000] @default 10 */
    limit?: number;
  };

  export class List16Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List16Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
