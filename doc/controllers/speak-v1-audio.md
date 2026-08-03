# Speak V1 Audio

```ts
const speakV1AudioApi = new SpeakV1AudioApi(client);
```

## Class Name

`SpeakV1AudioApi`


# Generate

Convert text into natural-sounding speech using Deepgram's TTS REST API

:information_source: **Note** This endpoint does not require authentication.

```ts
async generate(
  authorization: string,
  callback?: string,
  callbackMethod?: V1ListenPostParametersCallbackMethod,
  mipOptOut?: boolean,
  tag?: V1SpeakPostParametersTag,
  bitRate?: GenerateBitRate,
  container?: GenerateContainer,
  encoding?: GenerateEncoding,
  model?: V1SpeakPostParametersModel,
  sampleRate?: GenerateSampleRate,
  speed?: number,
  body?: SpeakV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown | undefined>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `callback` | `string \| undefined` | Query, Optional | URL to which we'll make the callback request |
| `callbackMethod` | [`V1ListenPostParametersCallbackMethod \| undefined`](../../doc/models/v1-listen-post-parameters-callback-method.md) | Query, Optional | HTTP method by which the callback request will be made<br><br>**Default**: `V1ListenPostParametersCallbackMethod.Post` |
| `mipOptOut` | `boolean \| undefined` | Query, Optional | Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip<br><br>**Default**: `false` |
| `tag` | [`V1SpeakPostParametersTag \| undefined`](../../doc/models/containers/v1-speak-post-parameters-tag.md) | Query, Optional | Label your requests for the purpose of identification during usage reporting |
| `bitRate` | [`GenerateBitRate \| undefined`](../../doc/models/containers/generate-bit-rate.md) | Query, Optional | This is a container for one-of cases. |
| `container` | [`GenerateContainer \| undefined`](../../doc/models/containers/generate-container.md) | Query, Optional | This is a container for one-of cases. |
| `encoding` | [`GenerateEncoding \| undefined`](../../doc/models/containers/generate-encoding.md) | Query, Optional | This is a container for one-of cases. |
| `model` | [`V1SpeakPostParametersModel \| undefined`](../../doc/models/v1-speak-post-parameters-model.md) | Query, Optional | AI model used to process submitted text<br><br>**Default**: `V1SpeakPostParametersModel.Auraasteriaen` |
| `sampleRate` | [`GenerateSampleRate \| undefined`](../../doc/models/containers/generate-sample-rate.md) | Query, Optional | This is a container for one-of cases. |
| `speed` | `number \| undefined` | Query, Optional | Speaking rate multiplier that adjusts the pace of generated speech while preserving natural prosody and voice quality. Not yet supported in all languages.<br><br>**Default**: `1` |
| `body` | [`SpeakV1Request \| undefined`](../../doc/models/speak-v1-request.md) | Body, Optional | Transform text to speech |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful text-to-speech transformation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const authorization = 'Authorization8';

const callbackMethod = V1ListenPostParametersCallbackMethod.Post;

const mipOptOut = false;

const model = V1SpeakPostParametersModel.Auraasteriaen;

const speed = 1;

try {
  const response = await speakV1AudioApi.generate(
    authorization,
    undefined,
    callbackMethod,
    mipOptOut,
    undefined,
    undefined,
    undefined,
    undefined,
    model,
    undefined,
    speed
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

