
# Read V1 Response Results Summary Results

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseResultsSummaryResults`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `summary` | [`ReadV1ResponseResultsSummaryResultsSummary \| undefined`](../../doc/models/read-v1-response-results-summary-results-summary.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseResultsSummaryResults } from 'rest-apilib';

const readV1ResponseResultsSummaryResults: ReadV1ResponseResultsSummaryResults = {
  summary: {
    text: 'text8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

