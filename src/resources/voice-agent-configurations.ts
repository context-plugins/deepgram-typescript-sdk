import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  create(
    request: VoiceAgentConfigurations.CreateRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateAgentConfigurationV1Response, VoiceAgentConfigurations.CreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/projects/{project_id}/agents"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
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

  delete(
    request: VoiceAgentConfigurations.DeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, VoiceAgentConfigurations.DeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/v1/projects/{project_id}/agents/{agent_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "agent_id", value: request.agentId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: VoiceAgentConfigurations.DeleteError,
      },
      options,
    );
  }

  get(
    request: VoiceAgentConfigurations.GetRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConfigurationV1, VoiceAgentConfigurations.GetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/agents/{agent_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "agent_id", value: request.agentId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentConfigurationV1Schema },
        errorFactory: VoiceAgentConfigurations.GetError,
      },
      options,
    );
  }

  list2(
    request: VoiceAgentConfigurations.List2Request,
    options?: RequestOptions,
  ): ApiPromise<ListAgentConfigurationsV1Response, VoiceAgentConfigurations.List2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/agents"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAgentConfigurationsV1ResponseSchema },
        errorFactory: VoiceAgentConfigurations.List2Error,
      },
      options,
    );
  }

  update(
    request: VoiceAgentConfigurations.UpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConfigurationV1, VoiceAgentConfigurations.UpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/v1/projects/{project_id}/agents/{agent_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "agent_id", value: request.agentId, schema: s.string() },
        ],
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
    projectId: string;
    body?: CreateAgentConfigurationV1Request;
  };

  export class CreateError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<CreateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteRequest = {
    projectId: string;
    agentId: string;
  };

  export class DeleteError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<DeleteError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetRequest = {
    projectId: string;
    agentId: string;
  };

  export class GetError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<GetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List2Request = {
    projectId: string;
  };

  export class List2Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateRequest = {
    projectId: string;
    agentId: string;
    body?: UpdateAgentMetadataV1Request;
  };

  export class UpdateError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<UpdateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
