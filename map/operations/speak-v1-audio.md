<!-- Generated file — do not edit; regenerated with the SDK. -->

# SpeakV1Audio — operations

Accessor: `client.speakV1Audio` · Source: `src/resources/speak-v1-audio.ts` · 1 operation · Request and error types: namespace `SpeakV1Audio`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generate

- **Signature**: `generate(request: SpeakV1Audio.GenerateRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, SpeakV1Audio.GenerateError>`
- **Wire**: `POST /v1/speak`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `SpeakV1Audio.GenerateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpeakV1Audio.GenerateRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `callback` | `query` | — | `string` | no | — |
| `callbackMethod` | `query` | `callback_method` | `V1ListenPostParametersCallbackMethod` | no | `V1ListenPostParametersCallbackMethod.Post` |
| `mipOptOut` | `query` | `mip_opt_out` | `boolean` | no | `false` |
| `tag` | `query` | — | `V1SpeakPostParametersTag` | no | — |
| `bitRate` | `query` | `bit_rate` | `V1SpeakPostParametersBitRate` | no | — |
| `container` | `query` | — | `V1SpeakPostParametersContainer` | no | — |
| `encoding` | `query` | — | `V1SpeakPostParametersEncoding` | no | — |
| `model` | `query` | — | `V1SpeakPostParametersModel` | no | `V1SpeakPostParametersModel.AuraAsteriaEn` |
| `sampleRate` | `query` | `sample_rate` | `V1SpeakPostParametersSampleRate` | no | — |
| `speed` | `query` | — | `number` | no | `1` |
| `body` | `body` | — | `SpeakV1Request` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ListenPostParametersCallbackMethod` | `v1ListenPostParametersCallbackMethodSchema` | `src/models/v1-listen-post-parameters-callback-method.ts` |
| `V1SpeakPostParametersTag` | `v1SpeakPostParametersTagSchema` | `src/models/unions/v1-speak-post-parameters-tag.ts` |
| `V1SpeakPostParametersBitRate` | `v1SpeakPostParametersBitRateSchema` | `src/models/unions/v1-speak-post-parameters-bit-rate.ts` |
| `V1SpeakPostParametersContainer` | `v1SpeakPostParametersContainerSchema` | `src/models/unions/v1-speak-post-parameters-container.ts` |
| `V1SpeakPostParametersEncoding` | `v1SpeakPostParametersEncodingSchema` | `src/models/unions/v1-speak-post-parameters-encoding.ts` |
| `V1SpeakPostParametersModel` | `v1SpeakPostParametersModelSchema` | `src/models/v1-speak-post-parameters-model.ts` |
| `V1SpeakPostParametersSampleRate` | `v1SpeakPostParametersSampleRateSchema` | `src/models/unions/v1-speak-post-parameters-sample-rate.ts` |
| `SpeakV1Request` | `speakV1RequestSchema` | `src/models/speak-v1-request.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

