
# List Project Balances V1 Response Balances Items

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectBalancesV1ResponseBalancesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceId` | `string \| undefined` | Optional | The unique identifier of the balance |
| `amount` | `number \| undefined` | Optional | The amount of the balance<br><br>**Default**: `0` |
| `units` | `string \| undefined` | Optional | The units of the balance, such as "USD" |
| `purchaseOrderId` | `string \| undefined` | Optional | Description or reference of the purchase |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectBalancesV1ResponseBalancesItems } from 'rest-apilib';

const listProjectBalancesV1ResponseBalancesItems: ListProjectBalancesV1ResponseBalancesItems = {
  balanceId: 'balance_id8',
  amount: 0,
  units: 'units0',
  purchaseOrderId: 'purchase_order_id4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

