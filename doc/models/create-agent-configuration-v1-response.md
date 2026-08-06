
# Create Agent Configuration V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`CreateAgentConfigurationV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `agentId` | `string` | Required | The unique identifier of the newly created agent configuration |
| `config` | `unknown` | Required | The parsed agent configuration object |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata associated with the agent configuration |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateAgentConfigurationV1Response } from 'deepgram';

const createAgentConfigurationV1Response: CreateAgentConfigurationV1Response = {
  agentId: 'agent_id6',
  config: { 'key1': 'val1', 'key2': 'val2' },
  metadata: {
    'key0': 'metadata5',
    'key1': 'metadata4'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

