
# Update Project V1 Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateProjectV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the project |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateProjectV1Request } from 'deepgram';

const updateProjectV1Request: UpdateProjectV1Request = {
  name: 'name2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

