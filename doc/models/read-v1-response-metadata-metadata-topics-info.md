
# Read V1 Response Metadata Metadata Topics Info

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseMetadataMetadataTopicsInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelUuid` | `string \| undefined` | Optional | - |
| `inputTokens` | `number \| undefined` | Optional | - |
| `outputTokens` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseMetadataMetadataTopicsInfo } from 'rest-apilib';

const readV1ResponseMetadataMetadataTopicsInfo: ReadV1ResponseMetadataMetadataTopicsInfo = {
  modelUuid: '000011b4-0000-0000-0000-000000000000',
  inputTokens: 250,
  outputTokens: 250,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

