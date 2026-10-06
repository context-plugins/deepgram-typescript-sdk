<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReadV1Text — operations

Accessor: `client.readV1Text` · Source: `src/resources/read-v1-text.ts` · 1 operation · Request and error types: namespace `ReadV1Text`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### analyze

- **Signature**: `analyze(request: ReadV1Text.AnalyzeRequest, options?: RequestOptions): ApiPromise<ReadV1Response, ReadV1Text.AnalyzeError>`
- **Wire**: `POST /v1/read`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReadV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `ReadV1Text.AnalyzeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReadV1Text.AnalyzeRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `callback` | `query` | — | `string` | no | — |
| `callbackMethod` | `query` | `callback_method` | `V1ListenPostParametersCallbackMethod` | no | `V1ListenPostParametersCallbackMethod.Post` |
| `sentiment` | `query` | — | `boolean` | no | `false` |
| `summarize` | `query` | — | `V1ReadPostParametersSummarize` | no | — |
| `tag` | `query` | — | `V1ReadPostParametersTag` | no | — |
| `topics` | `query` | — | `boolean` | no | `false` |
| `customTopic` | `query` | `custom_topic` | `V1ReadPostParametersCustomTopic` | no | — |
| `customTopicMode` | `query` | `custom_topic_mode` | `V1ListenPostParametersCustomTopicMode` | no | `V1ListenPostParametersCustomTopicMode.Extended` |
| `intents` | `query` | — | `boolean` | no | `false` |
| `customIntent` | `query` | `custom_intent` | `V1ReadPostParametersCustomIntent` | no | — |
| `customIntentMode` | `query` | `custom_intent_mode` | `V1ListenPostParametersCustomTopicMode` | no | `V1ListenPostParametersCustomTopicMode.Extended` |
| `language` | `query` | — | `string` | no | `"en"` |
| `body` | `body` | — | `ReadV1Request` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ListenPostParametersCallbackMethod` | `v1ListenPostParametersCallbackMethodSchema` | `src/models/v1-listen-post-parameters-callback-method.ts` |
| `V1ReadPostParametersSummarize` | `v1ReadPostParametersSummarizeSchema` | `src/models/unions/v1-read-post-parameters-summarize.ts` |
| `V1ReadPostParametersTag` | `v1ReadPostParametersTagSchema` | `src/models/unions/v1-read-post-parameters-tag.ts` |
| `V1ReadPostParametersCustomTopic` | `v1ReadPostParametersCustomTopicSchema` | `src/models/unions/v1-read-post-parameters-custom-topic.ts` |
| `V1ListenPostParametersCustomTopicMode` | `v1ListenPostParametersCustomTopicModeSchema` | `src/models/v1-listen-post-parameters-custom-topic-mode.ts` |
| `V1ReadPostParametersCustomIntent` | `v1ReadPostParametersCustomIntentSchema` | `src/models/unions/v1-read-post-parameters-custom-intent.ts` |
| `ReadV1Request` | `readV1RequestSchema` | `src/models/unions/read-v1-request.ts` |
| `ReadV1Response` | `readV1ResponseSchema` | `src/models/read-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

