
# Listen V1 Response Results Utterances Items Words Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsUtterancesItemsWordsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string \| undefined` | Optional | - |
| `start` | `number \| undefined` | Optional | - |
| `end` | `number \| undefined` | Optional | - |
| `confidence` | `number \| undefined` | Optional | - |
| `speaker` | `number \| undefined` | Optional | - |
| `speakerConfidence` | `number \| undefined` | Optional | - |
| `punctuatedWord` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsUtterancesItemsWordsItems,
} from 'rest-apilib';

const listenV1ResponseResultsUtterancesItemsWordsItems: ListenV1ResponseResultsUtterancesItemsWordsItems = {
  word: 'word6',
  start: 61.58,
  end: 105.52,
  confidence: 59.68,
  speaker: 26,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

