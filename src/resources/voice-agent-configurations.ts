import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentConfigurationV1Schema, type AgentConfigurationV1 } from "../models/agent-configuration-v1.js";
import {
  createAgentConfigurationV1RequestSchema,
  type CreateAgentConfigurationV1Request,
} from "../models/create-agent-configuration-v1-request.js";
import {
  createAgentConfigurationV1ResponseSchema,
  type CreateAgentConfigurationV1Response,
} from "../models/create-agent-configuration-v1-response.js";
import {
  listAgentConfigurationsV1ResponseSchema,
  type ListAgentConfigurationsV1Response,
} from "../models/list-agent-configurations-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  updateAgentMetadataV1RequestSchema,
  type UpdateAgentMetadataV1Request,
} from "../models/update-agent-metadata-v1-request.js";
import type { Servers } from "../servers.js";

export class VoiceAgentConfigurations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an Agent Configuration
   *
   * @remarks
   * Creates a new reusable agent configuration. The `config` field must be a valid JSON string
   * representing the `agent` block of a Settings message. The returned `agent_id` can be passed in
   * place of the full `agent` object in future Settings messages.
   *
   * @returns Agent configuration created successfully
   *
   * @throws {@link VoiceAgentConfigurations.CreateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create(
    request: VoiceAgentConfigurations.CreateRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateAgentConfigurationV1Response, VoiceAgentConfigurations.CreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agents"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createAgentConfigurationV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createAgentConfigurationV1ResponseSchema },
        errorFactory: VoiceAgentConfigurations.CreateError,
      },
      options,
    );
  }

  /**
   * Delete an Agent Configuration
   *
   * @remarks
   * Deletes the specified agent configuration. Deleting an agent configuration can cause a
   * production outage if your service references this agent UUID. Migrate all active sessions to a
   * new configuration before deleting.
   *
   * @returns Agent configuration deleted
   *
   * @throws {@link VoiceAgentConfigurations.DeleteError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete(
    request: VoiceAgentConfigurations.DeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, VoiceAgentConfigurations.DeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agents/{agent_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "agent_id", value: request.agentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: VoiceAgentConfigurations.DeleteError,
      },
      options,
    );
  }

  /**
   * Get an Agent Configuration
   *
   * @remarks
   * Returns the specified agent configuration in its uninterpolated form
   *
   * @returns An agent configuration
   *
   * @throws {@link VoiceAgentConfigurations.GetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get(
    request: VoiceAgentConfigurations.GetRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConfigurationV1, VoiceAgentConfigurations.GetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agents/{agent_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "agent_id", value: request.agentId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentConfigurationV1Schema },
        errorFactory: VoiceAgentConfigurations.GetError,
      },
      options,
    );
  }

  /**
   * List Agent Configurations
   *
   * @remarks
   * Returns all agent configurations for the specified project. Configurations are returned in
   * their uninterpolated form—template variable placeholders appear as-is rather than with their
   * substituted values.
   *
   * @returns A list of agent configurations
   *
   * @throws {@link VoiceAgentConfigurations.List2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list2(
    request: VoiceAgentConfigurations.List2Request,
    options?: RequestOptions,
  ): ApiPromise<ListAgentConfigurationsV1Response, VoiceAgentConfigurations.List2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agents"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAgentConfigurationsV1ResponseSchema },
        errorFactory: VoiceAgentConfigurations.List2Error,
      },
      options,
    );
  }

  /**
   * Update Agent Metadata
   *
   * @remarks
   * Updates the metadata associated with an agent configuration. The config itself is immutable—to
   * change the configuration, delete the existing agent and create a new one.
   *
   * @returns Agent configuration updated
   *
   * @throws {@link VoiceAgentConfigurations.UpdateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update(
    request: VoiceAgentConfigurations.UpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConfigurationV1, VoiceAgentConfigurations.UpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/agents/{agent_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "agent_id", value: request.agentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateAgentMetadataV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: agentConfigurationV1Schema },
        errorFactory: VoiceAgentConfigurations.UpdateError,
      },
      options,
    );
  }
}

export namespace VoiceAgentConfigurations {
  export type CreateRequest = {
    /** The unique identifier of the project */
    projectId: string;
    /** Agent configuration details */
    body?: CreateAgentConfigurationV1Request;
  };

  export class CreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteRequest = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the agent configuration */
    agentId: string;
  };

  export class DeleteError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<DeleteError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetRequest = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the agent configuration */
    agentId: string;
  };

  export class GetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List2Request = {
    /** The unique identifier of the project */
    projectId: string;
  };

  export class List2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateRequest = {
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the agent configuration */
    agentId: string;
    /** Updated metadata for the agent configuration */
    body?: UpdateAgentMetadataV1Request;
  };

  export class UpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
