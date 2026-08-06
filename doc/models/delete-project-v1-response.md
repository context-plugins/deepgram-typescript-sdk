
# Delete Project V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`DeleteProjectV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | Confirmation message |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteProjectV1Response } from 'deepgram';

const deleteProjectV1Response: DeleteProjectV1Response = {
  message: 'message4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

