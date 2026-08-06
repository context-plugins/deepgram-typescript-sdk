
# List Project Invites V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectInvitesV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invites` | [`ListProjectInvitesV1ResponseInvitesItems[] \| undefined`](../../doc/models/list-project-invites-v1-response-invites-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectInvitesV1Response } from 'deepgram';

const listProjectInvitesV1Response: ListProjectInvitesV1Response = {
  invites: [
    {
      email: 'email8',
      scope: 'scope4',
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

