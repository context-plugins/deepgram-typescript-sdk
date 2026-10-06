import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import {
  agentThinkModelsV1ResponseSchema,
  type AgentThinkModelsV1Response,
} from "../models/agent-think-models-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import type { Servers } from "../servers.js";

export class AgentV1SettingsThinkModels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Agent Think Models
   *
   * @remarks
   * Retrieves the available think models that can be used for AI agent processing
   *
   * @returns List of available think models
   *
   * @throws {@link AgentV1SettingsThinkModels.ListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list(
    options?: RequestOptions,
  ): ApiPromise<AgentThinkModelsV1Response, AgentV1SettingsThinkModels.ListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/agent/settings/think/models"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentThinkModelsV1ResponseSchema },
        errorFactory: AgentV1SettingsThinkModels.ListError,
      },
      options,
    );
  }
}

export namespace AgentV1SettingsThinkModels {
  export class ListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
