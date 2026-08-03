
# Listen V1 Response Results Channels Items Alternatives Items Words Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string \| undefined` | Optional | - |
| `start` | `number \| undefined` | Optional | - |
| `end` | `number \| undefined` | Optional | - |
| `confidence` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems,
} from 'rest-apilib';

const listenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems: ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems = {
  word: 'word0',
  start: 212.92,
  end: 0.86,
  confidence: 211.02,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

