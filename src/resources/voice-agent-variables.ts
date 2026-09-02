import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { agentVariableV1Schema, type AgentVariableV1 } from "../models/agent-variable-v1.js";
import {
  createAgentVariableV1RequestSchema,
  type CreateAgentVariableV1Request,
} from "../models/create-agent-variable-v1-request.js";
import {
  listAgentVariablesV1ResponseSchema,
  type ListAgentVariablesV1Response,
} from "../models/list-agent-variables-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  updateAgentVariableV1RequestSchema,
  type UpdateAgentVariableV1Request,
} from "../models/update-agent-variable-v1-request.js";
import type { Servers } from "../servers.js";

export class VoiceAgentVariables {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  create2(
    request: VoiceAgentVariables.Create2Request,
    options?: RequestOptions,
  ): ApiPromise<AgentVariableV1, VoiceAgentVariables.Create2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/projects/{project_id}/agent-variables"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createAgentVariableV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: agentVariableV1Schema },
        errorFactory: VoiceAgentVariables.Create2Error,
      },
      options,
    );
  }

  delete2(
    request: VoiceAgentVariables.Delete2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, VoiceAgentVariables.Delete2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/v1/projects/{project_id}/agent-variables/{variable_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "variable_id", value: request.variableId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: VoiceAgentVariables.Delete2Error,
      },
      options,
    );
  }

  get2(
    request: VoiceAgentVariables.Get2Request,
    options?: RequestOptions,
  ): ApiPromise<AgentVariableV1, VoiceAgentVariables.Get2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/agent-variables/{variable_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "variable_id", value: request.variableId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentVariableV1Schema },
        errorFactory: VoiceAgentVariables.Get2Error,
      },
      options,
    );
  }

  list3(
    request: VoiceAgentVariables.List3Request,
    options?: RequestOptions,
  ): ApiPromise<ListAgentVariablesV1Response, VoiceAgentVariables.List3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/agent-variables"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAgentVariablesV1ResponseSchema },
        errorFactory: VoiceAgentVariables.List3Error,
      },
      options,
    );
  }

  update2(
    request: VoiceAgentVariables.Update2Request,
    options?: RequestOptions,
  ): ApiPromise<AgentVariableV1, VoiceAgentVariables.Update2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/v1/projects/{project_id}/agent-variables/{variable_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "variable_id", value: request.variableId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateAgentVariableV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: agentVariableV1Schema },
        errorFactory: VoiceAgentVariables.Update2Error,
      },
      options,
    );
  }
}

export namespace VoiceAgentVariables {
  export type Create2Request = {
    projectId: string;
    body?: CreateAgentVariableV1Request;
  };

  export class Create2Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Create2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Delete2Request = {
    projectId: string;
    variableId: string;
  };

  export class Delete2Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Delete2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get2Request = {
    projectId: string;
    variableId: string;
  };

  export class Get2Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Get2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List3Request = {
    projectId: string;
  };

  export class List3Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Update2Request = {
    projectId: string;
    variableId: string;
    body?: UpdateAgentVariableV1Request;
  };

  export class Update2Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Update2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
