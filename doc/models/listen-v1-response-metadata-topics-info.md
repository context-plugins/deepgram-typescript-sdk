
# Listen V1 Response Metadata Topics Info

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseMetadataTopicsInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelUuid` | `string \| undefined` | Optional | - |
| `inputTokens` | `number \| undefined` | Optional | - |
| `outputTokens` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseMetadataTopicsInfo } from 'deepgram';

const listenV1ResponseMetadataTopicsInfo: ListenV1ResponseMetadataTopicsInfo = {
  modelUuid: 'model_uuid6',
  inputTokens: 24,
  outputTokens: 24,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

