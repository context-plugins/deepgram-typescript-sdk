
# Agent Think Models V1 Response Models Items 4

AWS Bedrock models (custom models accepted)

*This model accepts additional fields of type unknown.*

## Structure

`AgentThinkModelsV1ResponseModelsItems4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The unique identifier of the AWS Bedrock model (any model string accepted for BYO LLMs) |
| `name` | `string` | Required | The display name of the model |
| `provider` | `unknown` | Required | The provider of the model |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AgentThinkModelsV1ResponseModelsItems4 } from 'deepgram';

const agentThinkModelsV1ResponseModelsItems4: AgentThinkModelsV1ResponseModelsItems4 = {
  id: 'id0',
  name: 'name0',
  provider: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

