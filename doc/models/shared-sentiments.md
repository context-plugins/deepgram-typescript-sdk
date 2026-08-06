
# Shared Sentiments

Output whenever `sentiment=true` is used

*This model accepts additional fields of type unknown.*

## Structure

`SharedSentiments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segments` | [`SharedSentimentsSegmentsItems[] \| undefined`](../../doc/models/shared-sentiments-segments-items.md) | Optional | - |
| `average` | [`SharedSentimentsAverage \| undefined`](../../doc/models/shared-sentiments-average.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedSentiments } from 'deepgram';

const sharedSentiments: SharedSentiments = {
  segments: [
    {
      text: 'text6',
      startWord: 4.96,
      endWord: 219.1,
      sentiment: 'sentiment6',
      sentimentScore: 76.78,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      text: 'text6',
      startWord: 4.96,
      endWord: 219.1,
      sentiment: 'sentiment6',
      sentimentScore: 76.78,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  average: {
    sentiment: 'sentiment8',
    sentimentScore: 2.7,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

