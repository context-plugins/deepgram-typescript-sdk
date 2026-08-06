
# Listen V1 Response Metadata Intents Info

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseMetadataIntentsInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelUuid` | `string \| undefined` | Optional | - |
| `inputTokens` | `number \| undefined` | Optional | - |
| `outputTokens` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseMetadataIntentsInfo } from 'deepgram';

const listenV1ResponseMetadataIntentsInfo: ListenV1ResponseMetadataIntentsInfo = {
  modelUuid: 'model_uuid8',
  inputTokens: 178,
  outputTokens: 178,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

