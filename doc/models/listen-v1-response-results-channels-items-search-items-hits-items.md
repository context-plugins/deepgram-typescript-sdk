
# Listen V1 Response Results Channels Items Search Items Hits Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `confidence` | `number \| undefined` | Optional | - |
| `start` | `number \| undefined` | Optional | - |
| `end` | `number \| undefined` | Optional | - |
| `snippet` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems,
} from 'rest-apilib';

const listenV1ResponseResultsChannelsItemsSearchItemsHitsItems: ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems = {
  confidence: 94.16,
  start: 96.06,
  end: 140,
  snippet: 'snippet8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

