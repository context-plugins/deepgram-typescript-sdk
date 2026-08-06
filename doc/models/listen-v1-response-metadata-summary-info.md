
# Listen V1 Response Metadata Summary Info

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseMetadataSummaryInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelUuid` | `string \| undefined` | Optional | - |
| `inputTokens` | `number \| undefined` | Optional | - |
| `outputTokens` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseMetadataSummaryInfo } from 'deepgram';

const listenV1ResponseMetadataSummaryInfo: ListenV1ResponseMetadataSummaryInfo = {
  modelUuid: 'model_uuid8',
  inputTokens: 104,
  outputTokens: 104,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

