
# List Project Members V1 Response Members Items

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectMembersV1ResponseMembersItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memberId` | `string \| undefined` | Optional | The unique identifier of the member |
| `scopes` | `string[] \| undefined` | Optional | The API scopes of the member |
| `email` | `string \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectMembersV1ResponseMembersItems } from 'rest-apilib';

const listProjectMembersV1ResponseMembersItems: ListProjectMembersV1ResponseMembersItems = {
  memberId: 'member_id0',
  scopes: [
    'scopes2',
    'scopes3'
  ],
  email: 'email6',
  firstName: 'first_name0',
  lastName: 'last_name8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

