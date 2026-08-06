
# List Project Member Scopes V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectMemberScopesV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scopes` | `string[] \| undefined` | Optional | The API scopes of the member |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectMemberScopesV1Response } from 'deepgram';

const listProjectMemberScopesV1Response: ListProjectMemberScopesV1Response = {
  scopes: [
    'scopes4',
    'scopes3'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

