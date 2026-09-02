import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createProjectDistributionCredentialsV1RequestSchema,
  type CreateProjectDistributionCredentialsV1Request,
} from "../models/create-project-distribution-credentials-v1-request.js";
import {
  createProjectDistributionCredentialsV1ResponseSchema,
  type CreateProjectDistributionCredentialsV1Response,
} from "../models/create-project-distribution-credentials-v1-response.js";
import {
  getProjectDistributionCredentialsV1ResponseSchema,
  type GetProjectDistributionCredentialsV1Response,
} from "../models/get-project-distribution-credentials-v1-response.js";
import {
  listProjectDistributionCredentialsV1ResponseSchema,
  type ListProjectDistributionCredentialsV1Response,
} from "../models/list-project-distribution-credentials-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider,
  v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProviderSchema,
} from "../models/v1-projects-project-id-self-hosted-distribution-credentials-post-parameters-provider.js";
import {
  v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItemsSchema,
  type V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems,
} from "../models/v1-projects-project-id-self-hosted-distribution-credentials-post-parameters-scopes-schema-items.js";
import type { Servers } from "../servers.js";

export class SelfHostedV1DistributionCredentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  create5(
    request: SelfHostedV1DistributionCredentials.Create5Request,
    options?: RequestOptions,
  ): ApiPromise<
    CreateProjectDistributionCredentialsV1Response,
    SelfHostedV1DistributionCredentials.Create5Error
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/v1/projects/{project_id}/self-hosted/distribution/credentials"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          {
            name: "scopes",
            value: request.scopes,
            schema: s.optional(
              s.array(
                s.lazy(
                  () =>
                    v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItemsSchema,
                ),
              ),
            ),
          },
          {
            name: "provider",
            value: request.provider,
            schema: s.defaulted(
              v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProviderSchema,
              V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider.Quay,
            ),
          },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createProjectDistributionCredentialsV1RequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createProjectDistributionCredentialsV1ResponseSchema },
        errorFactory: SelfHostedV1DistributionCredentials.Create5Error,
      },
      options,
    );
  }

  delete7(
    request: SelfHostedV1DistributionCredentials.Delete7Request,
    options?: RequestOptions,
  ): ApiPromise<
    GetProjectDistributionCredentialsV1Response,
    SelfHostedV1DistributionCredentials.Delete7Error
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          {
            name: "distribution_credentials_id",
            value: request.distributionCredentialsId,
            schema: s.string(),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProjectDistributionCredentialsV1ResponseSchema },
        errorFactory: SelfHostedV1DistributionCredentials.Delete7Error,
      },
      options,
    );
  }

  get11(
    request: SelfHostedV1DistributionCredentials.Get11Request,
    options?: RequestOptions,
  ): ApiPromise<GetProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.Get11Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          {
            name: "distribution_credentials_id",
            value: request.distributionCredentialsId,
            schema: s.string(),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProjectDistributionCredentialsV1ResponseSchema },
        errorFactory: SelfHostedV1DistributionCredentials.Get11Error,
      },
      options,
    );
  }

  list17(
    request: SelfHostedV1DistributionCredentials.List17Request,
    options?: RequestOptions,
  ): ApiPromise<
    ListProjectDistributionCredentialsV1Response,
    SelfHostedV1DistributionCredentials.List17Error
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/self-hosted/distribution/credentials"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectDistributionCredentialsV1ResponseSchema },
        errorFactory: SelfHostedV1DistributionCredentials.List17Error,
      },
      options,
    );
  }
}

export namespace SelfHostedV1DistributionCredentials {
  export type Create5Request = {
    projectId: string;
    scopes?: V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems[];
    provider?: V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider;
    body?: CreateProjectDistributionCredentialsV1Request;
  };

  export class Create5Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Create5Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Delete7Request = {
    projectId: string;
    distributionCredentialsId: string;
  };

  export class Delete7Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Delete7Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get11Request = {
    projectId: string;
    distributionCredentialsId: string;
  };

  export class Get11Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Get11Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List17Request = {
    projectId: string;
  };

  export class List17Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List17Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
