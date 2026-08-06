
# Shared Topics

Output whenever `topics=true` is used

*This model accepts additional fields of type unknown.*

## Structure

`SharedTopics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`SharedTopicsResults \| undefined`](../../doc/models/shared-topics-results.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedTopics } from 'deepgram';

const sharedTopics: SharedTopics = {
  results: {
    topics: {
      segments: [
        {
          text: 'text6',
          startWord: 4.96,
          endWord: 219.1,
          topics: [
            {
              topic: 'topic2',
              confidenceScore: 42.46,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              topic: 'topic2',
              confidenceScore: 42.46,
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

