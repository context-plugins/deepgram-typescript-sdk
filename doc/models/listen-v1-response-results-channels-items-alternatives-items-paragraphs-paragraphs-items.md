
# Listen V1 Response Results Channels Items Alternatives Items Paragraphs Paragraphs Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sentences` | [`ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-alternatives-items-paragraphs-paragraphs-items-sentences-items.md) | Optional | - |
| `speaker` | `number \| undefined` | Optional | - |
| `numWords` | `number \| undefined` | Optional | - |
| `start` | `number \| undefined` | Optional | - |
| `end` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems,
} from 'deepgram';

const listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems: ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems = {
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
  speaker: 32,
  numWords: 220,
  start: 74.44,
  end: 118.38,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

