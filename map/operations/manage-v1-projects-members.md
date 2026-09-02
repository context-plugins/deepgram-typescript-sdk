<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsMembers — operations

Accessor: `client.manageV1ProjectsMembers` · Source: `src/resources/manage-v1-projects-members.ts` · 2 operations · Request and error types: namespace `ManageV1ProjectsMembers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### delete5

- **Signature**: `delete5(request: ManageV1ProjectsMembers.Delete5Request, options?: RequestOptions): ApiPromise<DeleteProjectMemberV1Response, ManageV1ProjectsMembers.Delete5Error>`
- **Wire**: `DELETE /v1/projects/{project_id}/members/{member_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteProjectMemberV1Response`
- **Error**: `ManageV1ProjectsMembers.Delete5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsMembers.Delete5Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `memberId` | `path` | `member_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteProjectMemberV1Response` | `deleteProjectMemberV1ResponseSchema` | `src/models/delete-project-member-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list8

- **Signature**: `list8(request: ManageV1ProjectsMembers.List8Request, options?: RequestOptions): ApiPromise<ListProjectMembersV1Response, ManageV1ProjectsMembers.List8Error>`
- **Wire**: `GET /v1/projects/{project_id}/members`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListProjectMembersV1Response`
- **Error**: `ManageV1ProjectsMembers.List8Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsMembers.List8Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListProjectMembersV1Response` | `listProjectMembersV1ResponseSchema` | `src/models/list-project-members-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

