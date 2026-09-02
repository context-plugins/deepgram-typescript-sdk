import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  billingBreakdownV1ResponseSchema,
  type BillingBreakdownV1Response,
} from "../models/billing-breakdown-v1-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/unions/error-response.js";
import {
  v1ProjectsProjectIdBillingBreakdownGetParametersDeploymentSchema,
  type V1ProjectsProjectIdBillingBreakdownGetParametersDeployment,
} from "../models/v1-projects-project-id-billing-breakdown-get-parameters-deployment.js";
import {
  v1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItemsSchema,
  type V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems,
} from "../models/v1-projects-project-id-billing-breakdown-get-parameters-grouping-schema-items.js";
import type { Servers } from "../servers.js";

export class ManageV1ProjectsBillingBreakdown {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  list14(
    request: ManageV1ProjectsBillingBreakdown.List14Request,
    options?: RequestOptions,
  ): ApiPromise<BillingBreakdownV1Response, ManageV1ProjectsBillingBreakdown.List14Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/projects/{project_id}/billing/breakdown"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
          { name: "accessor", value: request.accessor, schema: s.optional(s.string()) },
          {
            name: "deployment",
            value: request.deployment,
            schema: s.optional(
              s.lazy(() => v1ProjectsProjectIdBillingBreakdownGetParametersDeploymentSchema),
            ),
          },
          { name: "tag", value: request.tag, schema: s.optional(s.string()) },
          { name: "line_item", value: request.lineItem, schema: s.optional(s.string()) },
          {
            name: "grouping",
            value: request.grouping,
            schema: s.optional(
              s.array(
                s.lazy(() => v1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItemsSchema),
              ),
            ),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingBreakdownV1ResponseSchema },
        errorFactory: ManageV1ProjectsBillingBreakdown.List14Error,
      },
      options,
    );
  }
}

export namespace ManageV1ProjectsBillingBreakdown {
  export type List14Request = {
    projectId: string;
    start?: string;
    end?: string;
    accessor?: string;
    deployment?: V1ProjectsProjectIdBillingBreakdownGetParametersDeployment;
    tag?: string;
    lineItem?: string;
    grouping?: V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems[];
  };

  export class List14Error extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<List14Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
