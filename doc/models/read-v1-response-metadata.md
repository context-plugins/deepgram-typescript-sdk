
# Read V1 Response Metadata

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | [`ReadV1ResponseMetadataMetadata \| undefined`](../../doc/models/read-v1-response-metadata-metadata.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseMetadata } from 'rest-apilib';

const readV1ResponseMetadata: ReadV1ResponseMetadata = {
  metadata: {
    requestId: '000018ae-0000-0000-0000-000000000000',
    created: '2016-03-13T12:52:32.123Z',
    language: 'language8',
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

