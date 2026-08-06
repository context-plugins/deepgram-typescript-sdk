# Listen V1 Media

```ts
const listenV1MediaApi = new ListenV1MediaApi(client);
```

## Class Name

`ListenV1MediaApi`


# Transcribe

Transcribe audio and video using Deepgram's speech-to-text REST API

```ts
async transcribe(
  callback?: string,
  callbackMethod?: V1ListenPostParametersCallbackMethod,
  extra?: V1ListenPostParametersExtra,
  sentiment?: boolean,
  summarize?: V1ListenPostParametersSummarize,
  tag?: V1ListenPostParametersTag,
  topics?: boolean,
  customTopic?: V1ListenPostParametersCustomTopic,
  customTopicMode?: V1ListenPostParametersCustomTopicMode,
  intents?: boolean,
  customIntent?: V1ListenPostParametersCustomIntent,
  customIntentMode?: V1ListenPostParametersCustomTopicMode,
  detectEntities?: boolean,
  detectLanguage?: V1ListenPostParametersDetectLanguage,
  diarize?: boolean,
  diarizeModel?: V1ListenPostParametersDiarizeModel,
  dictation?: boolean,
  encoding?: V1ListenPostParametersEncoding,
  fillerWords?: boolean,
  keyterm?: string[],
  keywords?: V1ListenPostParametersKeywords,
  language?: string,
  measurements?: boolean,
  model?: TranscribeModel,
  multichannel?: boolean,
  numerals?: boolean,
  paragraphs?: boolean,
  profanityFilter?: boolean,
  punctuate?: boolean,
  redact?: TranscribeRedact,
  replace?: V1ListenPostParametersReplace,
  search?: V1ListenPostParametersSearch,
  smartFormat?: boolean,
  utterances?: boolean,
  uttSplit?: number,
  version?: TranscribeVersion,
  mipOptOut?: boolean,
  body?: ListenV1RequestUrl,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListenV1MediaTranscribeResponse200>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `callback` | `string \| undefined` | Query, Optional | URL to which we'll make the callback request |
| `callbackMethod` | [`V1ListenPostParametersCallbackMethod \| undefined`](../../doc/models/v1-listen-post-parameters-callback-method.md) | Query, Optional | HTTP method by which the callback request will be made<br><br>**Default**: `V1ListenPostParametersCallbackMethod.Post` |
| `extra` | [`V1ListenPostParametersExtra \| undefined`](../../doc/models/containers/v1-listen-post-parameters-extra.md) | Query, Optional | Arbitrary key-value pairs that are attached to the API response for usage in downstream processing |
| `sentiment` | `boolean \| undefined` | Query, Optional | Recognizes the sentiment throughout a transcript or text<br><br>**Default**: `false` |
| `summarize` | [`V1ListenPostParametersSummarize \| undefined`](../../doc/models/containers/v1-listen-post-parameters-summarize.md) | Query, Optional | Summarize content. For Listen API, supports string version option. For Read API, accepts boolean only. |
| `tag` | [`V1ListenPostParametersTag \| undefined`](../../doc/models/containers/v1-listen-post-parameters-tag.md) | Query, Optional | Label your requests for the purpose of identification during usage reporting |
| `topics` | `boolean \| undefined` | Query, Optional | Detect topics throughout a transcript or text<br><br>**Default**: `false` |
| `customTopic` | [`V1ListenPostParametersCustomTopic \| undefined`](../../doc/models/containers/v1-listen-post-parameters-custom-topic.md) | Query, Optional | Custom topics you want the model to detect within your input audio or text if present Submit up to `100`. |
| `customTopicMode` | [`V1ListenPostParametersCustomTopicMode \| undefined`](../../doc/models/v1-listen-post-parameters-custom-topic-mode.md) | Query, Optional | Sets how the model will interpret strings submitted to the `custom_topic` param. When `strict`, the model will only return topics submitted using the `custom_topic` param. When `extended`, the model will return its own detected topics in addition to those submitted using the `custom_topic` param<br><br>**Default**: `V1ListenPostParametersCustomTopicMode.Extended` |
| `intents` | `boolean \| undefined` | Query, Optional | Recognizes speaker intent throughout a transcript or text<br><br>**Default**: `false` |
| `customIntent` | [`V1ListenPostParametersCustomIntent \| undefined`](../../doc/models/containers/v1-listen-post-parameters-custom-intent.md) | Query, Optional | Custom intents you want the model to detect within your input audio if present |
| `customIntentMode` | [`V1ListenPostParametersCustomTopicMode \| undefined`](../../doc/models/v1-listen-post-parameters-custom-topic-mode.md) | Query, Optional | Sets how the model will interpret intents submitted to the `custom_intent` param. When `strict`, the model will only return intents submitted using the `custom_intent` param. When `extended`, the model will return its own detected intents in the `custom_intent` param.<br><br>**Default**: `V1ListenPostParametersCustomTopicMode.Extended` |
| `detectEntities` | `boolean \| undefined` | Query, Optional | Identifies and extracts key entities from content in submitted audio<br><br>**Default**: `false` |
| `detectLanguage` | [`V1ListenPostParametersDetectLanguage \| undefined`](../../doc/models/containers/v1-listen-post-parameters-detect-language.md) | Query, Optional | Identifies the dominant language spoken in submitted audio |
| `diarize` | `boolean \| undefined` | Query, Optional | Deprecated: use `diarize_model` instead. Recognize speaker changes. Each word in the transcript will be assigned a speaker number starting at 0.<br><br>**Default**: `false` |
| `diarizeModel` | [`V1ListenPostParametersDiarizeModel \| undefined`](../../doc/models/v1-listen-post-parameters-diarize-model.md) | Query, Optional | Select and enable a specific diarization model version. Specifying this parameter enables diarization and selects the model — you do not need to also set the deprecated `diarize=true` parameter. For batch, supported values are `latest` (currently v2), `v1`, and `v2`. For streaming, supported values are `latest` (currently v1) and `v1`; `v2` returns a validation error on streaming requests. |
| `dictation` | `boolean \| undefined` | Query, Optional | Dictation mode for controlling formatting with dictated speech<br><br>**Default**: `false` |
| `encoding` | [`V1ListenPostParametersEncoding \| undefined`](../../doc/models/v1-listen-post-parameters-encoding.md) | Query, Optional | Specify the expected encoding of your submitted audio |
| `fillerWords` | `boolean \| undefined` | Query, Optional | Filler Words can help transcribe interruptions in your audio, like "uh" and "um"<br><br>**Default**: `false` |
| `keyterm` | `string[] \| undefined` | Query, Optional | Key term prompting improves recognition of specialized terminology and brands. Only compatible with Nova-3.<br><br>`keyterm` accepts plain terms only. Unlike the legacy `keywords` feature, it does not support weights or intensifiers. Appending one (for example, `keyterm=term:0.15`) is not rejected—the weight is silently ignored and the entire value is treated as a literal keyterm.<br><br>To boost multiple separate keyterms, repeat the `keyterm` parameter (for example, `keyterm=term1&keyterm=term2`). To boost one multi-word phrase as a single keyterm, join the words with `%20` or `+` (for example, `keyterm=customer%20service`). Do not separate keyterms with commas, semicolons, or line breaks. |
| `keywords` | [`V1ListenPostParametersKeywords \| undefined`](../../doc/models/containers/v1-listen-post-parameters-keywords.md) | Query, Optional | Keywords can boost or suppress specialized terminology and brands |
| `language` | `string \| undefined` | Query, Optional | The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available<br><br>**Default**: `'en'` |
| `measurements` | `boolean \| undefined` | Query, Optional | Spoken measurements will be converted to their corresponding abbreviations<br><br>**Default**: `false` |
| `model` | [`TranscribeModel \| undefined`](../../doc/models/containers/transcribe-model.md) | Query, Optional | This is a container for one-of cases. |
| `multichannel` | `boolean \| undefined` | Query, Optional | Transcribe each audio channel independently<br><br>**Default**: `false` |
| `numerals` | `boolean \| undefined` | Query, Optional | Numerals converts numbers from written format to numerical format<br><br>**Default**: `false` |
| `paragraphs` | `boolean \| undefined` | Query, Optional | Splits audio into paragraphs to improve transcript readability<br><br>**Default**: `false` |
| `profanityFilter` | `boolean \| undefined` | Query, Optional | Profanity Filter looks for recognized profanity and converts it to the nearest recognized non-profane word or removes it from the transcript completely<br><br>**Default**: `false` |
| `punctuate` | `boolean \| undefined` | Query, Optional | Add punctuation and capitalization to the transcript<br><br>**Default**: `false` |
| `redact` | [`TranscribeRedact \| undefined`](../../doc/models/containers/transcribe-redact.md) | Query, Optional | This is a container for one-of cases. |
| `replace` | [`V1ListenPostParametersReplace \| undefined`](../../doc/models/containers/v1-listen-post-parameters-replace.md) | Query, Optional | Search for terms or phrases in submitted audio and replaces them |
| `search` | [`V1ListenPostParametersSearch \| undefined`](../../doc/models/containers/v1-listen-post-parameters-search.md) | Query, Optional | Search for terms or phrases in submitted audio |
| `smartFormat` | `boolean \| undefined` | Query, Optional | Apply formatting to transcript output. When set to true, additional formatting will be applied to transcripts to improve readability<br><br>**Default**: `false` |
| `utterances` | `boolean \| undefined` | Query, Optional | Segments speech into meaningful semantic units<br><br>**Default**: `false` |
| `uttSplit` | `number \| undefined` | Query, Optional | Seconds to wait before detecting a pause between words in submitted audio<br><br>**Default**: `0.8` |
| `version` | [`TranscribeVersion \| undefined`](../../doc/models/containers/transcribe-version.md) | Query, Optional | This is a container for one-of cases. |
| `mipOptOut` | `boolean \| undefined` | Query, Optional | Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip<br><br>**Default**: `false` |
| `body` | [`ListenV1RequestUrl \| undefined`](../../doc/models/listen-v1-request-url.md) | Body, Optional | Transcribe an audio or video file |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Returns either transcription results, or a request_id when using a callback.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `ListenV1MediaTranscribeResponse200`.

## Example Usage

```ts
const callbackMethod = V1ListenPostParametersCallbackMethod.Post;

const sentiment = false;

const summarize: V1ListenPostParametersSummarize = false;

const topics = false;

const customTopicMode = V1ListenPostParametersCustomTopicMode.Extended;

const intents = false;

const customIntentMode = V1ListenPostParametersCustomTopicMode.Extended;

const detectEntities = false;

const detectLanguage: V1ListenPostParametersDetectLanguage = false;

const diarize = false;

const dictation = false;

const fillerWords = false;

const language = 'en';

const measurements = false;

const multichannel = false;

const numerals = false;

const paragraphs = false;

const profanityFilter = false;

const punctuate = false;

const smartFormat = false;

const utterances = false;

const uttSplit = 0.8;

const mipOptOut = false;

try {
  const response = await listenV1MediaApi.transcribe(
    undefined,
    callbackMethod,
    undefined,
    sentiment,
    summarize,
    undefined,
    topics,
    undefined,
    customTopicMode,
    intents,
    undefined,
    customIntentMode,
    detectEntities,
    detectLanguage,
    diarize,
    undefined,
    dictation,
    undefined,
    fillerWords,
    undefined,
    undefined,
    language,
    measurements,
    undefined,
    multichannel,
    numerals,
    paragraphs,
    profanityFilter,
    punctuate,
    undefined,
    undefined,
    undefined,
    smartFormat,
    utterances,
    uttSplit,
    undefined,
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
    if (error instanceof ListenV1ResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | [`ListenV1ResponseError`](../../doc/models/listen-v1-response-error.md) |

