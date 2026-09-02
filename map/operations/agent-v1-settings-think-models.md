<!-- Generated file — do not edit; regenerated with the SDK. -->

# AgentV1SettingsThinkModels — operations

Accessor: `client.agentV1SettingsThinkModels` · Source: `src/resources/agent-v1-settings-think-models.ts` · 1 operation · Request and error types: namespace `AgentV1SettingsThinkModels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### list

- **Signature**: `list(options?: RequestOptions): ApiPromise<AgentThinkModelsV1Response, AgentV1SettingsThinkModels.ListError>`
- **Wire**: `GET /v1/agent/settings/think/models`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentThinkModelsV1Response`
- **Error**: `AgentV1SettingsThinkModels.ListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentThinkModelsV1Response` | `agentThinkModelsV1ResponseSchema` | `src/models/agent-think-models-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

