
# Usage Fields V1 Response Models Items

*This model accepts additional fields of type unknown.*

## Structure

`UsageFieldsV1ResponseModelsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the model. |
| `language` | `string \| undefined` | Optional | The language supported by the model (IETF language tag). |
| `version` | `string \| undefined` | Optional | Version identifier of the model, typically with a date and a revision number. |
| `modelId` | `string \| undefined` | Optional | Unique identifier for the model. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsageFieldsV1ResponseModelsItems } from 'rest-apilib';

const usageFieldsV1ResponseModelsItems: UsageFieldsV1ResponseModelsItems = {
  name: 'name4',
  language: 'language6',
  version: 'version0',
  modelId: 'model_id4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

