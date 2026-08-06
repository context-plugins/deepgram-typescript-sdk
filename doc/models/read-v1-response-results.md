
# Read V1 Response Results

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseResults`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `summary` | [`ReadV1ResponseResultsSummary \| undefined`](../../doc/models/read-v1-response-results-summary.md) | Optional | Output whenever `summary=true` is used |
| `topics` | [`SharedTopics \| undefined`](../../doc/models/shared-topics.md) | Optional | Output whenever `topics=true` is used |
| `intents` | [`SharedIntents \| undefined`](../../doc/models/shared-intents.md) | Optional | Output whenever `intents=true` is used |
| `sentiments` | [`SharedSentiments \| undefined`](../../doc/models/shared-sentiments.md) | Optional | Output whenever `sentiment=true` is used |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseResults } from 'deepgram';

const readV1ResponseResults: ReadV1ResponseResults = {
  summary: {
    results: {
      summary: {
        text: 'text8',
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
  },
  topics: {
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
  },
  intents: {
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
  },
  sentiments: {
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

