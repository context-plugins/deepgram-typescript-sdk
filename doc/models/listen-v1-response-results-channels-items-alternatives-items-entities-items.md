
# Listen V1 Response Results Channels Items Alternatives Items Entities Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `label` | `string \| undefined` | Optional | - |
| `value` | `string \| undefined` | Optional | - |
| `rawValue` | `string \| undefined` | Optional | - |
| `confidence` | `number \| undefined` | Optional | - |
| `startWord` | `number \| undefined` | Optional | - |
| `endWord` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems,
} from 'rest-apilib';

const listenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems: ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems = {
  label: 'label6',
  value: 'value8',
  rawValue: 'raw_value2',
  confidence: 76.4,
  startWord: 94.56,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

