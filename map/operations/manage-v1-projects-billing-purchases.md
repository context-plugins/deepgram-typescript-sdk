<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsBillingPurchases — operations

Accessor: `client.manageV1ProjectsBillingPurchases` · Source: `src/resources/manage-v1-projects-billing-purchases.ts` · 1 operation · Request and error types: namespace `ManageV1ProjectsBillingPurchases`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### list16

- **Signature**: `list16(request: ManageV1ProjectsBillingPurchases.List16Request, options?: RequestOptions): ApiPromise<ListProjectPurchasesV1Response, ManageV1ProjectsBillingPurchases.List16Error>`
- **Wire**: `GET /v1/projects/{project_id}/purchases`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectPurchasesV1Response`
- **Error**: `ManageV1ProjectsBillingPurchases.List16Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsBillingPurchases.List16Request` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListProjectPurchasesV1Response` | `listProjectPurchasesV1ResponseSchema` | `src/models/list-project-purchases-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

