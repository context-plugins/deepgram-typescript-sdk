<!-- Generated file — do not edit; regenerated with the SDK. -->

# VoiceAgentVariables — operations

Accessor: `client.voiceAgentVariables` · Source: `src/resources/voice-agent-variables.ts` · 5 operations · Request and error types: namespace `VoiceAgentVariables`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### create2

- **Signature**: `create2(request: VoiceAgentVariables.Create2Request, options?: RequestOptions): ApiPromise<AgentVariableV1, VoiceAgentVariables.Create2Error>`
- **Wire**: `POST /v1/projects/{project_id}/agent-variables`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `AgentVariableV1`
- **Error**: `VoiceAgentVariables.Create2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentVariables.Create2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `body` | `body` | — | `CreateAgentVariableV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAgentVariableV1Request` | `createAgentVariableV1RequestSchema` | `src/models/create-agent-variable-v1-request.ts` |
| `AgentVariableV1` | `agentVariableV1Schema` | `src/models/agent-variable-v1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### delete2

- **Signature**: `delete2(request: VoiceAgentVariables.Delete2Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, VoiceAgentVariables.Delete2Error>`
- **Wire**: `DELETE /v1/projects/{project_id}/agent-variables/{variable_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `VoiceAgentVariables.Delete2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentVariables.Delete2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `variableId` | `path` | `variable_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### get2

- **Signature**: `get2(request: VoiceAgentVariables.Get2Request, options?: RequestOptions): ApiPromise<AgentVariableV1, VoiceAgentVariables.Get2Error>`
- **Wire**: `GET /v1/projects/{project_id}/agent-variables/{variable_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentVariableV1`
- **Error**: `VoiceAgentVariables.Get2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentVariables.Get2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `variableId` | `path` | `variable_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentVariableV1` | `agentVariableV1Schema` | `src/models/agent-variable-v1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list3

- **Signature**: `list3(request: VoiceAgentVariables.List3Request, options?: RequestOptions): ApiPromise<ListAgentVariablesV1Response, VoiceAgentVariables.List3Error>`
- **Wire**: `GET /v1/projects/{project_id}/agent-variables`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAgentVariablesV1Response`
- **Error**: `VoiceAgentVariables.List3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentVariables.List3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAgentVariablesV1Response` | `listAgentVariablesV1ResponseSchema` | `src/models/list-agent-variables-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### update2

- **Signature**: `update2(request: VoiceAgentVariables.Update2Request, options?: RequestOptions): ApiPromise<AgentVariableV1, VoiceAgentVariables.Update2Error>`
- **Wire**: `PATCH /v1/projects/{project_id}/agent-variables/{variable_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `AgentVariableV1`
- **Error**: `VoiceAgentVariables.Update2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentVariables.Update2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `variableId` | `path` | `variable_id` | `string` | yes |
| `body` | `body` | — | `UpdateAgentVariableV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAgentVariableV1Request` | `updateAgentVariableV1RequestSchema` | `src/models/update-agent-variable-v1-request.ts` |
| `AgentVariableV1` | `agentVariableV1Schema` | `src/models/agent-variable-v1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

