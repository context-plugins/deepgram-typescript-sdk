
# Shared Sentiments Average

*This model accepts additional fields of type unknown.*

## Structure

`SharedSentimentsAverage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sentiment` | `string \| undefined` | Optional | - |
| `sentimentScore` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedSentimentsAverage } from 'deepgram';

const sharedSentimentsAverage: SharedSentimentsAverage = {
  sentiment: 'sentiment2',
  sentimentScore: 148.84,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

