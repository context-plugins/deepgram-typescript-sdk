import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listBillingFieldsV1ResponseSchema,
  type ListBillingFieldsV1Response,
} from "../models/list-billing-fields-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsBillingFields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Project Billing Fields
   *
   * @remarks
   * Lists the accessors, deployment types, tags, and line items used for billing data in the
   * specified time period. Use this endpoint if you want to filter your results from the Billing
   * Breakdown endpoint and want to know what filters are available.
   *
   * @returns A list of billing fields for a specific project
   *
   * @throws {@link ManageV1ProjectsBillingFields.List15Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list15(
    request: ManageV1ProjectsBillingFields.List15Request,
    options?: RequestOptions,
  ): ApiPromise<ListBillingFieldsV1Response, ManageV1ProjectsBillingFields.List15Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/billing/fields"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBillingFieldsV1ResponseSchema },
        errorFactory: ManageV1ProjectsBillingFields.List15Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsBillingFields {
  export type List15Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** Start date of the requested date range. Format accepted is YYYY-MM-DD */
    start?: string;
    /** End date of the requested date range. Format accepted is YYYY-MM-DD */
    end?: string;
  };

  export class List15Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List15Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
