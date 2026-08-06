
# Read V1 Response

The standard text response

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | [`ReadV1ResponseMetadata`](../../doc/models/read-v1-response-metadata.md) | Required | - |
| `results` | [`ReadV1ResponseResults`](../../doc/models/read-v1-response-results.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1Response } from 'deepgram';

const readV1Response: ReadV1Response = {
  metadata: {
    metadata: {
      requestId: '000018ae-0000-0000-0000-000000000000',
      created: '2016-03-13T12:52:32.123Z',
      language: 'language8',
      summaryInfo: {
        modelUuid: '00000e32-0000-0000-0000-000000000000',
        inputTokens: 120,
        outputTokens: 120,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      sentimentInfo: {
        modelUuid: '00001640-0000-0000-0000-000000000000',
        inputTokens: 86,
        outputTokens: 86,
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
  results: {
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

