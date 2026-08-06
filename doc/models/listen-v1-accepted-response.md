
# Listen V1 Accepted Response

Accepted response for asynchronous transcription requests

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1AcceptedResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Required | Unique identifier for tracking the asynchronous request |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1AcceptedResponse } from 'deepgram';

const listenV1AcceptedResponse: ListenV1AcceptedResponse = {
  requestId: '000016c8-0000-0000-0000-000000000000',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

