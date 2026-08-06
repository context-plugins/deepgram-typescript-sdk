
# Shared Sentiments Segments Items

*This model accepts additional fields of type unknown.*

## Structure

`SharedSentimentsSegmentsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| undefined` | Optional | - |
| `startWord` | `number \| undefined` | Optional | - |
| `endWord` | `number \| undefined` | Optional | - |
| `sentiment` | `string \| undefined` | Optional | - |
| `sentimentScore` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedSentimentsSegmentsItems } from 'deepgram';

const sharedSentimentsSegmentsItems: SharedSentimentsSegmentsItems = {
  text: 'text2',
  startWord: 75.32,
  endWord: 138.82,
  sentiment: 'sentiment8',
  sentimentScore: 252.5,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

