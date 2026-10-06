import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Token-based Authentication
   *
   * @remarks
   * Generates a temporary JSON Web Token (JWT) with a 30-second (by default) TTL and usage::write
   * permission for core voice APIs, requiring an API key with Member or higher authorization.
   * Tokens created with this endpoint will not work with the Manage APIs.
   *
   * @returns Grant response
   *
   * @throws {@link AuthV1Tokens.GrantError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  grant(
    request: AuthV1Tokens.GrantRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantV1Response, AuthV1Tokens.GrantError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/auth/grant"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Time to live settings */
    body?: GrantV1Request;
  };

  export class GrantError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GrantError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
