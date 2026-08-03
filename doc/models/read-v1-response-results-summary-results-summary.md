
# Read V1 Response Results Summary Results Summary

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1ResponseResultsSummaryResultsSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1ResponseResultsSummaryResultsSummary } from 'rest-apilib';

const readV1ResponseResultsSummaryResultsSummary: ReadV1ResponseResultsSummaryResultsSummary = {
  text: 'text8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

