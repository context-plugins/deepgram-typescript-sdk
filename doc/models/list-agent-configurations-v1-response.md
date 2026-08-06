
# List Agent Configurations V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListAgentConfigurationsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `agents` | [`AgentConfigurationV1[] \| undefined`](../../doc/models/agent-configuration-v1.md) | Optional | A list of agent configurations for the project |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListAgentConfigurationsV1Response } from 'deepgram';

const listAgentConfigurationsV1Response: ListAgentConfigurationsV1Response = {
  agents: [
    {
      agentId: 'agent_id8',
      config: { 'key1': 'val1', 'key2': 'val2' },
      metadata: {
        'key0': 'metadata3',
        'key1': 'metadata4'
      },
      createdAt: '2016-03-13T12:52:32.123Z',
      updatedAt: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      agentId: 'agent_id8',
      config: { 'key1': 'val1', 'key2': 'val2' },
      metadata: {
        'key0': 'metadata3',
        'key1': 'metadata4'
      },
      createdAt: '2016-03-13T12:52:32.123Z',
      updatedAt: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      agentId: 'agent_id8',
      config: { 'key1': 'val1', 'key2': 'val2' },
      metadata: {
        'key0': 'metadata3',
        'key1': 'metadata4'
      },
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

