
# Agent Think Models V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`AgentThinkModelsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `models` | [`AgentThinkModelsV1ResponseModelsItems[]`](../../doc/models/containers/agent-think-models-v1-response-models-items.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AgentThinkModelsV1Response,
  AgentThinkModelsV1ResponseModelsItemsOneOf0Id,
} from 'deepgram';

const agentThinkModelsV1Response: AgentThinkModelsV1Response = {
  models: [
    {
      id: AgentThinkModelsV1ResponseModelsItemsOneOf0Id.Gpt4O,
      name: 'name0',
      provider: { 'key1': 'val1', 'key2': 'val2' },
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

