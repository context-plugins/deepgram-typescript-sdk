
# List Project Balances V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectBalancesV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`ListProjectBalancesV1ResponseBalancesItems[] \| undefined`](../../doc/models/list-project-balances-v1-response-balances-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectBalancesV1Response } from 'deepgram';

const listProjectBalancesV1Response: ListProjectBalancesV1Response = {
  balances: [
    {
      balanceId: 'balance_id2',
      amount: 149.62,
      units: 'units4',
      purchaseOrderId: 'purchase_order_id0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      balanceId: 'balance_id2',
      amount: 149.62,
      units: 'units4',
      purchaseOrderId: 'purchase_order_id0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      balanceId: 'balance_id2',
      amount: 149.62,
      units: 'units4',
      purchaseOrderId: 'purchase_order_id0',
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

