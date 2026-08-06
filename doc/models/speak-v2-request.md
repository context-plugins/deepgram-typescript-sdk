
# Speak V2 Request

Request body for Flux TTS batch (REST) text-to-speech conversion. The full block of text is synthesized in a single request and returned as one audio response.

*This model accepts additional fields of type unknown.*

## Structure

`SpeakV2Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | The text content to be converted to speech. The server normalizes and preprocesses the text (e.g. stripping inline controls) before synthesis. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SpeakV2Request } from 'deepgram';

const speakV2Request: SpeakV2Request = {
  text: 'text2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

