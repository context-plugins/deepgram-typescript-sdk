
# Shared Topics Results Topics Segments Items

*This model accepts additional fields of type unknown.*

## Structure

`SharedTopicsResultsTopicsSegmentsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| undefined` | Optional | - |
| `startWord` | `number \| undefined` | Optional | - |
| `endWord` | `number \| undefined` | Optional | - |
| `topics` | [`SharedTopicsResultsTopicsSegmentsItemsTopicsItems[] \| undefined`](../../doc/models/shared-topics-results-topics-segments-items-topics-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SharedTopicsResultsTopicsSegmentsItems } from 'rest-apilib';

const sharedTopicsResultsTopicsSegmentsItems: SharedTopicsResultsTopicsSegmentsItems = {
  text: 'text0',
  startWord: 138.4,
  endWord: 96.54,
  topics: [
    {
      topic: 'topic2',
      confidenceScore: 42.46,
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

