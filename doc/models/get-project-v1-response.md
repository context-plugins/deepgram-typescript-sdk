
# Get Project V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string \| undefined` | Optional | The unique identifier of the project |
| `mipOptOut` | `boolean \| undefined` | Optional | Model Improvement Program opt-out |
| `name` | `string \| undefined` | Optional | The name of the project |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetProjectV1Response } from 'deepgram';

const getProjectV1Response: GetProjectV1Response = {
  projectId: 'project_id8',
  mipOptOut: false,
  name: 'name8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

