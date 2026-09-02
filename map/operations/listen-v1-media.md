<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListenV1Media — operations

Accessor: `client.listenV1Media` · Source: `src/resources/listen-v1-media.ts` · 1 operation · Request and error types: namespace `ListenV1Media`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### transcribe

- **Signature**: `transcribe(request: ListenV1Media.TranscribeRequest, options?: RequestOptions): ApiPromise<ListenV1MediaTranscribeResponse200, ListenV1Media.TranscribeError>`
- **Wire**: `POST /v1/listen`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ListenV1MediaTranscribeResponse200`
- **Error**: `ListenV1Media.TranscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"listenV1Response"` [400] `ListenV1Response` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListenV1Media.TranscribeRequest` (38):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `callback` | `query` | — | `string` | no | — |
| `callbackMethod` | `query` | `callback_method` | `V1ListenPostParametersCallbackMethod` | no | `V1ListenPostParametersCallbackMethod.Post` |
| `extra` | `query` | — | `V1ListenPostParametersExtra` | no | — |
| `sentiment` | `query` | — | `boolean` | no | `false` |
| `summarize` | `query` | — | `V1ListenPostParametersSummarize` | no | — |
| `tag` | `query` | — | `V1ListenPostParametersTag` | no | — |
| `topics` | `query` | — | `boolean` | no | `false` |
| `customTopic` | `query` | `custom_topic` | `V1ListenPostParametersCustomTopic` | no | — |
| `customTopicMode` | `query` | `custom_topic_mode` | `V1ListenPostParametersCustomTopicMode` | no | `V1ListenPostParametersCustomTopicMode.Extended` |
| `intents` | `query` | — | `boolean` | no | `false` |
| `customIntent` | `query` | `custom_intent` | `V1ListenPostParametersCustomIntent` | no | — |
| `customIntentMode` | `query` | `custom_intent_mode` | `V1ListenPostParametersCustomTopicMode` | no | `V1ListenPostParametersCustomTopicMode.Extended` |
| `detectEntities` | `query` | `detect_entities` | `boolean` | no | `false` |
| `detectLanguage` | `query` | `detect_language` | `V1ListenPostParametersDetectLanguage` | no | — |
| `diarize` | `query` | — | `boolean` | no | `false` |
| `diarizeModel` | `query` | `diarize_model` | `V1ListenPostParametersDiarizeModel` | no | — |
| `dictation` | `query` | — | `boolean` | no | `false` |
| `encoding` | `query` | — | `V1ListenPostParametersEncoding` | no | — |
| `fillerWords` | `query` | `filler_words` | `boolean` | no | `false` |
| `keyterm` | `query` | — | `string[]` | no | — |
| `keywords` | `query` | — | `V1ListenPostParametersKeywords` | no | — |
| `language` | `query` | — | `string` | no | `"en"` |
| `measurements` | `query` | — | `boolean` | no | `false` |
| `model` | `query` | — | `V1ListenPostParametersModel` | no | — |
| `multichannel` | `query` | — | `boolean` | no | `false` |
| `numerals` | `query` | — | `boolean` | no | `false` |
| `paragraphs` | `query` | — | `boolean` | no | `false` |
| `profanityFilter` | `query` | `profanity_filter` | `boolean` | no | `false` |
| `punctuate` | `query` | — | `boolean` | no | `false` |
| `redact` | `query` | — | `V1ListenPostParametersRedact` | no | — |
| `replace` | `query` | — | `V1ListenPostParametersReplace` | no | — |
| `search` | `query` | — | `V1ListenPostParametersSearch` | no | — |
| `smartFormat` | `query` | `smart_format` | `boolean` | no | `false` |
| `utterances` | `query` | — | `boolean` | no | `false` |
| `uttSplit` | `query` | `utt_split` | `number` | no | `0.8` |
| `version` | `query` | — | `V1ListenPostParametersVersion` | no | — |
| `mipOptOut` | `query` | `mip_opt_out` | `boolean` | no | `false` |
| `body` | `body` | — | `ListenV1RequestUrl` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ListenPostParametersCallbackMethod` | `v1ListenPostParametersCallbackMethodSchema` | `src/models/v1-listen-post-parameters-callback-method.ts` |
| `V1ListenPostParametersExtra` | `v1ListenPostParametersExtraSchema` | `src/models/unions/v1-listen-post-parameters-extra.ts` |
| `V1ListenPostParametersSummarize` | `v1ListenPostParametersSummarizeSchema` | `src/models/unions/v1-listen-post-parameters-summarize.ts` |
| `V1ListenPostParametersTag` | `v1ListenPostParametersTagSchema` | `src/models/unions/v1-listen-post-parameters-tag.ts` |
| `V1ListenPostParametersCustomTopic` | `v1ListenPostParametersCustomTopicSchema` | `src/models/unions/v1-listen-post-parameters-custom-topic.ts` |
| `V1ListenPostParametersCustomTopicMode` | `v1ListenPostParametersCustomTopicModeSchema` | `src/models/v1-listen-post-parameters-custom-topic-mode.ts` |
| `V1ListenPostParametersCustomIntent` | `v1ListenPostParametersCustomIntentSchema` | `src/models/unions/v1-listen-post-parameters-custom-intent.ts` |
| `V1ListenPostParametersDetectLanguage` | `v1ListenPostParametersDetectLanguageSchema` | `src/models/unions/v1-listen-post-parameters-detect-language.ts` |
| `V1ListenPostParametersDiarizeModel` | `v1ListenPostParametersDiarizeModelSchema` | `src/models/v1-listen-post-parameters-diarize-model.ts` |
| `V1ListenPostParametersEncoding` | `v1ListenPostParametersEncodingSchema` | `src/models/v1-listen-post-parameters-encoding.ts` |
| `V1ListenPostParametersKeywords` | `v1ListenPostParametersKeywordsSchema` | `src/models/unions/v1-listen-post-parameters-keywords.ts` |
| `V1ListenPostParametersModel` | `v1ListenPostParametersModelSchema` | `src/models/unions/v1-listen-post-parameters-model.ts` |
| `V1ListenPostParametersRedact` | `v1ListenPostParametersRedactSchema` | `src/models/unions/v1-listen-post-parameters-redact.ts` |
| `V1ListenPostParametersReplace` | `v1ListenPostParametersReplaceSchema` | `src/models/unions/v1-listen-post-parameters-replace.ts` |
| `V1ListenPostParametersSearch` | `v1ListenPostParametersSearchSchema` | `src/models/unions/v1-listen-post-parameters-search.ts` |
| `V1ListenPostParametersVersion` | `v1ListenPostParametersVersionSchema` | `src/models/unions/v1-listen-post-parameters-version.ts` |
| `ListenV1RequestUrl` | `listenV1RequestUrlSchema` | `src/models/listen-v1-request-url.ts` |
| `ListenV1MediaTranscribeResponse200` | `listenV1MediaTranscribeResponse200Schema` | `src/models/unions/listen-v1-media-transcribe-response200.ts` |
| `ListenV1Response` | `listenV1ResponseSchema` | `src/models/listen-v1-response.ts` |

