
# Update Project Member Scopes V1 Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateProjectMemberScopesV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scope` | `string` | Required | A scope to update |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateProjectMemberScopesV1Request } from 'rest-apilib';

const updateProjectMemberScopesV1Request: UpdateProjectMemberScopesV1Request = {
  scope: 'scope0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

