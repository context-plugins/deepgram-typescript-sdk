
# Get Project Key V1 Response Item Member

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectKeyV1ResponseItemMember`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memberId` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `apiKey` | [`GetProjectKeyV1ResponseItemMemberApiKey \| undefined`](../../doc/models/get-project-key-v1-response-item-member-api-key.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetProjectKeyV1ResponseItemMember } from 'rest-apilib';

const getProjectKeyV1ResponseItemMember: GetProjectKeyV1ResponseItemMember = {
  memberId: 'member_id0',
  email: 'email6',
  firstName: 'first_name0',
  lastName: 'last_name8',
  apiKey: {
    apiKeyId: 'api_key_id6',
    comment: 'comment6',
    scopes: [
      'scopes4',
      'scopes3'
    ],
    tags: [
      'tags7',
      'tags8',
      'tags9'
    ],
    expirationDate: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

