
# Listen V1 Response Results Channels Items Alternatives Items Summaries Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `summary` | `string \| undefined` | Optional | - |
| `startWord` | `number \| undefined` | Optional | - |
| `endWord` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems,
} from 'rest-apilib';

const listenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems: ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems = {
  summary: 'summary8',
  startWord: 11.54,
  endWord: 53.4,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

