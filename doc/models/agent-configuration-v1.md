
# Agent Configuration V1

A reusable agent configuration

*This model accepts additional fields of type unknown.*

## Structure

`AgentConfigurationV1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `agentId` | `string` | Required | The unique identifier of the agent configuration |
| `config` | `unknown` | Required | The agent configuration object |
| `metadata` | `Record<string, string> \| undefined` | Optional | A map of arbitrary key-value pairs for labeling or organizing the agent configuration |
| `createdAt` | `string \| undefined` | Optional | Timestamp when the configuration was created |
| `updatedAt` | `string \| undefined` | Optional | Timestamp when the configuration was last updated |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AgentConfigurationV1 } from 'rest-apilib';

const agentConfigurationV1: AgentConfigurationV1 = {
  agentId: 'agent_id0',
  config: { 'key1': 'val1', 'key2': 'val2' },
  metadata: {
    'key0': 'metadata9',
    'key1': 'metadata8'
  },
  createdAt: '2016-03-13T12:52:32.123Z',
  updatedAt: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

