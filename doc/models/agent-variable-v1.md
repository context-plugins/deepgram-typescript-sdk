
# Agent Variable V1

A template variable for agent configurations

*This model accepts additional fields of type unknown.*

## Structure

`AgentVariableV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `variableId` | `string` | Required | The unique identifier of the variable |
| `key` | `string` | Required | The variable name, following the DG_<VARIABLE_NAME> format |
| `value` | `unknown` | Required | The value to substitute. Can be any valid JSON type |
| `createdAt` | `string \| undefined` | Optional | Timestamp when the variable was created |
| `updatedAt` | `string \| undefined` | Optional | Timestamp when the variable was last updated |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AgentVariableV1 } from 'rest-apilib';

const agentVariableV1: AgentVariableV1 = {
  variableId: 'variable_id6',
  key: 'key2',
  value: { 'key1': 'val1', 'key2': 'val2' },
  createdAt: '2016-03-13T12:52:32.123Z',
  updatedAt: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

