
# Agent Think Models V1 Response Models Items 0

OpenAI models

*This model accepts additional fields of type unknown.*

## Structure

`AgentThinkModelsV1ResponseModelsItems0`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | [`AgentThinkModelsV1ResponseModelsItemsOneOf0Id`](../../doc/models/agent-think-models-v1-response-models-items-one-of-0-id.md) | Required | The unique identifier of the OpenAI model |
| `name` | `string` | Required | The display name of the model |
| `provider` | `unknown` | Required | The provider of the model |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AgentThinkModelsV1ResponseModelsItems0,
  AgentThinkModelsV1ResponseModelsItemsOneOf0Id,
} from 'rest-apilib';

const agentThinkModelsV1ResponseModelsItems0: AgentThinkModelsV1ResponseModelsItems0 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf0Id.EnumGpt41Mini,
  name: 'name0',
  provider: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

