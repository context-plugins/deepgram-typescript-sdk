
# List Project Purchases V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectPurchasesV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orders` | [`ListProjectPurchasesV1ResponseOrdersItems[] \| undefined`](../../doc/models/list-project-purchases-v1-response-orders-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectPurchasesV1Response } from 'deepgram';

const listProjectPurchasesV1Response: ListProjectPurchasesV1Response = {
  orders: [
    {
      orderId: '00000d9e-0000-0000-0000-000000000000',
      expiration: '2016-03-13T12:52:32.123Z',
      created: '2016-03-13T12:52:32.123Z',
      amount: 244.94,
      units: 'units2',
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

