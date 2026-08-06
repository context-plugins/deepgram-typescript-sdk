
# Listen V1 Response Results Channels Items Alternatives Items Paragraphs Paragraphs Items Sentences Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| undefined` | Optional | - |
| `start` | `number \| undefined` | Optional | - |
| `end` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems,
} from 'deepgram';

const listenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems: ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems = {
  text: 'text6',
  start: 243.88,
  end: 31.82,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

