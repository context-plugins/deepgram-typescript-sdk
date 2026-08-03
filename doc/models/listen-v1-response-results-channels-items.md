
# Listen V1 Response Results Channels Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`ListenV1ResponseResultsChannelsItemsSearchItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-search-items.md) | Optional | - |
| `alternatives` | [`ListenV1ResponseResultsChannelsItemsAlternativesItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-alternatives-items.md) | Optional | - |
| `detectedLanguage` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseResultsChannelsItems } from 'rest-apilib';

const listenV1ResponseResultsChannelsItems: ListenV1ResponseResultsChannelsItems = {
  search: [
    {
      query: 'query2',
      hits: [
        {
          confidence: 144.74,
          start: 146.64,
          end: 190.58,
          snippet: 'snippet0',
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
  alternatives: [
    {
      transcript: 'transcript6',
      confidence: 34.78,
      words: [
        {
          word: 'word0',
          start: 58.62,
          end: 102.56,
          confidence: 56.72,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          word: 'word0',
          start: 58.62,
          end: 102.56,
          confidence: 56.72,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      paragraphs: {
        transcript: 'transcript2',
        paragraphs: [
          {
            sentences: [
              {
                text: 'text2',
                start: 16.92,
                end: 60.86,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                text: 'text2',
                start: 16.92,
                end: 60.86,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            speaker: 128,
            numWords: 60,
            start: 34.44,
            end: 78.38,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          {
            sentences: [
              {
                text: 'text2',
                start: 16.92,
                end: 60.86,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                text: 'text2',
                start: 16.92,
                end: 60.86,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            speaker: 128,
            numWords: 60,
            start: 34.44,
            end: 78.38,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          {
            sentences: [
              {
                text: 'text2',
                start: 16.92,
                end: 60.86,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                text: 'text2',
                start: 16.92,
                end: 60.86,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            speaker: 128,
            numWords: 60,
            start: 34.44,
            end: 78.38,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      entities: [
        {
          label: 'label0',
          value: 'value2',
          rawValue: 'raw_value6',
          confidence: 136.04,
          startWord: 101.8,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          label: 'label0',
          value: 'value2',
          rawValue: 'raw_value6',
          confidence: 136.04,
          startWord: 101.8,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          label: 'label0',
          value: 'value2',
          rawValue: 'raw_value6',
          confidence: 136.04,
          startWord: 101.8,
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
  detectedLanguage: 'detected_language4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

