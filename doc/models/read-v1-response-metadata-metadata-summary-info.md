
# Read V1 Response Metadata Metadata Summary Info

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseMetadataMetadataSummaryInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelUuid` | `string \| undefined` | Optional | - |
| `inputTokens` | `number \| undefined` | Optional | - |
| `outputTokens` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseMetadataMetadataSummaryInfo } from 'rest-apilib';

const readV1ResponseMetadataMetadataSummaryInfo: ReadV1ResponseMetadataMetadataSummaryInfo = {
  modelUuid: '0000078a-0000-0000-0000-000000000000',
  inputTokens: 128,
  outputTokens: 128,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

