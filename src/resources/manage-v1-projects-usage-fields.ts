import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  usageFieldsV1ResponseSchema,
  type UsageFieldsV1Response,
} from "../models/usage-fields-v1-response.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsUsageFields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Project Usage Fields
   *
   * @remarks
   * Lists the features, models, tags, languages, and processing method used for requests in the
   * specified project
   *
   * @returns A list of fields for a specific project
   *
   * @throws {@link ManageV1ProjectsUsageFields.List12Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list12(
    request: ManageV1ProjectsUsageFields.List12Request,
    options?: RequestOptions,
  ): ApiPromise<UsageFieldsV1Response, ManageV1ProjectsUsageFields.List12Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/usage/fields"),
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
        success: { kind: "json", schema: usageFieldsV1ResponseSchema },
        errorFactory: ManageV1ProjectsUsageFields.List12Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsUsageFields {
  export type List12Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** Start date of the requested date range. Format accepted is YYYY-MM-DD */
    start?: string;
    /** End date of the requested date range. Format accepted is YYYY-MM-DD */
    end?: string;
  };

  export class List12Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List12Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
