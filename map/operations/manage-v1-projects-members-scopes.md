<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsMembersScopes — operations

Accessor: `client.manageV1ProjectsMembersScopes` · Source: `src/resources/manage-v1-projects-members-scopes.ts` · 2 operations · Request and error types: namespace `ManageV1ProjectsMembersScopes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### list9

- **Signature**: `list9(request: ManageV1ProjectsMembersScopes.List9Request, options?: RequestOptions): ApiPromise<ListProjectMemberScopesV1Response, ManageV1ProjectsMembersScopes.List9Error>`
- **Wire**: `GET /v1/projects/{project_id}/members/{member_id}/scopes`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectMemberScopesV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsMembersScopes.List9Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsMembersScopes.List9Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `memberId` | `path` | `member_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListProjectMemberScopesV1Response` | `listProjectMemberScopesV1ResponseSchema` | `src/models/list-project-member-scopes-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### update4

- **Signature**: `update4(request: ManageV1ProjectsMembersScopes.Update4Request, options?: RequestOptions): ApiPromise<UpdateProjectMemberScopesV1Response, ManageV1ProjectsMembersScopes.Update4Error>`
- **Wire**: `PUT /v1/projects/{project_id}/members/{member_id}/scopes`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateProjectMemberScopesV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsMembersScopes.Update4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsMembersScopes.Update4Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `memberId` | `path` | `member_id` | `string` | yes |
| `body` | `body` | — | `UpdateProjectMemberScopesV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateProjectMemberScopesV1Request` | `updateProjectMemberScopesV1RequestSchema` | `src/models/update-project-member-scopes-v1-request.ts` |
| `UpdateProjectMemberScopesV1Response` | `updateProjectMemberScopesV1ResponseSchema` | `src/models/update-project-member-scopes-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

