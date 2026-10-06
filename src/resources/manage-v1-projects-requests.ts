import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Get a Project Request
   *
   * @remarks
   * Retrieves a specific request for a specific project
   *
   * @returns A specific request for a specific project
   *
   * @throws {@link ManageV1ProjectsRequests.Get7Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get7(
    request: ManageV1ProjectsRequests.Get7Request,
    options?: RequestOptions,
  ): ApiPromise<GetProjectRequestV1Response, ManageV1ProjectsRequests.Get7Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/requests/{request_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "request_id", value: request.requestId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProjectRequestV1ResponseSchema },
        errorFactory: ManageV1ProjectsRequests.Get7Error,
      },
      options,
    );
  }

  /**
   * List Project Requests
   *
   * @remarks
   * Generates a list of requests for a specific project
   *
   * @returns A list of requests for a specific project
   *
   * @throws {@link ManageV1ProjectsRequests.List11Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeepgramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list11(
    request: ManageV1ProjectsRequests.List11Request,
    options?: RequestOptions,
  ): ApiPromise<ListProjectRequestsV1Response, ManageV1ProjectsRequests.List11Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project_id}/requests"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateTime()) },
          { name: "end", value: request.end, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 10) },
          { name: "page", value: request.page, schema: s.optional(s.float64()) },
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
        headers: [],
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
    /** The unique identifier of the project */
    projectId: string;
    /** The unique identifier of the request */
    requestId: string;
  };

  export class Get7Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<Get7Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List11Request = {
    /** The unique identifier of the project */
    projectId: string;
    /**
     * Start date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS,
     * or YYYY-MM-DDTHH:MM:SS+HH:MM
     */
    start?: Date;
    /**
     * End date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS,
     * or YYYY-MM-DDTHH:MM:SS+HH:MM
     */
    end?: Date;
    /** Number of results to return per page. Default 10. Range [1,1000] @default 10 */
    limit?: number;
    /**
     * Navigate and return the results to retrieve specific portions of information of the response
     */
    page?: number;
    /** Filter for requests where a specific accessor was used */
    accessor?: string;
    /** Filter for a specific request id */
    requestId?: string;
    /** Filter for requests where a specific deployment was used */
    deployment?: V1ProjectsProjectIdRequestsGetParametersDeployment;
    /** Filter for requests where a specific endpoint was used */
    endpoint?: V1ProjectsProjectIdRequestsGetParametersEndpoint;
    /** Filter for requests where a specific method was used */
    method?: V1ProjectsProjectIdRequestsGetParametersMethod;
    /** Filter for requests that succeeded (status code < 300) or failed (status code >=400) */
    status?: V1ProjectsProjectIdRequestsGetParametersStatus;
  };

  export class List11Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<List11Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
