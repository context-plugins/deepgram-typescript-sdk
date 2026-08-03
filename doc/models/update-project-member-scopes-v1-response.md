
# Update Project Member Scopes V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`UpdateProjectMemberScopesV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | confirmation message |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateProjectMemberScopesV1Response } from 'rest-apilib';

const updateProjectMemberScopesV1Response: UpdateProjectMemberScopesV1Response = {
  message: 'message0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

