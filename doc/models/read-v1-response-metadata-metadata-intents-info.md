
# Read V1 Response Metadata Metadata Intents Info

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseMetadataMetadataIntentsInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelUuid` | `string \| undefined` | Optional | - |
| `inputTokens` | `number \| undefined` | Optional | - |
| `outputTokens` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseMetadataMetadataIntentsInfo } from 'deepgram';

const readV1ResponseMetadataMetadataIntentsInfo: ReadV1ResponseMetadataMetadataIntentsInfo = {
  modelUuid: '00000344-0000-0000-0000-000000000000',
  inputTokens: 138,
  outputTokens: 138,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

