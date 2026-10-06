<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsUsageFields — operations

Accessor: `client.manageV1ProjectsUsageFields` · Source: `src/resources/manage-v1-projects-usage-fields.ts` · 1 operation · Request and error types: namespace `ManageV1ProjectsUsageFields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### list12

- **Signature**: `list12(request: ManageV1ProjectsUsageFields.List12Request, options?: RequestOptions): ApiPromise<UsageFieldsV1Response, ManageV1ProjectsUsageFields.List12Error>`
- **Wire**: `GET /v1/projects/{project_id}/usage/fields`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageFieldsV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsUsageFields.List12Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsUsageFields.List12Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `start` | `query` | — | `string` (date) | no |
| `end` | `query` | — | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageFieldsV1Response` | `usageFieldsV1ResponseSchema` | `src/models/usage-fields-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

