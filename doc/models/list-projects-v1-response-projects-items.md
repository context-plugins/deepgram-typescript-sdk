
# List Projects V1 Response Projects Items

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectsV1ResponseProjectsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string \| undefined` | Optional | The unique identifier of the project |
| `name` | `string \| undefined` | Optional | The name of the project |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectsV1ResponseProjectsItems } from 'deepgram';

const listProjectsV1ResponseProjectsItems: ListProjectsV1ResponseProjectsItems = {
  projectId: 'project_id4',
  name: 'name2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

