
# Listen V1 Response Metadata

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionKey` | `string \| undefined` | Optional | **Default**: `'deprecated'` |
| `requestId` | `string` | Required | - |
| `sha256` | `string` | Required | - |
| `created` | `string` | Required | - |
| `duration` | `number` | Required | - |
| `channels` | `number` | Required | - |
| `models` | `string[]` | Required | - |
| `modelInfo` | `unknown` | Required | - |
| `summaryInfo` | [`ListenV1ResponseMetadataSummaryInfo \| undefined`](../../doc/models/listen-v1-response-metadata-summary-info.md) | Optional | - |
| `sentimentInfo` | [`ListenV1ResponseMetadataSentimentInfo \| undefined`](../../doc/models/listen-v1-response-metadata-sentiment-info.md) | Optional | - |
| `topicsInfo` | [`ListenV1ResponseMetadataTopicsInfo \| undefined`](../../doc/models/listen-v1-response-metadata-topics-info.md) | Optional | - |
| `intentsInfo` | [`ListenV1ResponseMetadataIntentsInfo \| undefined`](../../doc/models/listen-v1-response-metadata-intents-info.md) | Optional | - |
| `tags` | `string[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseMetadata } from 'rest-apilib';

const listenV1ResponseMetadata: ListenV1ResponseMetadata = {
  requestId: '00000a0c-0000-0000-0000-000000000000',
  sha256: 'sha2568',
  created: '2016-03-13T12:52:32.123Z',
  duration: 75.12,
  channels: 174,
  models: [
    'models2'
  ],
  modelInfo: { 'key1': 'val1', 'key2': 'val2' },
  transactionKey: 'deprecated',
  summaryInfo: {
    modelUuid: 'model_uuid4',
    inputTokens: 120,
    outputTokens: 120,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  sentimentInfo: {
    modelUuid: 'model_uuid6',
    inputTokens: 86,
    outputTokens: 86,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  topicsInfo: {
    modelUuid: 'model_uuid8',
    inputTokens: 156,
    outputTokens: 156,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  intentsInfo: {
    modelUuid: 'model_uuid6',
    inputTokens: 198,
    outputTokens: 198,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

