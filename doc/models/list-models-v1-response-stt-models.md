
# List Models V1 Response Stt Models

*This model accepts additional fields of type unknown.*

## Structure

`ListModelsV1ResponseSttModels`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `canonicalName` | `string \| undefined` | Optional | - |
| `architecture` | `string \| undefined` | Optional | - |
| `languages` | `string[] \| undefined` | Optional | - |
| `version` | `string \| undefined` | Optional | - |
| `uuid` | `string \| undefined` | Optional | - |
| `batch` | `boolean \| undefined` | Optional | - |
| `streaming` | `boolean \| undefined` | Optional | - |
| `formattedOutput` | `boolean \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListModelsV1ResponseSttModels } from 'deepgram';

const listModelsV1ResponseSttModels: ListModelsV1ResponseSttModels = {
  name: 'name8',
  canonicalName: 'canonical_name6',
  architecture: 'architecture6',
  languages: [
    'languages5',
    'languages6',
    'languages7'
  ],
  version: 'version4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

