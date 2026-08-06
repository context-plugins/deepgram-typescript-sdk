
# Listen V1 Response Results Channels Items Alternatives Items Topics Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| undefined` | Optional | - |
| `startWord` | `number \| undefined` | Optional | - |
| `endWord` | `number \| undefined` | Optional | - |
| `topics` | `string[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems,
} from 'deepgram';

const listenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems: ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems = {
  text: 'text2',
  startWord: 38.88,
  endWord: 253.02,
  topics: [
    'topics7',
    'topics8',
    'topics9'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

