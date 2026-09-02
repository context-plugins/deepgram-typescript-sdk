<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsMembersInvites — operations

Accessor: `client.manageV1ProjectsMembersInvites` · Source: `src/resources/manage-v1-projects-members-invites.ts` · 3 operations · Request and error types: namespace `ManageV1ProjectsMembersInvites`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### create4

- **Signature**: `create4(request: ManageV1ProjectsMembersInvites.Create4Request, options?: RequestOptions): ApiPromise<CreateProjectInviteV1Response, ManageV1ProjectsMembersInvites.Create4Error>`
- **Wire**: `POST /v1/projects/{project_id}/invites`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateProjectInviteV1Response`
- **Error**: `ManageV1ProjectsMembersInvites.Create4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsMembersInvites.Create4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `body` | `body` | — | `CreateProjectInviteV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProjectInviteV1Request` | `createProjectInviteV1RequestSchema` | `src/models/create-project-invite-v1-request.ts` |
| `CreateProjectInviteV1Response` | `createProjectInviteV1ResponseSchema` | `src/models/create-project-invite-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### delete6

- **Signature**: `delete6(request: ManageV1ProjectsMembersInvites.Delete6Request, options?: RequestOptions): ApiPromise<DeleteProjectInviteV1Response, ManageV1ProjectsMembersInvites.Delete6Error>`
- **Wire**: `DELETE /v1/projects/{project_id}/invites/{email}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteProjectInviteV1Response`
- **Error**: `ManageV1ProjectsMembersInvites.Delete6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsMembersInvites.Delete6Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `email` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteProjectInviteV1Response` | `deleteProjectInviteV1ResponseSchema` | `src/models/delete-project-invite-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list10

- **Signature**: `list10(request: ManageV1ProjectsMembersInvites.List10Request, options?: RequestOptions): ApiPromise<ListProjectInvitesV1Response, ManageV1ProjectsMembersInvites.List10Error>`
- **Wire**: `GET /v1/projects/{project_id}/invites`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectInvitesV1Response`
- **Error**: `ManageV1ProjectsMembersInvites.List10Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsMembersInvites.List10Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListProjectInvitesV1Response` | `listProjectInvitesV1ResponseSchema` | `src/models/list-project-invites-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

