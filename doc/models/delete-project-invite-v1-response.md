
# Delete Project Invite V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`DeleteProjectInviteV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | confirmation message |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteProjectInviteV1Response } from 'deepgram';

const deleteProjectInviteV1Response: DeleteProjectInviteV1Response = {
  message: 'message8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

