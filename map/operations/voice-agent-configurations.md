<!-- Generated file — do not edit; regenerated with the SDK. -->

# VoiceAgentConfigurations — operations

Accessor: `client.voiceAgentConfigurations` · Source: `src/resources/voice-agent-configurations.ts` · 5 operations · Request and error types: namespace `VoiceAgentConfigurations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### create

- **Signature**: `create(request: VoiceAgentConfigurations.CreateRequest, options?: RequestOptions): ApiPromise<CreateAgentConfigurationV1Response, VoiceAgentConfigurations.CreateError>`
- **Wire**: `POST /v1/projects/{project_id}/agents`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateAgentConfigurationV1Response`
- **Error**: `VoiceAgentConfigurations.CreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentConfigurations.CreateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `body` | `body` | — | `CreateAgentConfigurationV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAgentConfigurationV1Request` | `createAgentConfigurationV1RequestSchema` | `src/models/create-agent-configuration-v1-request.ts` |
| `CreateAgentConfigurationV1Response` | `createAgentConfigurationV1ResponseSchema` | `src/models/create-agent-configuration-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### delete

- **Signature**: `delete(request: VoiceAgentConfigurations.DeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, VoiceAgentConfigurations.DeleteError>`
- **Wire**: `DELETE /v1/projects/{project_id}/agents/{agent_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `VoiceAgentConfigurations.DeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentConfigurations.DeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `agentId` | `path` | `agent_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### get

- **Signature**: `get(request: VoiceAgentConfigurations.GetRequest, options?: RequestOptions): ApiPromise<AgentConfigurationV1, VoiceAgentConfigurations.GetError>`
- **Wire**: `GET /v1/projects/{project_id}/agents/{agent_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentConfigurationV1`
- **Error**: `VoiceAgentConfigurations.GetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentConfigurations.GetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `agentId` | `path` | `agent_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentConfigurationV1` | `agentConfigurationV1Schema` | `src/models/agent-configuration-v1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### list2

- **Signature**: `list2(request: VoiceAgentConfigurations.List2Request, options?: RequestOptions): ApiPromise<ListAgentConfigurationsV1Response, VoiceAgentConfigurations.List2Error>`
- **Wire**: `GET /v1/projects/{project_id}/agents`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAgentConfigurationsV1Response`
- **Error**: `VoiceAgentConfigurations.List2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentConfigurations.List2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAgentConfigurationsV1Response` | `listAgentConfigurationsV1ResponseSchema` | `src/models/list-agent-configurations-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

### update

- **Signature**: `update(request: VoiceAgentConfigurations.UpdateRequest, options?: RequestOptions): ApiPromise<AgentConfigurationV1, VoiceAgentConfigurations.UpdateError>`
- **Wire**: `PUT /v1/projects/{project_id}/agents/{agent_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `AgentConfigurationV1`
- **Error**: `VoiceAgentConfigurations.UpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceAgentConfigurations.UpdateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `agentId` | `path` | `agent_id` | `string` | yes |
| `body` | `body` | — | `UpdateAgentMetadataV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAgentMetadataV1Request` | `updateAgentMetadataV1RequestSchema` | `src/models/update-agent-metadata-v1-request.ts` |
| `AgentConfigurationV1` | `agentConfigurationV1Schema` | `src/models/agent-configuration-v1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

