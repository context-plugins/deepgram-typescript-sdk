
# Get Project Key V1 Response Item Member Api Key

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectKeyV1ResponseItemMemberApiKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string \| undefined` | Optional | - |
| `comment` | `string \| undefined` | Optional | - |
| `scopes` | `string[] \| undefined` | Optional | - |
| `tags` | `string[] \| undefined` | Optional | - |
| `expirationDate` | `string \| undefined` | Optional | - |
| `created` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetProjectKeyV1ResponseItemMemberApiKey } from 'rest-apilib';

const getProjectKeyV1ResponseItemMemberApiKey: GetProjectKeyV1ResponseItemMemberApiKey = {
  apiKeyId: 'api_key_id4',
  comment: 'comment4',
  scopes: [
    'scopes8',
    'scopes7'
  ],
  tags: [
    'tags5'
  ],
  expirationDate: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

