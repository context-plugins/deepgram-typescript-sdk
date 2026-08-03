
# Update Agent Variable V1 Request

Request body for updating an agent variable

*This model accepts additional fields of type unknown.*

## Structure

`UpdateAgentVariableV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `unknown` | Required | The new value to substitute |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateAgentVariableV1Request } from 'rest-apilib';

const updateAgentVariableV1Request: UpdateAgentVariableV1Request = {
  value: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

