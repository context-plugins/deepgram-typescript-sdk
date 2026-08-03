# Read V1 Text

```ts
const readV1TextApi = new ReadV1TextApi(client);
```

## Class Name

`ReadV1TextApi`


# Analyze

Analyze text content using Deepgrams text analysis API

:information_source: **Note** This endpoint does not require authentication.

```ts
async analyze(
  authorization: string,
  callback?: string,
  callbackMethod?: V1ListenPostParametersCallbackMethod,
  sentiment?: boolean,
  summarize?: V1ReadPostParametersSummarize,
  tag?: V1ReadPostParametersTag,
  topics?: boolean,
  customTopic?: V1ReadPostParametersCustomTopic,
  customTopicMode?: V1ListenPostParametersCustomTopicMode,
  intents?: boolean,
  customIntent?: V1ReadPostParametersCustomIntent,
  customIntentMode?: V1ListenPostParametersCustomTopicMode,
  language?: string,
  body?: ReadV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReadV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `callback` | `string \| undefined` | Query, Optional | URL to which we'll make the callback request |
| `callbackMethod` | [`V1ListenPostParametersCallbackMethod \| undefined`](../../doc/models/v1-listen-post-parameters-callback-method.md) | Query, Optional | HTTP method by which the callback request will be made<br><br>**Default**: `V1ListenPostParametersCallbackMethod.Post` |
| `sentiment` | `boolean \| undefined` | Query, Optional | Recognizes the sentiment throughout a transcript or text<br><br>**Default**: `false` |
| `summarize` | [`V1ReadPostParametersSummarize \| undefined`](../../doc/models/containers/v1-read-post-parameters-summarize.md) | Query, Optional | Summarize content. For Listen API, supports string version option. For Read API, accepts boolean only. |
| `tag` | [`V1ReadPostParametersTag \| undefined`](../../doc/models/containers/v1-read-post-parameters-tag.md) | Query, Optional | Label your requests for the purpose of identification during usage reporting |
| `topics` | `boolean \| undefined` | Query, Optional | Detect topics throughout a transcript or text<br><br>**Default**: `false` |
| `customTopic` | [`V1ReadPostParametersCustomTopic \| undefined`](../../doc/models/containers/v1-read-post-parameters-custom-topic.md) | Query, Optional | Custom topics you want the model to detect within your input audio or text if present Submit up to `100`. |
| `customTopicMode` | [`V1ListenPostParametersCustomTopicMode \| undefined`](../../doc/models/v1-listen-post-parameters-custom-topic-mode.md) | Query, Optional | Sets how the model will interpret strings submitted to the `custom_topic` param. When `strict`, the model will only return topics submitted using the `custom_topic` param. When `extended`, the model will return its own detected topics in addition to those submitted using the `custom_topic` param<br><br>**Default**: `V1ListenPostParametersCustomTopicMode.Extended` |
| `intents` | `boolean \| undefined` | Query, Optional | Recognizes speaker intent throughout a transcript or text<br><br>**Default**: `false` |
| `customIntent` | [`V1ReadPostParametersCustomIntent \| undefined`](../../doc/models/containers/v1-read-post-parameters-custom-intent.md) | Query, Optional | Custom intents you want the model to detect within your input audio if present |
| `customIntentMode` | [`V1ListenPostParametersCustomTopicMode \| undefined`](../../doc/models/v1-listen-post-parameters-custom-topic-mode.md) | Query, Optional | Sets how the model will interpret intents submitted to the `custom_intent` param. When `strict`, the model will only return intents submitted using the `custom_intent` param. When `extended`, the model will return its own detected intents in the `custom_intent` param.<br><br>**Default**: `V1ListenPostParametersCustomTopicMode.Extended` |
| `language` | `string \| undefined` | Query, Optional | The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available<br><br>**Default**: `'en'` |
| `body` | [`ReadV1Request \| undefined`](../../doc/models/containers/read-v1-request.md) | Body, Optional | Analyze a text file |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful text analysis

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ReadV1Response`](../../doc/models/read-v1-response.md).

## Example Usage

```ts
const authorization = 'Authorization8';

const callbackMethod = V1ListenPostParametersCallbackMethod.Post;

const sentiment = false;

const summarize: V1ReadPostParametersSummarize = false;

const topics = false;

const customTopicMode = V1ListenPostParametersCustomTopicMode.Extended;

const intents = false;

const customIntentMode = V1ListenPostParametersCustomTopicMode.Extended;

const language = 'en';

try {
  const response = await readV1TextApi.analyze(
    authorization,
    undefined,
    callbackMethod,
    sentiment,
    summarize,
    undefined,
    topics,
    undefined,
    customTopicMode,
    intents,
    undefined,
    customIntentMode,
    language
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

