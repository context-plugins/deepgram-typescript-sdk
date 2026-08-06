
# List Project Invites V1 Response Invites Items

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectInvitesV1ResponseInvitesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | The email address of the invitee |
| `scope` | `string \| undefined` | Optional | The scope of the invitee |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectInvitesV1ResponseInvitesItems } from 'deepgram';

const listProjectInvitesV1ResponseInvitesItems: ListProjectInvitesV1ResponseInvitesItems = {
  email: 'email4',
  scope: 'scope0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

