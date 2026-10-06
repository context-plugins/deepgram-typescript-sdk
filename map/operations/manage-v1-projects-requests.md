<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsRequests — operations

Accessor: `client.manageV1ProjectsRequests` · Source: `src/resources/manage-v1-projects-requests.ts` · 2 operations · Request and error types: namespace `ManageV1ProjectsRequests`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### get7

- **Signature**: `get7(request: ManageV1ProjectsRequests.Get7Request, options?: RequestOptions): ApiPromise<GetProjectRequestV1Response, ManageV1ProjectsRequests.Get7Error>`
- **Wire**: `GET /v1/projects/{project_id}/requests/{request_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetProjectRequestV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsRequests.Get7Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsRequests.Get7Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `requestId` | `path` | `request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetProjectRequestV1Response` | `getProjectRequestV1ResponseSchema` | `src/models/get-project-request-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list11

- **Signature**: `list11(request: ManageV1ProjectsRequests.List11Request, options?: RequestOptions): ApiPromise<ListProjectRequestsV1Response, ManageV1ProjectsRequests.List11Error>`
- **Wire**: `GET /v1/projects/{project_id}/requests`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectRequestsV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsRequests.List11Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsRequests.List11Request` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes | — |
| `start` | `query` | — | `Date` (date-time) | no | — |
| `end` | `query` | — | `Date` (date-time) | no | — |
| `limit` | `query` | — | `number` | no | `10` |
| `page` | `query` | — | `number` | no | — |
| `accessor` | `query` | — | `string` | no | — |
| `requestId` | `query` | `request_id` | `string` | no | — |
| `deployment` | `query` | — | `V1ProjectsProjectIdRequestsGetParametersDeployment` | no | — |
| `endpoint` | `query` | — | `V1ProjectsProjectIdRequestsGetParametersEndpoint` | no | — |
| `method` | `query` | — | `V1ProjectsProjectIdRequestsGetParametersMethod` | no | — |
| `status` | `query` | — | `V1ProjectsProjectIdRequestsGetParametersStatus` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ProjectsProjectIdRequestsGetParametersDeployment` | `v1ProjectsProjectIdRequestsGetParametersDeploymentSchema` | `src/models/v1-projects-project-id-requests-get-parameters-deployment.ts` |
| `V1ProjectsProjectIdRequestsGetParametersEndpoint` | `v1ProjectsProjectIdRequestsGetParametersEndpointSchema` | `src/models/v1-projects-project-id-requests-get-parameters-endpoint.ts` |
| `V1ProjectsProjectIdRequestsGetParametersMethod` | `v1ProjectsProjectIdRequestsGetParametersMethodSchema` | `src/models/v1-projects-project-id-requests-get-parameters-method.ts` |
| `V1ProjectsProjectIdRequestsGetParametersStatus` | `v1ProjectsProjectIdRequestsGetParametersStatusSchema` | `src/models/v1-projects-project-id-requests-get-parameters-status.ts` |
| `ListProjectRequestsV1Response` | `listProjectRequestsV1ResponseSchema` | `src/models/list-project-requests-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

