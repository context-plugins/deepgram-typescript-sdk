<!-- Generated file — do not edit; regenerated with the SDK. -->

# SelfHostedV1DistributionCredentials — operations

Accessor: `client.selfHostedV1DistributionCredentials` · Source: `src/resources/self-hosted-v1-distribution-credentials.ts` · 4 operations · Request and error types: namespace `SelfHostedV1DistributionCredentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create5

- **Signature**: `create5(request: SelfHostedV1DistributionCredentials.Create5Request, options?: RequestOptions): ApiPromise<CreateProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.Create5Error>`
- **Wire**: `POST /v1/projects/{project_id}/self-hosted/distribution/credentials`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateProjectDistributionCredentialsV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `SelfHostedV1DistributionCredentials.Create5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SelfHostedV1DistributionCredentials.Create5Request` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes | — |
| `scopes` | `query` | — | `V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems[]` | no | — |
| `provider` | `query` | — | `V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider` | no | `V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider.Quay` |
| `body` | `body` | — | `CreateProjectDistributionCredentialsV1Request` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems` | `v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItemsSchema` | `src/models/v1-projects-project-id-self-hosted-distribution-credentials-post-parameters-scopes-schema-items.ts` |
| `V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider` | `v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProviderSchema` | `src/models/v1-projects-project-id-self-hosted-distribution-credentials-post-parameters-provider.ts` |
| `CreateProjectDistributionCredentialsV1Request` | `createProjectDistributionCredentialsV1RequestSchema` | `src/models/create-project-distribution-credentials-v1-request.ts` |
| `CreateProjectDistributionCredentialsV1Response` | `createProjectDistributionCredentialsV1ResponseSchema` | `src/models/create-project-distribution-credentials-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### delete7

- **Signature**: `delete7(request: SelfHostedV1DistributionCredentials.Delete7Request, options?: RequestOptions): ApiPromise<GetProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.Delete7Error>`
- **Wire**: `DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetProjectDistributionCredentialsV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `SelfHostedV1DistributionCredentials.Delete7Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SelfHostedV1DistributionCredentials.Delete7Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `distributionCredentialsId` | `path` | `distribution_credentials_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetProjectDistributionCredentialsV1Response` | `getProjectDistributionCredentialsV1ResponseSchema` | `src/models/get-project-distribution-credentials-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### get11

- **Signature**: `get11(request: SelfHostedV1DistributionCredentials.Get11Request, options?: RequestOptions): ApiPromise<GetProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.Get11Error>`
- **Wire**: `GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetProjectDistributionCredentialsV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `SelfHostedV1DistributionCredentials.Get11Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SelfHostedV1DistributionCredentials.Get11Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `distributionCredentialsId` | `path` | `distribution_credentials_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetProjectDistributionCredentialsV1Response` | `getProjectDistributionCredentialsV1ResponseSchema` | `src/models/get-project-distribution-credentials-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list17

- **Signature**: `list17(request: SelfHostedV1DistributionCredentials.List17Request, options?: RequestOptions): ApiPromise<ListProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.List17Error>`
- **Wire**: `GET /v1/projects/{project_id}/self-hosted/distribution/credentials`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectDistributionCredentialsV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `SelfHostedV1DistributionCredentials.List17Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SelfHostedV1DistributionCredentials.List17Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListProjectDistributionCredentialsV1Response` | `listProjectDistributionCredentialsV1ResponseSchema` | `src/models/list-project-distribution-credentials-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

