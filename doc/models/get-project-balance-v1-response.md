
# Get Project Balance V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectBalanceV1Response`

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
import { GetProjectBalanceV1Response } from 'rest-apilib';

const getProjectBalanceV1Response: GetProjectBalanceV1Response = {
  balanceId: 'balance_id6',
  amount: 0,
  units: 'units8',
  purchaseOrderId: 'purchase_order_id4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

