
# Billing Breakdown V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`BillingBreakdownV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `start` | `string` | Required | Start date of the billing summmary period |
| `end` | `string` | Required | End date of the billing summary period |
| `resolution` | [`BillingBreakdownV1ResponseResolution`](../../doc/models/billing-breakdown-v1-response-resolution.md) | Required | - |
| `results` | [`BillingBreakdownV1ResponseResultsItems[]`](../../doc/models/billing-breakdown-v1-response-results-items.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BillingBreakdownV1Response } from 'deepgram';

const billingBreakdownV1Response: BillingBreakdownV1Response = {
  start: '2016-03-13T12:52:32.123Z',
  end: '2016-03-13T12:52:32.123Z',
  resolution: {
    units: 'units8',
    amount: 98.28,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  results: [
    {
      dollars: 41.68,
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

