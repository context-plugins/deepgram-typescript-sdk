<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsBillingBalances — operations

Accessor: `client.manageV1ProjectsBillingBalances` · Source: `src/resources/manage-v1-projects-billing-balances.ts` · 2 operations · Request and error types: namespace `ManageV1ProjectsBillingBalances`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### get10

- **Signature**: `get10(request: ManageV1ProjectsBillingBalances.Get10Request, options?: RequestOptions): ApiPromise<GetProjectBalanceV1Response, ManageV1ProjectsBillingBalances.Get10Error>`
- **Wire**: `GET /v1/projects/{project_id}/balances/{balance_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetProjectBalanceV1Response`
- **Error**: `ManageV1ProjectsBillingBalances.Get10Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsBillingBalances.Get10Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `balanceId` | `path` | `balance_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetProjectBalanceV1Response` | `getProjectBalanceV1ResponseSchema` | `src/models/get-project-balance-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list13

- **Signature**: `list13(request: ManageV1ProjectsBillingBalances.List13Request, options?: RequestOptions): ApiPromise<ListProjectBalancesV1Response, ManageV1ProjectsBillingBalances.List13Error>`
- **Wire**: `GET /v1/projects/{project_id}/balances`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectBalancesV1Response`
- **Error**: `ManageV1ProjectsBillingBalances.List13Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsBillingBalances.List13Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListProjectBalancesV1Response` | `listProjectBalancesV1ResponseSchema` | `src/models/list-project-balances-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

