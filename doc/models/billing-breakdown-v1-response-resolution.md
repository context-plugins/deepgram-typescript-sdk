
# Billing Breakdown V1 Response Resolution

*This model accepts additional fields of type unknown.*

## Structure

`BillingBreakdownV1ResponseResolution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `units` | `string` | Required | Time unit for the resolution |
| `amount` | `number` | Required | Amount of units |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BillingBreakdownV1ResponseResolution } from 'deepgram';

const billingBreakdownV1ResponseResolution: BillingBreakdownV1ResponseResolution = {
  units: 'units2',
  amount: 230.54,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

