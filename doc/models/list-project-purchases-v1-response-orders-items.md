
# List Project Purchases V1 Response Orders Items

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectPurchasesV1ResponseOrdersItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `string \| undefined` | Optional | - |
| `expiration` | `string \| undefined` | Optional | - |
| `created` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | - |
| `units` | `string \| undefined` | Optional | - |
| `orderType` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectPurchasesV1ResponseOrdersItems } from 'deepgram';

const listProjectPurchasesV1ResponseOrdersItems: ListProjectPurchasesV1ResponseOrdersItems = {
  orderId: '00000276-0000-0000-0000-000000000000',
  expiration: '2016-03-13T12:52:32.123Z',
  created: '2016-03-13T12:52:32.123Z',
  amount: 103.78,
  units: 'units8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

