<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsBillingFields — operations

Accessor: `client.manageV1ProjectsBillingFields` · Source: `src/resources/manage-v1-projects-billing-fields.ts` · 1 operation · Request and error types: namespace `ManageV1ProjectsBillingFields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### list15

- **Signature**: `list15(request: ManageV1ProjectsBillingFields.List15Request, options?: RequestOptions): ApiPromise<ListBillingFieldsV1Response, ManageV1ProjectsBillingFields.List15Error>`
- **Wire**: `GET /v1/projects/{project_id}/billing/fields`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBillingFieldsV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsBillingFields.List15Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsBillingFields.List15Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `start` | `query` | — | `string` (date) | no |
| `end` | `query` | — | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBillingFieldsV1Response` | `listBillingFieldsV1ResponseSchema` | `src/models/list-billing-fields-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

