
# Billing Breakdown V1 Response Results Items Grouping

*This model accepts additional fields of type unknown.*

## Structure

`BillingBreakdownV1ResponseResultsItemsGrouping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `start` | `string \| undefined` | Optional | Start date for this group |
| `end` | `string \| undefined` | Optional | End date for this group |
| `accessor` | `string \| null \| undefined` | Optional | Optional accessor identifier, null unless grouped by accessor. |
| `deployment` | `string \| null \| undefined` | Optional | Optional deployment identifier, null unless grouped by deployment. |
| `lineItem` | `string \| null \| undefined` | Optional | Optional line item identifier, null unless grouped by line item. |
| `tags` | `string[] \| null \| undefined` | Optional | Optional list of tags, null unless grouped by tags. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BillingBreakdownV1ResponseResultsItemsGrouping } from 'rest-apilib';

const billingBreakdownV1ResponseResultsItemsGrouping: BillingBreakdownV1ResponseResultsItemsGrouping = {
  start: '2016-03-13T12:52:32.123Z',
  end: '2016-03-13T12:52:32.123Z',
  accessor: 'accessor8',
  deployment: 'deployment8',
  lineItem: 'line_item4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

