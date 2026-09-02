<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsModels — operations

Accessor: `client.manageV1ProjectsModels` · Source: `src/resources/manage-v1-projects-models.ts` · 2 operations · Request and error types: namespace `ManageV1ProjectsModels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### get4

- **Signature**: `get4(request: ManageV1ProjectsModels.Get4Request, options?: RequestOptions): ApiPromise<GetModelV1Response, ManageV1ProjectsModels.Get4Error>`
- **Wire**: `GET /v1/projects/{project_id}/models/{model_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetModelV1Response`
- **Error**: `ManageV1ProjectsModels.Get4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsModels.Get4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `modelId` | `path` | `model_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetModelV1Response` | `getModelV1ResponseSchema` | `src/models/unions/get-model-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list5

- **Signature**: `list5(request: ManageV1ProjectsModels.List5Request, options?: RequestOptions): ApiPromise<ListModelsV1Response, ManageV1ProjectsModels.List5Error>`
- **Wire**: `GET /v1/projects/{project_id}/models`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListModelsV1Response`
- **Error**: `ManageV1ProjectsModels.List5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsModels.List5Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `includeOutdated` | `query` | `include_outdated` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListModelsV1Response` | `listModelsV1ResponseSchema` | `src/models/list-models-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

