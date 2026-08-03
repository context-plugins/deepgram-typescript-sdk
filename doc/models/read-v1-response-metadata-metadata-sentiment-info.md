
# Read V1 Response Metadata Metadata Sentiment Info

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseMetadataMetadataSentimentInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelUuid` | `string \| undefined` | Optional | - |
| `inputTokens` | `number \| undefined` | Optional | - |
| `outputTokens` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseMetadataMetadataSentimentInfo } from 'rest-apilib';

const readV1ResponseMetadataMetadataSentimentInfo: ReadV1ResponseMetadataMetadataSentimentInfo = {
  modelUuid: '00001246-0000-0000-0000-000000000000',
  inputTokens: 124,
  outputTokens: 124,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

