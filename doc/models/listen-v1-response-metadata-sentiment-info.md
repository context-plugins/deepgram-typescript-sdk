
# Listen V1 Response Metadata Sentiment Info

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseMetadataSentimentInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelUuid` | `string \| undefined` | Optional | - |
| `inputTokens` | `number \| undefined` | Optional | - |
| `outputTokens` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseMetadataSentimentInfo } from 'deepgram';

const listenV1ResponseMetadataSentimentInfo: ListenV1ResponseMetadataSentimentInfo = {
  modelUuid: 'model_uuid4',
  inputTokens: 242,
  outputTokens: 242,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

