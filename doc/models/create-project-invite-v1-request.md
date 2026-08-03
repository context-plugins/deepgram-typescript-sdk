
# Create Project Invite V1 Request

Request body for creating a project invite

*This model accepts additional fields of type unknown.*

## Structure

`CreateProjectInviteV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | The email address of the invitee |
| `scope` | `string` | Required | The scope of the invitee |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateProjectInviteV1Request } from 'rest-apilib';

const createProjectInviteV1Request: CreateProjectInviteV1Request = {
  email: 'email6',
  scope: 'scope2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

