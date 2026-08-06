
# List Agent Variables V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListAgentVariablesV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `variables` | [`AgentVariableV1[] \| undefined`](../../doc/models/agent-variable-v1.md) | Optional | A list of agent variables for the project |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListAgentVariablesV1Response } from 'deepgram';

const listAgentVariablesV1Response: ListAgentVariablesV1Response = {
  variables: [
    {
      variableId: 'variable_id6',
      key: 'key2',
      value: { 'key1': 'val1', 'key2': 'val2' },
      createdAt: '2016-03-13T12:52:32.123Z',
      updatedAt: '2016-03-13T12:52:32.123Z',
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

