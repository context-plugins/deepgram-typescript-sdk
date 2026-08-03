
# Shared Intents Results Intents Segments Items Intents Items

*This model accepts additional fields of type unknown.*

## Structure

`SharedIntentsResultsIntentsSegmentsItemsIntentsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `intent` | `string \| undefined` | Optional | - |
| `confidenceScore` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  SharedIntentsResultsIntentsSegmentsItemsIntentsItems,
} from 'rest-apilib';

const sharedIntentsResultsIntentsSegmentsItemsIntentsItems: SharedIntentsResultsIntentsSegmentsItemsIntentsItems = {
  intent: 'intent6',
  confidenceScore: 63.1,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

