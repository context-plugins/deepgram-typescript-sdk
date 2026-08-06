
# Usage Breakdown V1 Response Resolution

*This model accepts additional fields of type unknown.*

## Structure

`UsageBreakdownV1ResponseResolution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `units` | `string` | Required | Time unit for the resolution |
| `amount` | `number` | Required | Amount of units |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsageBreakdownV1ResponseResolution } from 'deepgram';

const usageBreakdownV1ResponseResolution: UsageBreakdownV1ResponseResolution = {
  units: 'units4',
  amount: 64.9,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

