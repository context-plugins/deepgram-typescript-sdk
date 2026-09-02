import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  list12(
    request: ManageV1ProjectsUsageFields.List12Request,
    options?: RequestOptions,
  ): ApiPromise<UsageFieldsV1Response, ManageV1ProjectsUsageFields.List12Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/usage/fields"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
        ],
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
    projectId: string;
    start?: string;
    end?: string;
  };

  export class List12Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List12Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
