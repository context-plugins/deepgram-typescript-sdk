
# List Project Members V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectMembersV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `members` | [`ListProjectMembersV1ResponseMembersItems[] \| undefined`](../../doc/models/list-project-members-v1-response-members-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectMembersV1Response } from 'rest-apilib';

const listProjectMembersV1Response: ListProjectMembersV1Response = {
  members: [
    {
      memberId: 'member_id2',
      scopes: [
        'scopes4',
        'scopes5',
        'scopes6'
      ],
      email: 'email8',
      firstName: 'first_name8',
      lastName: 'last_name6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      memberId: 'member_id2',
      scopes: [
        'scopes4',
        'scopes5',
        'scopes6'
      ],
      email: 'email8',
      firstName: 'first_name8',
      lastName: 'last_name6',
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

