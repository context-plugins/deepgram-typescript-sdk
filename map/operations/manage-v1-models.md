<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1Models — operations

Accessor: `client.manageV1Models` · Source: `src/resources/manage-v1-models.ts` · 2 operations · Request and error types: namespace `ManageV1Models`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### get5

- **Signature**: `get5(request: ManageV1Models.Get5Request, options?: RequestOptions): ApiPromise<GetModelV1Response, ManageV1Models.Get5Error>`
- **Wire**: `GET /v1/models/{model_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetModelV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1Models.Get5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1Models.Get5Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `modelId` | `path` | `model_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetModelV1Response` | `getModelV1ResponseSchema` | `src/models/unions/get-model-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list6

- **Signature**: `list6(request: ManageV1Models.List6Request, options?: RequestOptions): ApiPromise<ListModelsV1Response, ManageV1Models.List6Error>`
- **Wire**: `GET /v1/models`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListModelsV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1Models.List6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1Models.List6Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includeOutdated` | `query` | `include_outdated` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListModelsV1Response` | `listModelsV1ResponseSchema` | `src/models/list-models-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

