
# Billing Breakdown V1 Response Results Items

*This model accepts additional fields of type unknown.*

## Structure

`BillingBreakdownV1ResponseResultsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dollars` | `number` | Required | USD cost of the billing for this grouping |
| `grouping` | [`BillingBreakdownV1ResponseResultsItemsGrouping`](../../doc/models/billing-breakdown-v1-response-results-items-grouping.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BillingBreakdownV1ResponseResultsItems } from 'rest-apilib';

const billingBreakdownV1ResponseResultsItems: BillingBreakdownV1ResponseResultsItems = {
  dollars: 151.78,
  grouping: {
    start: '2016-03-13T12:52:32.123Z',
    end: '2016-03-13T12:52:32.123Z',
    accessor: 'accessor6',
    deployment: 'deployment6',
    lineItem: 'line_item8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

