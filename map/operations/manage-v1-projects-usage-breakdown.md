<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageV1ProjectsUsageBreakdown — operations

Accessor: `client.manageV1ProjectsUsageBreakdown` · Source: `src/resources/manage-v1-projects-usage-breakdown.ts` · 1 operation · Request and error types: namespace `ManageV1ProjectsUsageBreakdown`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### get9

- **Signature**: `get9(request: ManageV1ProjectsUsageBreakdown.Get9Request, options?: RequestOptions): ApiPromise<UsageBreakdownV1Response, ManageV1ProjectsUsageBreakdown.Get9Error>`
- **Wire**: `GET /v1/projects/{project_id}/usage/breakdown`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageBreakdownV1Response`
- **Error**: `ManageV1ProjectsUsageBreakdown.Get9Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageV1ProjectsUsageBreakdown.Get9Request` (46):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `start` | `query` | — | `string` (date) | no |
| `end` | `query` | — | `string` (date) | no |
| `grouping` | `query` | — | `V1ProjectsProjectIdUsageBreakdownGetParametersGrouping` | no |
| `accessor` | `query` | — | `string` | no |
| `alternatives` | `query` | — | `boolean` | no |
| `callbackMethod` | `query` | `callback_method` | `boolean` | no |
| `callback` | `query` | — | `boolean` | no |
| `channels` | `query` | — | `boolean` | no |
| `customIntentMode` | `query` | `custom_intent_mode` | `boolean` | no |
| `customIntent` | `query` | `custom_intent` | `boolean` | no |
| `customTopicMode` | `query` | `custom_topic_mode` | `boolean` | no |
| `customTopic` | `query` | `custom_topic` | `boolean` | no |
| `deployment` | `query` | — | `V1ProjectsProjectIdUsageBreakdownGetParametersDeployment` | no |
| `detectEntities` | `query` | `detect_entities` | `boolean` | no |
| `detectLanguage` | `query` | `detect_language` | `boolean` | no |
| `diarize` | `query` | — | `boolean` | no |
| `dictation` | `query` | — | `boolean` | no |
| `encoding` | `query` | — | `boolean` | no |
| `endpoint` | `query` | — | `V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint` | no |
| `extra` | `query` | — | `boolean` | no |
| `fillerWords` | `query` | `filler_words` | `boolean` | no |
| `intents` | `query` | — | `boolean` | no |
| `keyterm` | `query` | — | `boolean` | no |
| `keywords` | `query` | — | `boolean` | no |
| `language` | `query` | — | `boolean` | no |
| `measurements` | `query` | — | `boolean` | no |
| `method` | `query` | — | `V1ProjectsProjectIdUsageBreakdownGetParametersMethod` | no |
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
| `V1ProjectsProjectIdUsageBreakdownGetParametersGrouping` | `v1ProjectsProjectIdUsageBreakdownGetParametersGroupingSchema` | `src/models/v1-projects-project-id-usage-breakdown-get-parameters-grouping.ts` |
| `V1ProjectsProjectIdUsageBreakdownGetParametersDeployment` | `v1ProjectsProjectIdUsageBreakdownGetParametersDeploymentSchema` | `src/models/v1-projects-project-id-usage-breakdown-get-parameters-deployment.ts` |
| `V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint` | `v1ProjectsProjectIdUsageBreakdownGetParametersEndpointSchema` | `src/models/v1-projects-project-id-usage-breakdown-get-parameters-endpoint.ts` |
| `V1ProjectsProjectIdUsageBreakdownGetParametersMethod` | `v1ProjectsProjectIdUsageBreakdownGetParametersMethodSchema` | `src/models/v1-projects-project-id-usage-breakdown-get-parameters-method.ts` |
| `UsageBreakdownV1Response` | `usageBreakdownV1ResponseSchema` | `src/models/usage-breakdown-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

