import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  getProjectBalanceV1ResponseSchema,
  type GetProjectBalanceV1Response,
} from "../models/get-project-balance-v1-response.js";
import {
  listProjectBalancesV1ResponseSchema,
  type ListProjectBalancesV1Response,
} from "../models/list-project-balances-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsBillingBalances {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a Project Balance
   *
   * @remarks
   * Retrieves details about the specified balance
   *
   * @returns A specific balance
   *
   * @throws {@link ManageV1ProjectsBillingBalances.Get10Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get10(
    request: ManageV1ProjectsBillingBalances.Get10Request,
    options?: RequestOptions,
  ): ApiPromise<GetProjectBalanceV1Response, ManageV1ProjectsBillingBalances.Get10Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/balances/{balance_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "balance_id", value: request.balanceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProjectBalanceV1ResponseSchema },
        errorFactory: ManageV1ProjectsBillingBalances.Get10Error,
      },
      options,
    );
  }

  /**
   * Get Project Balances
   *
   * @remarks
   * Generates a list of outstanding balances for the specified project
   *
   * @returns A list of outstanding balances
   *
   * @throws {@link ManageV1ProjectsBillingBalances.List13Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list13(
    request: ManageV1ProjectsBillingBalances.List13Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectBalancesV1Response, ManageV1ProjectsBillingBalances.List13Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/balances"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectBalancesV1ResponseSchema },
        errorFactory: ManageV1ProjectsBillingBalances.List13Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsBillingBalances {
  export type Get10Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the balance */
    balanceId: string;
  };

  export class Get10Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Get10Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List13Request = {
    /** The unique identifier of the project */
    projectId: string;
  };

  export class List13Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List13Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
