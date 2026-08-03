
# Listen V1 Response Results Channels Items Alternatives Items Paragraphs

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transcript` | `string \| undefined` | Optional | - |
| `paragraphs` | [`ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-alternatives-items-paragraphs-paragraphs-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs,
} from 'rest-apilib';

const listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs: ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs = {
  transcript: 'transcript4',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

