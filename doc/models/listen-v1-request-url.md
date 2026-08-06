
# Listen V1 Request Url

Audio file URL to transcribe

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1RequestUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1RequestUrl } from 'deepgram';

const listenV1RequestUrl: ListenV1RequestUrl = {
  url: 'url8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

