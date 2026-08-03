# Manage V1 Projects Usage Breakdown

```ts
const manageV1ProjectsUsageBreakdownApi = new ManageV1ProjectsUsageBreakdownApi(client);
```

## Class Name

`ManageV1ProjectsUsageBreakdownApi`


# Get

Retrieves the usage breakdown for a specific project, with various filter options by API feature or by groupings. Setting a feature (e.g. diarize) to true includes requests that used that feature, while false excludes requests that used it. Multiple true filters are combined with OR logic, while false filters use AND logic.

:information_source: **Note** This endpoint does not require authentication.

```ts
async get(
  projectId: string,
  authorization: string,
  start?: string,
  end?: string,
  grouping?: V1ProjectsProjectIdUsageBreakdownGetParametersGrouping,
  accessor?: string,
  alternatives?: boolean,
  callbackMethod?: boolean,
  callback?: boolean,
  channels?: boolean,
  customIntentMode?: boolean,
  customIntent?: boolean,
  customTopicMode?: boolean,
  customTopic?: boolean,
  deployment?: V1ProjectsProjectIdUsageBreakdownGetParametersDeployment,
  detectEntities?: boolean,
  detectLanguage?: boolean,
  diarize?: boolean,
  dictation?: boolean,
  encoding?: boolean,
  endpoint?: V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint,
  extra?: boolean,
  fillerWords?: boolean,
  intents?: boolean,
  keyterm?: boolean,
  keywords?: boolean,
  language?: boolean,
  measurements?: boolean,
  method?: V1ProjectsProjectIdUsageBreakdownGetParametersMethod,
  model?: string,
  multichannel?: boolean,
  numerals?: boolean,
  paragraphs?: boolean,
  profanityFilter?: boolean,
  punctuate?: boolean,
  redact?: boolean,
  replace?: boolean,
  sampleRate?: boolean,
  search?: boolean,
  sentiment?: boolean,
  smartFormat?: boolean,
  summarize?: boolean,
  tag?: string,
  topics?: boolean,
  uttSplit?: boolean,
  utterances?: boolean,
  version?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsageBreakdownV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `start` | `string \| undefined` | Query, Optional | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| `end` | `string \| undefined` | Query, Optional | End date of the requested date range. Format accepted is YYYY-MM-DD |
| `grouping` | [`V1ProjectsProjectIdUsageBreakdownGetParametersGrouping \| undefined`](../../doc/models/v1-projects-project-id-usage-breakdown-get-parameters-grouping.md) | Query, Optional | Common usage grouping parameters |
| `accessor` | `string \| undefined` | Query, Optional | Filter for requests where a specific accessor was used |
| `alternatives` | `boolean \| undefined` | Query, Optional | Filter for requests where alternatives were used |
| `callbackMethod` | `boolean \| undefined` | Query, Optional | Filter for requests where callback method was used |
| `callback` | `boolean \| undefined` | Query, Optional | Filter for requests where callback was used |
| `channels` | `boolean \| undefined` | Query, Optional | Filter for requests where channels were used |
| `customIntentMode` | `boolean \| undefined` | Query, Optional | Filter for requests where custom intent mode was used |
| `customIntent` | `boolean \| undefined` | Query, Optional | Filter for requests where custom intent was used |
| `customTopicMode` | `boolean \| undefined` | Query, Optional | Filter for requests where custom topic mode was used |
| `customTopic` | `boolean \| undefined` | Query, Optional | Filter for requests where custom topic was used |
| `deployment` | [`V1ProjectsProjectIdUsageBreakdownGetParametersDeployment \| undefined`](../../doc/models/v1-projects-project-id-usage-breakdown-get-parameters-deployment.md) | Query, Optional | Filter for requests where a specific deployment was used |
| `detectEntities` | `boolean \| undefined` | Query, Optional | Filter for requests where detect entities was used |
| `detectLanguage` | `boolean \| undefined` | Query, Optional | Filter for requests where detect language was used |
| `diarize` | `boolean \| undefined` | Query, Optional | Filter for requests where diarize was used |
| `dictation` | `boolean \| undefined` | Query, Optional | Filter for requests where dictation was used |
| `encoding` | `boolean \| undefined` | Query, Optional | Filter for requests where encoding was used |
| `endpoint` | [`V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint \| undefined`](../../doc/models/v1-projects-project-id-usage-breakdown-get-parameters-endpoint.md) | Query, Optional | Filter for requests where a specific endpoint was used |
| `extra` | `boolean \| undefined` | Query, Optional | Filter for requests where extra was used |
| `fillerWords` | `boolean \| undefined` | Query, Optional | Filter for requests where filler words was used |
| `intents` | `boolean \| undefined` | Query, Optional | Filter for requests where intents was used |
| `keyterm` | `boolean \| undefined` | Query, Optional | Filter for requests where keyterm was used |
| `keywords` | `boolean \| undefined` | Query, Optional | Filter for requests where keywords was used |
| `language` | `boolean \| undefined` | Query, Optional | Filter for requests where language was used |
| `measurements` | `boolean \| undefined` | Query, Optional | Filter for requests where measurements were used |
| `method` | [`V1ProjectsProjectIdUsageBreakdownGetParametersMethod \| undefined`](../../doc/models/v1-projects-project-id-usage-breakdown-get-parameters-method.md) | Query, Optional | Filter for requests where a specific method was used |
| `model` | `string \| undefined` | Query, Optional | Filter for requests where a specific model uuid was used |
| `multichannel` | `boolean \| undefined` | Query, Optional | Filter for requests where multichannel was used |
| `numerals` | `boolean \| undefined` | Query, Optional | Filter for requests where numerals were used |
| `paragraphs` | `boolean \| undefined` | Query, Optional | Filter for requests where paragraphs were used |
| `profanityFilter` | `boolean \| undefined` | Query, Optional | Filter for requests where profanity filter was used |
| `punctuate` | `boolean \| undefined` | Query, Optional | Filter for requests where punctuate was used |
| `redact` | `boolean \| undefined` | Query, Optional | Filter for requests where redact was used |
| `replace` | `boolean \| undefined` | Query, Optional | Filter for requests where replace was used |
| `sampleRate` | `boolean \| undefined` | Query, Optional | Filter for requests where sample rate was used |
| `search` | `boolean \| undefined` | Query, Optional | Filter for requests where search was used |
| `sentiment` | `boolean \| undefined` | Query, Optional | Filter for requests where sentiment was used |
| `smartFormat` | `boolean \| undefined` | Query, Optional | Filter for requests where smart format was used |
| `summarize` | `boolean \| undefined` | Query, Optional | Filter for requests where summarize was used |
| `tag` | `string \| undefined` | Query, Optional | Filter for requests where a specific tag was used |
| `topics` | `boolean \| undefined` | Query, Optional | Filter for requests where topics was used |
| `uttSplit` | `boolean \| undefined` | Query, Optional | Filter for requests where utt split was used |
| `utterances` | `boolean \| undefined` | Query, Optional | Filter for requests where utterances was used |
| `version` | `boolean \| undefined` | Query, Optional | Filter for requests where version was used |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Usage breakdown response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UsageBreakdownV1Response`](../../doc/models/usage-breakdown-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsUsageBreakdownApi.get(
    projectId,
    authorization
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

