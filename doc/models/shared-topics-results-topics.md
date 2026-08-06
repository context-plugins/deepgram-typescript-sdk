
# Shared Topics Results Topics

*This model accepts additional fields of type unknown.*

## Structure

`SharedTopicsResultsTopics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segments` | [`SharedTopicsResultsTopicsSegmentsItems[] \| undefined`](../../doc/models/shared-topics-results-topics-segments-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedTopicsResultsTopics } from 'deepgram';

const sharedTopicsResultsTopics: SharedTopicsResultsTopics = {
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
};
```

