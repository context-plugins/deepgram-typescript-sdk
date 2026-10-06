import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create an Agent Variable
   *
   * @remarks
   * Creates a new template variable. Variables follow the `DG_<VARIABLE_NAME>` naming format and
   * can substitute any JSON value in an agent configuration.
   *
   * @returns Agent variable created successfully
   *
   * @throws {@link VoiceAgentVariables.Create2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create2(
    request: VoiceAgentVariables.Create2Request,
    options?: RequestOptions,
  ): ApiPromise<AgentVariableV1, VoiceAgentVariables.Create2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agent-variables"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Delete an Agent Variable
   *
   * @remarks
   * Deletes the specified template variable
   *
   * @returns Agent variable deleted
   *
   * @throws {@link VoiceAgentVariables.Delete2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete2(
    request: VoiceAgentVariables.Delete2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, VoiceAgentVariables.Delete2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agent-variables/{variable_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "variable_id", value: request.variableId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: VoiceAgentVariables.Delete2Error,
      },
      options,
    );
  }

  /**
   * Get an Agent Variable
   *
   * @remarks
   * Returns the specified template variable
   *
   * @returns An agent variable
   *
   * @throws {@link VoiceAgentVariables.Get2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get2(
    request: VoiceAgentVariables.Get2Request,
    options?: RequestOptions,
  ): ApiPromise<AgentVariableV1, VoiceAgentVariables.Get2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agent-variables/{variable_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "variable_id", value: request.variableId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentVariableV1Schema },
        errorFactory: VoiceAgentVariables.Get2Error,
      },
      options,
    );
  }

  /**
   * List Agent Variables
   *
   * @remarks
   * Returns all template variables for the specified project
   *
   * @returns A list of agent variables
   *
   * @throws {@link VoiceAgentVariables.List3Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list3(
    request: VoiceAgentVariables.List3Request,
    options?: RequestOptions,
  ): ApiPromise<ListAgentVariablesV1Response, VoiceAgentVariables.List3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agent-variables"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAgentVariablesV1ResponseSchema },
        errorFactory: VoiceAgentVariables.List3Error,
      },
      options,
    );
  }

  /**
   * Update an Agent Variable
   *
   * @remarks
   * Updates the value of an existing template variable
   *
   * @returns Agent variable updated
   *
   * @throws {@link VoiceAgentVariables.Update2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update2(
    request: VoiceAgentVariables.Update2Request,
    options?: RequestOptions,
  ): ApiPromise<AgentVariableV1, VoiceAgentVariables.Update2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agent-variables/{variable_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "variable_id", value: request.variableId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the project */
    projectId: string;
    /** Agent variable details */
    body?: CreateAgentVariableV1Request;
  };

  export class Create2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Create2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Delete2Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the agent variable */
    variableId: string;
  };

  export class Delete2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Delete2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get2Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the agent variable */
    variableId: string;
  };

  export class Get2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Get2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List3Request = {
    /** The unique identifier of the project */
    projectId: string;
  };

  export class List3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List3Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Update2Request = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the agent variable */
    variableId: string;
    /** Updated value for the agent variable */
    body?: UpdateAgentVariableV1Request;
  };

  export class Update2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Update2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
