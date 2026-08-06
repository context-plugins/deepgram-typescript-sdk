
# Read V1 Response Metadata Metadata

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseMetadataMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | - |
| `created` | `string \| undefined` | Optional | - |
| `language` | `string \| undefined` | Optional | - |
| `summaryInfo` | [`ReadV1ResponseMetadataMetadataSummaryInfo \| undefined`](../../doc/models/read-v1-response-metadata-metadata-summary-info.md) | Optional | - |
| `sentimentInfo` | [`ReadV1ResponseMetadataMetadataSentimentInfo \| undefined`](../../doc/models/read-v1-response-metadata-metadata-sentiment-info.md) | Optional | - |
| `topicsInfo` | [`ReadV1ResponseMetadataMetadataTopicsInfo \| undefined`](../../doc/models/read-v1-response-metadata-metadata-topics-info.md) | Optional | - |
| `intentsInfo` | [`ReadV1ResponseMetadataMetadataIntentsInfo \| undefined`](../../doc/models/read-v1-response-metadata-metadata-intents-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseMetadataMetadata } from 'deepgram';

const readV1ResponseMetadataMetadata: ReadV1ResponseMetadataMetadata = {
  requestId: '000016b8-0000-0000-0000-000000000000',
  created: '2016-03-13T12:52:32.123Z',
  language: 'language4',
  summaryInfo: {
    modelUuid: '00000e32-0000-0000-0000-000000000000',
    inputTokens: 120,
    outputTokens: 120,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  sentimentInfo: {
    modelUuid: '00001640-0000-0000-0000-000000000000',
    inputTokens: 86,
    outputTokens: 86,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

