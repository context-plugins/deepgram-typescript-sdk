
# Read V1 Response Results Summary

Output whenever `summary=true` is used

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseResultsSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`ReadV1ResponseResultsSummaryResults \| undefined`](../../doc/models/read-v1-response-results-summary-results.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseResultsSummary } from 'rest-apilib';

const readV1ResponseResultsSummary: ReadV1ResponseResultsSummary = {
  results: {
    summary: {
      text: 'text8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

