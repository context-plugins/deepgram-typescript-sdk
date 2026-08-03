# Speak V2 Audio

```ts
const speakV2AudioApi = new SpeakV2AudioApi(client);
```

## Class Name

`SpeakV2AudioApi`


# Generate

Synthesize a complete block of text into a single audio response using Deepgram's Flux TTS batch (REST) API. Use this for pre-rendering fixed audio (IVR prompts, notifications, narration) where the whole text is known up front and you don't need incremental playback or interruption.

:information_source: **Note** This endpoint does not require authentication.

```ts
async generate(
  model: string,
  authorization: string,
  callback?: string,
  callbackMethod?: V1ListenPostParametersCallbackMethod,
  mipOptOut?: boolean,
  tag?: V2SpeakPostParametersTag,
  bitRate?: GenerateBitRate2,
  container?: GenerateContainer2,
  encoding?: GenerateEncoding2,
  sampleRate?: GenerateSampleRate2,
  priority?: V2SpeakPostParametersPriority,
  body?: SpeakV2Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SpeakV2AcceptedResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `model` | `string` | Query, Required | Flux TTS model used to synthesize the submitted text, in the form `flux-{voice}-{language}` (for example, `flux-alexis-en`). Required; unlike the v1 (Aura) endpoint there is no default and only flux models are accepted. English-only at launch. |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `callback` | `string \| undefined` | Query, Optional | URL to which we'll make the callback request |
| `callbackMethod` | [`V1ListenPostParametersCallbackMethod \| undefined`](../../doc/models/v1-listen-post-parameters-callback-method.md) | Query, Optional | HTTP method by which the callback request will be made<br><br>**Default**: `V1ListenPostParametersCallbackMethod.Post` |
| `mipOptOut` | `boolean \| undefined` | Query, Optional | Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip<br><br>**Default**: `false` |
| `tag` | [`V2SpeakPostParametersTag \| undefined`](../../doc/models/containers/v2-speak-post-parameters-tag.md) | Query, Optional | Label your requests for the purpose of identification during usage reporting |
| `bitRate` | [`GenerateBitRate2 \| undefined`](../../doc/models/containers/generate-bit-rate-2.md) | Query, Optional | This is a container for one-of cases. |
| `container` | [`GenerateContainer2 \| undefined`](../../doc/models/containers/generate-container-2.md) | Query, Optional | This is a container for one-of cases. |
| `encoding` | [`GenerateEncoding2 \| undefined`](../../doc/models/containers/generate-encoding-2.md) | Query, Optional | This is a container for one-of cases. |
| `sampleRate` | [`GenerateSampleRate2 \| undefined`](../../doc/models/containers/generate-sample-rate-2.md) | Query, Optional | This is a container for one-of cases. |
| `priority` | [`V2SpeakPostParametersPriority \| undefined`](../../doc/models/v2-speak-post-parameters-priority.md) | Query, Optional | Processing priority for asynchronous (callback) requests. The only supported value is low. |
| `body` | [`SpeakV2Request \| undefined`](../../doc/models/speak-v2-request.md) | Body, Optional | Transform text to speech |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Returns the synthesized audio in the requested encoding as a binary stream. When a `callback` URL is supplied, the request is processed asynchronously and the response body is instead a JSON acknowledgement (Content-Type `application/json`) of the form {"request_id": "..."}, with the audio delivered to the callback URL. Because this endpoint is typed as a binary audio stream, SDK callers that set `callback` receive this JSON acknowledgement through the audio byte iterator as raw bytes and must join the chunks and parse `request_id` themselves.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SpeakV2AcceptedResponse`](../../doc/models/speak-v2-accepted-response.md).

## Example Usage

```ts
const model = 'model2';

const authorization = 'Authorization8';

const callbackMethod = V1ListenPostParametersCallbackMethod.Post;

const mipOptOut = false;

try {
  const response = await speakV2AudioApi.generate(
    model,
    authorization,
    undefined,
    callbackMethod,
    mipOptOut
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | `ApiError` |

