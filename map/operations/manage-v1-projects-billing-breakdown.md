<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsBillingBreakdown — operations

Accessor: `client.manageV1ProjectsBillingBreakdown` · Source: `src/resources/manage-v1-projects-billing-breakdown.ts` · 1 operation · Request and error types: namespace `ManageV1ProjectsBillingBreakdown`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### list14

- **Signature**: `list14(request: ManageV1ProjectsBillingBreakdown.List14Request, options?: RequestOptions): ApiPromise<BillingBreakdownV1Response, ManageV1ProjectsBillingBreakdown.List14Error>`
- **Wire**: `GET /v1/projects/{project_id}/billing/breakdown`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingBreakdownV1Response`
- **Error**: `ManageV1ProjectsBillingBreakdown.List14Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsBillingBreakdown.List14Request` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `start` | `query` | — | `string` (date) | no |
| `end` | `query` | — | `string` (date) | no |
| `accessor` | `query` | — | `string` | no |
| `deployment` | `query` | — | `V1ProjectsProjectIdBillingBreakdownGetParametersDeployment` | no |
| `tag` | `query` | — | `string` | no |
| `lineItem` | `query` | `line_item` | `string` | no |
| `grouping` | `query` | — | `V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ProjectsProjectIdBillingBreakdownGetParametersDeployment` | `v1ProjectsProjectIdBillingBreakdownGetParametersDeploymentSchema` | `src/models/v1-projects-project-id-billing-breakdown-get-parameters-deployment.ts` |
| `V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems` | `v1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItemsSchema` | `src/models/v1-projects-project-id-billing-breakdown-get-parameters-grouping-schema-items.ts` |
| `BillingBreakdownV1Response` | `billingBreakdownV1ResponseSchema` | `src/models/billing-breakdown-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

