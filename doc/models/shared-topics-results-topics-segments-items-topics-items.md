
# Shared Topics Results Topics Segments Items Topics Items

*This model accepts additional fields of type unknown.*

## Structure

`SharedTopicsResultsTopicsSegmentsItemsTopicsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `topic` | `string \| undefined` | Optional | - |
| `confidenceScore` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedTopicsResultsTopicsSegmentsItemsTopicsItems } from 'deepgram';

const sharedTopicsResultsTopicsSegmentsItemsTopicsItems: SharedTopicsResultsTopicsSegmentsItemsTopicsItems = {
  topic: 'topic8',
  confidenceScore: 62.12,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

