
# Delete Project Key V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`DeleteProjectKeyV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteProjectKeyV1Response } from 'rest-apilib';

const deleteProjectKeyV1Response: DeleteProjectKeyV1Response = {
  message: 'message6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

