
# Agent Think Models V1 Response Models Items 1

Anthropic models

*This model accepts additional fields of type unknown.*

## Structure

`AgentThinkModelsV1ResponseModelsItems1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | [`AgentThinkModelsV1ResponseModelsItemsOneOf1Id`](../../doc/models/agent-think-models-v1-response-models-items-one-of-1-id.md) | Required | The unique identifier of the Anthropic model |
| `name` | `string` | Required | The display name of the model |
| `provider` | `unknown` | Required | The provider of the model |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AgentThinkModelsV1ResponseModelsItems1,
  AgentThinkModelsV1ResponseModelsItemsOneOf1Id,
} from 'rest-apilib';

const agentThinkModelsV1ResponseModelsItems1: AgentThinkModelsV1ResponseModelsItems1 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf1Id.Claude35Haikulatest,
  name: 'name2',
  provider: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

