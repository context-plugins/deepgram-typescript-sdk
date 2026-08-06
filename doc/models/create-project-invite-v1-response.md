
# Create Project Invite V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`CreateProjectInviteV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | confirmation message |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateProjectInviteV1Response } from 'deepgram';

const createProjectInviteV1Response: CreateProjectInviteV1Response = {
  message: 'message4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

