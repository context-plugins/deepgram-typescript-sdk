<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsKeys — operations

Accessor: `client.manageV1ProjectsKeys` · Source: `src/resources/manage-v1-projects-keys.ts` · 4 operations · Request and error types: namespace `ManageV1ProjectsKeys`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create3

- **Signature**: `create3(request: ManageV1ProjectsKeys.Create3Request, options?: RequestOptions): ApiPromise<CreateKeyV1Response, ManageV1ProjectsKeys.Create3Error>`
- **Wire**: `POST /v1/projects/{project_id}/keys`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateKeyV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsKeys.Create3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsKeys.Create3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `body` | `body` | — | `CreateKeyV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateKeyV1Request` | `createKeyV1RequestSchema` | `src/models/unions/create-key-v1-request.ts` |
| `CreateKeyV1Response` | `createKeyV1ResponseSchema` | `src/models/create-key-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### delete4

- **Signature**: `delete4(request: ManageV1ProjectsKeys.Delete4Request, options?: RequestOptions): ApiPromise<DeleteProjectKeyV1Response, ManageV1ProjectsKeys.Delete4Error>`
- **Wire**: `DELETE /v1/projects/{project_id}/keys/{key_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteProjectKeyV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsKeys.Delete4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsKeys.Delete4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `keyId` | `path` | `key_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteProjectKeyV1Response` | `deleteProjectKeyV1ResponseSchema` | `src/models/delete-project-key-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### get6

- **Signature**: `get6(request: ManageV1ProjectsKeys.Get6Request, options?: RequestOptions): ApiPromise<GetProjectKeyV1Response, ManageV1ProjectsKeys.Get6Error>`
- **Wire**: `GET /v1/projects/{project_id}/keys/{key_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetProjectKeyV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsKeys.Get6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsKeys.Get6Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `keyId` | `path` | `key_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetProjectKeyV1Response` | `getProjectKeyV1ResponseSchema` | `src/models/get-project-key-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list7

- **Signature**: `list7(request: ManageV1ProjectsKeys.List7Request, options?: RequestOptions): ApiPromise<ListProjectKeysV1Response, ManageV1ProjectsKeys.List7Error>`
- **Wire**: `GET /v1/projects/{project_id}/keys`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectKeysV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsKeys.List7Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsKeys.List7Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `status` | `query` | — | `V1ProjectsProjectIdKeysGetParametersStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ProjectsProjectIdKeysGetParametersStatus` | `v1ProjectsProjectIdKeysGetParametersStatusSchema` | `src/models/v1-projects-project-id-keys-get-parameters-status.ts` |
| `ListProjectKeysV1Response` | `listProjectKeysV1ResponseSchema` | `src/models/list-project-keys-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

