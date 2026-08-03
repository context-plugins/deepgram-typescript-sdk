
# Shared Intents

Output whenever `intents=true` is used

*This model accepts additional fields of type unknown.*

## Structure

`SharedIntents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`SharedIntentsResults \| undefined`](../../doc/models/shared-intents-results.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedIntents } from 'rest-apilib';

const sharedIntents: SharedIntents = {
  results: {
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

