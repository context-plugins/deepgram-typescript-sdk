
# Listen V1 Response Results Channels Items Alternatives Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsAlternativesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transcript` | `string \| undefined` | Optional | - |
| `confidence` | `number \| undefined` | Optional | - |
| `words` | [`ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-alternatives-items-words-items.md) | Optional | - |
| `paragraphs` | [`ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs \| undefined`](../../doc/models/listen-v1-response-results-channels-items-alternatives-items-paragraphs.md) | Optional | - |
| `entities` | [`ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-alternatives-items-entities-items.md) | Optional | - |
| `summaries` | [`ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-alternatives-items-summaries-items.md) | Optional | - |
| `topics` | [`ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-alternatives-items-topics-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsAlternativesItems,
} from 'deepgram';

const listenV1ResponseResultsChannelsItemsAlternativesItems: ListenV1ResponseResultsChannelsItemsAlternativesItems = {
  transcript: 'transcript6',
  confidence: 101.86,
  words: [
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

