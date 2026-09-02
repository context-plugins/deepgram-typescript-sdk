import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { grantV1RequestSchema, type GrantV1Request } from "../models/grant-v1-request.js";
import { grantV1ResponseSchema, type GrantV1Response } from "../models/grant-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import type { Servers } from "../servers.js";

export class AuthV1Tokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  grant(
    request: AuthV1Tokens.GrantRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantV1Response, AuthV1Tokens.GrantError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/auth/grant"),
        auth: this.#auth.apiKeyAuth,
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => grantV1RequestSchema)) },
      },
      {
        success: { kind: "json", schema: grantV1ResponseSchema },
        errorFactory: AuthV1Tokens.GrantError,
      },
      options,
    );
  }
}

export namespace AuthV1Tokens {
  export type GrantRequest = {
    body?: GrantV1Request;
  };

  export class GrantError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<GrantError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
