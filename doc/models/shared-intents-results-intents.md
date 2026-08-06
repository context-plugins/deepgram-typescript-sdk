
# Shared Intents Results Intents

*This model accepts additional fields of type unknown.*

## Structure

`SharedIntentsResultsIntents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segments` | [`SharedIntentsResultsIntentsSegmentsItems[] \| undefined`](../../doc/models/shared-intents-results-intents-segments-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedIntentsResultsIntents } from 'deepgram';

const sharedIntentsResultsIntents: SharedIntentsResultsIntents = {
  segments: [
    {
      text: 'text6',
      startWord: 4.96,
      endWord: 219.1,
      intents: [
        {
          intent: 'intent4',
          confidenceScore: 193.42,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      text: 'text6',
      startWord: 4.96,
      endWord: 219.1,
      intents: [
        {
          intent: 'intent4',
          confidenceScore: 193.42,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

