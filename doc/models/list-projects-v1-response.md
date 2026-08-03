
# List Projects V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projects` | [`ListProjectsV1ResponseProjectsItems[] \| undefined`](../../doc/models/list-projects-v1-response-projects-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectsV1Response } from 'rest-apilib';

const listProjectsV1Response: ListProjectsV1Response = {
  projects: [
    {
      projectId: 'project_id4',
      name: 'name2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      projectId: 'project_id4',
      name: 'name2',
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

