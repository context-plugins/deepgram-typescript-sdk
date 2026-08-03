
# Listen V1 Response Results Channels Items Search Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsSearchItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | `string \| undefined` | Optional | - |
| `hits` | [`ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems[] \| undefined`](../../doc/models/listen-v1-response-results-channels-items-search-items-hits-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseResultsChannelsItemsSearchItems } from 'rest-apilib';

const listenV1ResponseResultsChannelsItemsSearchItems: ListenV1ResponseResultsChannelsItemsSearchItems = {
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
    },
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
};
```

