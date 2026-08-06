
# Delete Project Member V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`DeleteProjectMemberV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | confirmation message |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteProjectMemberV1Response } from 'deepgram';

const deleteProjectMemberV1Response: DeleteProjectMemberV1Response = {
  message: 'message8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

