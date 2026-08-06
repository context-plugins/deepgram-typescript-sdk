
# List Billing Fields V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListBillingFieldsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessors` | `string[] \| undefined` | Optional | List of accessor UUIDs for the time period |
| `deployments` | [`ListBillingFieldsV1ResponseDeploymentsItems[] \| undefined`](../../doc/models/list-billing-fields-v1-response-deployments-items.md) | Optional | List of deployment types for the time period |
| `tags` | `string[] \| undefined` | Optional | List of tags for the time period |
| `lineItems` | `Record<string, string> \| undefined` | Optional | Map of line item names to human-readable descriptions for the time period |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListBillingFieldsV1Response,
  ListBillingFieldsV1ResponseDeploymentsItems,
} from 'deepgram';

const listBillingFieldsV1Response: ListBillingFieldsV1Response = {
  accessors: [
    '000000de-0000-0000-0000-000000000000',
    '000000dd-0000-0000-0000-000000000000',
    '000000dc-0000-0000-0000-000000000000'
  ],
  deployments: [
    ListBillingFieldsV1ResponseDeploymentsItems.Beta,
    ListBillingFieldsV1ResponseDeploymentsItems.Selfhosted,
    ListBillingFieldsV1ResponseDeploymentsItems.Dedicated
  ],
  tags: [
    'tags5'
  ],
  lineItems: {
    'key0': 'line_items1'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

