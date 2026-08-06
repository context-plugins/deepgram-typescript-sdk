
# Usage Fields V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`UsageFieldsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tags` | `string[] \| undefined` | Optional | List of tags associated with the project |
| `models` | [`UsageFieldsV1ResponseModelsItems[] \| undefined`](../../doc/models/usage-fields-v1-response-models-items.md) | Optional | List of models available for the project. |
| `processingMethods` | `string[] \| undefined` | Optional | Processing methods supported by the API |
| `features` | `string[] \| undefined` | Optional | API features available to the project |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsageFieldsV1Response } from 'deepgram';

const usageFieldsV1Response: UsageFieldsV1Response = {
  tags: [
    'tags3'
  ],
  models: [
    {
      name: 'name4',
      language: 'language6',
      version: 'version0',
      modelId: 'model_id4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  processingMethods: [
    'processing_methods8',
    'processing_methods9'
  ],
  features: [
    'features9',
    'features0',
    'features1'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

