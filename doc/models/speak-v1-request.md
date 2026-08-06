
# Speak V1 Request

Request body for text-to-speech conversion

*This model accepts additional fields of type unknown.*

## Structure

`SpeakV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | The text content to be converted to speech |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SpeakV1Request } from 'deepgram';

const speakV1Request: SpeakV1Request = {
  text: 'text2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

