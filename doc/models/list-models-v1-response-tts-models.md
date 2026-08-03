
# List Models V1 Response Tts Models

*This model accepts additional fields of type unknown.*

## Structure

`ListModelsV1ResponseTtsModels`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `canonicalName` | `string \| undefined` | Optional | - |
| `architecture` | `string \| undefined` | Optional | - |
| `languages` | `string[] \| undefined` | Optional | - |
| `version` | `string \| undefined` | Optional | - |
| `uuid` | `string \| undefined` | Optional | - |
| `metadata` | [`ListModelsV1ResponseTtsModelsMetadata \| undefined`](../../doc/models/list-models-v1-response-tts-models-metadata.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListModelsV1ResponseTtsModels } from 'rest-apilib';

const listModelsV1ResponseTtsModels: ListModelsV1ResponseTtsModels = {
  name: 'name2',
  canonicalName: 'canonical_name2',
  architecture: 'architecture0',
  languages: [
    'languages1'
  ],
  version: 'version8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

