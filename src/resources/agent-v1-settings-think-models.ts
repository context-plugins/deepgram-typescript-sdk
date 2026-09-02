import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  list(
    options?: RequestOptions,
  ): ApiPromise<AgentThinkModelsV1Response, AgentV1SettingsThinkModels.ListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/agent/settings/think/models"),
        auth: this.#auth.apiKeyAuth,
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
  export class ListError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<ListError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
