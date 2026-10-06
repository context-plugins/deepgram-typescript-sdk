<!-- Generated file — do not edit; regenerated with the SDK. -->

# SpeakV2Audio — operations

Accessor: `client.speakV2Audio` · Source: `src/resources/speak-v2-audio.ts` · 1 operation · Request and error types: namespace `SpeakV2Audio`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generate2

- **Signature**: `generate2(request: SpeakV2Audio.Generate2Request, options?: RequestOptions): ApiPromise<SpeakV2AcceptedResponse, SpeakV2Audio.Generate2Error>`
- **Wire**: `POST /v2/speak`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SpeakV2AcceptedResponse`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `SpeakV2Audio.Generate2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpeakV2Audio.Generate2Request` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `model` | `query` | — | `string` | yes | — |
| `callback` | `query` | — | `string` | no | — |
| `callbackMethod` | `query` | `callback_method` | `V1ListenPostParametersCallbackMethod` | no | `V1ListenPostParametersCallbackMethod.Post` |
| `mipOptOut` | `query` | `mip_opt_out` | `boolean` | no | `false` |
| `tag` | `query` | — | `V2SpeakPostParametersTag` | no | — |
| `bitRate` | `query` | `bit_rate` | `V2SpeakPostParametersBitRate` | no | — |
| `container` | `query` | — | `V2SpeakPostParametersContainer` | no | — |
| `encoding` | `query` | — | `V2SpeakPostParametersEncoding` | no | — |
| `sampleRate` | `query` | `sample_rate` | `V2SpeakPostParametersSampleRate` | no | — |
| `priority` | `query` | — | `V2SpeakPostParametersPriority` | no | — |
| `body` | `body` | — | `SpeakV2Request` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ListenPostParametersCallbackMethod` | `v1ListenPostParametersCallbackMethodSchema` | `src/models/v1-listen-post-parameters-callback-method.ts` |
| `V2SpeakPostParametersTag` | `v2SpeakPostParametersTagSchema` | `src/models/unions/v2-speak-post-parameters-tag.ts` |
| `V2SpeakPostParametersBitRate` | `v2SpeakPostParametersBitRateSchema` | `src/models/unions/v2-speak-post-parameters-bit-rate.ts` |
| `V2SpeakPostParametersContainer` | `v2SpeakPostParametersContainerSchema` | `src/models/unions/v2-speak-post-parameters-container.ts` |
| `V2SpeakPostParametersEncoding` | `v2SpeakPostParametersEncodingSchema` | `src/models/unions/v2-speak-post-parameters-encoding.ts` |
| `V2SpeakPostParametersSampleRate` | `v2SpeakPostParametersSampleRateSchema` | `src/models/unions/v2-speak-post-parameters-sample-rate.ts` |
| `V2SpeakPostParametersPriority` | `v2SpeakPostParametersPrioritySchema` | `src/models/v2-speak-post-parameters-priority.ts` |
| `SpeakV2Request` | `speakV2RequestSchema` | `src/models/speak-v2-request.ts` |
| `SpeakV2AcceptedResponse` | `speakV2AcceptedResponseSchema` | `src/models/speak-v2-accepted-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

