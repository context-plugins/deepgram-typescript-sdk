
# Shared Intents Results

*This model accepts additional fields of type unknown.*

## Structure

`SharedIntentsResults`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `intents` | [`SharedIntentsResultsIntents \| undefined`](../../doc/models/shared-intents-results-intents.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedIntentsResults } from 'rest-apilib';

const sharedIntentsResults: SharedIntentsResults = {
  intents: {
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
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

