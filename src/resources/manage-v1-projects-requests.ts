import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  getProjectRequestV1ResponseSchema,
  type GetProjectRequestV1Response,
} from "../models/get-project-request-v1-response.js";
import {
  listProjectRequestsV1ResponseSchema,
  type ListProjectRequestsV1Response,
} from "../models/list-project-requests-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  v1ProjectsProjectIdRequestsGetParametersDeploymentSchema,
  type V1ProjectsProjectIdRequestsGetParametersDeployment,
} from "../models/v1-projects-project-id-requests-get-parameters-deployment.js";
import {
  v1ProjectsProjectIdRequestsGetParametersEndpointSchema,
  type V1ProjectsProjectIdRequestsGetParametersEndpoint,
} from "../models/v1-projects-project-id-requests-get-parameters-endpoint.js";
import {
  v1ProjectsProjectIdRequestsGetParametersMethodSchema,
  type V1ProjectsProjectIdRequestsGetParametersMethod,
} from "../models/v1-projects-project-id-requests-get-parameters-method.js";
import {
  v1ProjectsProjectIdRequestsGetParametersStatusSchema,
  type V1ProjectsProjectIdRequestsGetParametersStatus,
} from "../models/v1-projects-project-id-requests-get-parameters-status.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  get7(
    request: ManageV1ProjectsRequests.Get7Request,
    options?: RequestOptions,
  ): ApiPromise<GetProjectRequestV1Response, ManageV1ProjectsRequests.Get7Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/requests/{request_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "request_id", value: request.requestId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProjectRequestV1ResponseSchema },
        errorFactory: ManageV1ProjectsRequests.Get7Error,
      },
      options,
    );
  }

  list11(
    request: ManageV1ProjectsRequests.List11Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectRequestsV1Response, ManageV1ProjectsRequests.List11Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/requests"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateTime()) },
          { name: "end", value: request.end, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 10) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "accessor", value: request.accessor, schema: s.optional(s.string()) },
          { name: "request_id", value: request.requestId, schema: s.optional(s.string()) },
          {
            name: "deployment",
            value: request.deployment,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdRequestsGetParametersDeploymentSchema)),
          },
          {
            name: "endpoint",
            value: request.endpoint,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdRequestsGetParametersEndpointSchema)),
          },
          {
            name: "method",
            value: request.method,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdRequestsGetParametersMethodSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => v1ProjectsProjectIdRequestsGetParametersStatusSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listProjectRequestsV1ResponseSchema },
        errorFactory: ManageV1ProjectsRequests.List11Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsRequests {
  export type Get7Request = {
    projectId: string;
    requestId: string;
  };

  export class Get7Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<Get7Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List11Request = {
    projectId: string;
    start?: Date;
    end?: Date;
    limit?: number;
    page?: number;
    accessor?: string;
    requestId?: string;
    deployment?: V1ProjectsProjectIdRequestsGetParametersDeployment;
    endpoint?: V1ProjectsProjectIdRequestsGetParametersEndpoint;
    method?: V1ProjectsProjectIdRequestsGetParametersMethod;
    status?: V1ProjectsProjectIdRequestsGetParametersStatus;
  };

  export class List11Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List11Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
