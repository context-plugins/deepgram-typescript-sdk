
# Usage V1 Response Resolution

*This model accepts additional fields of type unknown.*

## Structure

`UsageV1ResponseResolution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `units` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsageV1ResponseResolution } from 'rest-apilib';

const usageV1ResponseResolution: UsageV1ResponseResolution = {
  units: 'units8',
  amount: 114.68,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

