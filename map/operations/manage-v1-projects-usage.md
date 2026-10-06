<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsUsage — operations

Accessor: `client.manageV1ProjectsUsage` · Source: `src/resources/manage-v1-projects-usage.ts` · 1 operation · Request and error types: namespace `ManageV1ProjectsUsage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### get8

- **Signature**: `get8(request: ManageV1ProjectsUsage.Get8Request, options?: RequestOptions): ApiPromise<UsageV1Response, ManageV1ProjectsUsage.Get8Error>`
- **Wire**: `GET /v1/projects/{project_id}/usage`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ManageV1ProjectsUsage.Get8Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsUsage.Get8Request` (45):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `start` | `query` | — | `string` (date) | no |
| `end` | `query` | — | `string` (date) | no |
| `accessor` | `query` | — | `string` | no |
| `alternatives` | `query` | — | `boolean` | no |
| `callbackMethod` | `query` | `callback_method` | `boolean` | no |
| `callback` | `query` | — | `boolean` | no |
| `channels` | `query` | — | `boolean` | no |
| `customIntentMode` | `query` | `custom_intent_mode` | `boolean` | no |
| `customIntent` | `query` | `custom_intent` | `boolean` | no |
| `customTopicMode` | `query` | `custom_topic_mode` | `boolean` | no |
| `customTopic` | `query` | `custom_topic` | `boolean` | no |
| `deployment` | `query` | — | `V1ProjectsProjectIdUsageGetParametersDeployment` | no |
| `detectEntities` | `query` | `detect_entities` | `boolean` | no |
| `detectLanguage` | `query` | `detect_language` | `boolean` | no |
| `diarize` | `query` | — | `boolean` | no |
| `dictation` | `query` | — | `boolean` | no |
| `encoding` | `query` | — | `boolean` | no |
| `endpoint` | `query` | — | `V1ProjectsProjectIdUsageGetParametersEndpoint` | no |
| `extra` | `query` | — | `boolean` | no |
| `fillerWords` | `query` | `filler_words` | `boolean` | no |
| `intents` | `query` | — | `boolean` | no |
| `keyterm` | `query` | — | `boolean` | no |
| `keywords` | `query` | — | `boolean` | no |
| `language` | `query` | — | `boolean` | no |
| `measurements` | `query` | — | `boolean` | no |
| `method` | `query` | — | `V1ProjectsProjectIdUsageGetParametersMethod` | no |
| `model` | `query` | — | `string` | no |
| `multichannel` | `query` | — | `boolean` | no |
| `numerals` | `query` | — | `boolean` | no |
| `paragraphs` | `query` | — | `boolean` | no |
| `profanityFilter` | `query` | `profanity_filter` | `boolean` | no |
| `punctuate` | `query` | — | `boolean` | no |
| `redact` | `query` | — | `boolean` | no |
| `replace` | `query` | — | `boolean` | no |
| `sampleRate` | `query` | `sample_rate` | `boolean` | no |
| `search` | `query` | — | `boolean` | no |
| `sentiment` | `query` | — | `boolean` | no |
| `smartFormat` | `query` | `smart_format` | `boolean` | no |
| `summarize` | `query` | — | `boolean` | no |
| `tag` | `query` | — | `string` | no |
| `topics` | `query` | — | `boolean` | no |
| `uttSplit` | `query` | `utt_split` | `boolean` | no |
| `utterances` | `query` | — | `boolean` | no |
| `version` | `query` | — | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ProjectsProjectIdUsageGetParametersDeployment` | `v1ProjectsProjectIdUsageGetParametersDeploymentSchema` | `src/models/v1-projects-project-id-usage-get-parameters-deployment.ts` |
| `V1ProjectsProjectIdUsageGetParametersEndpoint` | `v1ProjectsProjectIdUsageGetParametersEndpointSchema` | `src/models/v1-projects-project-id-usage-get-parameters-endpoint.ts` |
| `V1ProjectsProjectIdUsageGetParametersMethod` | `v1ProjectsProjectIdUsageGetParametersMethodSchema` | `src/models/v1-projects-project-id-usage-get-parameters-method.ts` |
| `UsageV1Response` | `usageV1ResponseSchema` | `src/models/usage-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

