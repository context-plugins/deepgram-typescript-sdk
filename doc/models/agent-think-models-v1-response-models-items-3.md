
# Agent Think Models V1 Response Models Items 3

Groq models

*This model accepts additional fields of type unknown.*

## Structure

`AgentThinkModelsV1ResponseModelsItems3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | [`AgentThinkModelsV1ResponseModelsItemsOneOf3Id`](../../doc/models/agent-think-models-v1-response-models-items-one-of-3-id.md) | Required | The unique identifier of the Groq model |
| `name` | `string` | Required | The display name of the model |
| `provider` | `unknown` | Required | The provider of the model |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AgentThinkModelsV1ResponseModelsItems3,
  AgentThinkModelsV1ResponseModelsItemsOneOf3Id,
} from 'rest-apilib';

const agentThinkModelsV1ResponseModelsItems3: AgentThinkModelsV1ResponseModelsItems3 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf3Id.EnumOpenaigptoss20B,
  name: 'name8',
  provider: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

