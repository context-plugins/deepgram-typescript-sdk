
# Create Agent Variable V1 Request

Request body for creating an agent variable

*This model accepts additional fields of type unknown.*

## Structure

`CreateAgentVariableV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | The variable name, following the DG_<VARIABLE_NAME> format |
| `value` | `unknown` | Required | The value to substitute. Can be any valid JSON type (string, number, boolean, object, or array) |
| `apiVersion` | `number \| undefined` | Optional | API version. Defaults to 1<br><br>**Default**: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateAgentVariableV1Request } from 'rest-apilib';

const createAgentVariableV1Request: CreateAgentVariableV1Request = {
  key: 'key0',
  value: { 'key1': 'val1', 'key2': 'val2' },
  apiVersion: 1,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

