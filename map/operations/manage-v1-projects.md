<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1Projects — operations

Accessor: `client.manageV1Projects` · Source: `src/resources/manage-v1-projects.ts` · 5 operations · Request and error types: namespace `ManageV1Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### delete3

- **Signature**: `delete3(request: ManageV1Projects.Delete3Request, options?: RequestOptions): ApiPromise<DeleteProjectV1Response, ManageV1Projects.Delete3Error>`
- **Wire**: `DELETE /v1/projects/{project_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteProjectV1Response`
- **Error**: `ManageV1Projects.Delete3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1Projects.Delete3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteProjectV1Response` | `deleteProjectV1ResponseSchema` | `src/models/delete-project-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### get3

- **Signature**: `get3(request: ManageV1Projects.Get3Request, options?: RequestOptions): ApiPromise<GetProjectV1Response, ManageV1Projects.Get3Error>`
- **Wire**: `GET /v1/projects/{project_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetProjectV1Response`
- **Error**: `ManageV1Projects.Get3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1Projects.Get3Request` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `10` |
| `page` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetProjectV1Response` | `getProjectV1ResponseSchema` | `src/models/get-project-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### leave

- **Signature**: `leave(request: ManageV1Projects.LeaveRequest, options?: RequestOptions): ApiPromise<LeaveProjectV1Response, ManageV1Projects.LeaveError>`
- **Wire**: `DELETE /v1/projects/{project_id}/leave`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LeaveProjectV1Response`
- **Error**: `ManageV1Projects.LeaveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1Projects.LeaveRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LeaveProjectV1Response` | `leaveProjectV1ResponseSchema` | `src/models/leave-project-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list4

- **Signature**: `list4(options?: RequestOptions): ApiPromise<ListProjectsV1Response, ManageV1Projects.List4Error>`
- **Wire**: `GET /v1/projects`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectsV1Response`
- **Error**: `ManageV1Projects.List4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ListProjectsV1Response` | `listProjectsV1ResponseSchema` | `src/models/list-projects-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### update3

- **Signature**: `update3(request: ManageV1Projects.Update3Request, options?: RequestOptions): ApiPromise<UpdateProjectV1Response, ManageV1Projects.Update3Error>`
- **Wire**: `PATCH /v1/projects/{project_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateProjectV1Response`
- **Error**: `ManageV1Projects.Update3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1Projects.Update3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `body` | `body` | — | `UpdateProjectV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateProjectV1Request` | `updateProjectV1RequestSchema` | `src/models/update-project-v1-request.ts` |
| `UpdateProjectV1Response` | `updateProjectV1ResponseSchema` | `src/models/update-project-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

