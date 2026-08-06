
# Shared Intents Results Intents Segments Items

*This model accepts additional fields of type unknown.*

## Structure

`SharedIntentsResultsIntentsSegmentsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| undefined` | Optional | - |
| `startWord` | `number \| undefined` | Optional | - |
| `endWord` | `number \| undefined` | Optional | - |
| `intents` | [`SharedIntentsResultsIntentsSegmentsItemsIntentsItems[] \| undefined`](../../doc/models/shared-intents-results-intents-segments-items-intents-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedIntentsResultsIntentsSegmentsItems } from 'deepgram';

const sharedIntentsResultsIntentsSegmentsItems: SharedIntentsResultsIntentsSegmentsItems = {
  text: 'text0',
  startWord: 65.3,
  endWord: 148.84,
  intents: [
    {
      intent: 'intent4',
      confidenceScore: 193.42,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      intent: 'intent4',
      confidenceScore: 193.42,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
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
};
```

