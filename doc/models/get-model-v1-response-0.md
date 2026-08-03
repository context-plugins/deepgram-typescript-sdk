
# Get Model V1 Response 0

*This model accepts additional fields of type unknown.*

## Structure

`GetModelV1Response0`

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
import { GetModelV1Response0 } from 'rest-apilib';

const getModelV1Response0: GetModelV1Response0 = {
  name: 'name6',
  canonicalName: 'canonical_name8',
  architecture: 'architecture4',
  languages: [
    'languages3',
    'languages4'
  ],
  version: 'version2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

