
# Speak V2 Accepted Response

Accepted response returned when a callback URL is supplied; the audio is delivered asynchronously to that URL.

*This model accepts additional fields of type unknown.*

## Structure

`SpeakV2AcceptedResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string` | Required | Unique identifier for tracking the asynchronous request |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SpeakV2AcceptedResponse } from 'deepgram';

const speakV2AcceptedResponse: SpeakV2AcceptedResponse = {
  requestId: '00001fa4-0000-0000-0000-000000000000',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

