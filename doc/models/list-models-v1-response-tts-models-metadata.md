
# List Models V1 Response Tts Models Metadata

*This model accepts additional fields of type unknown.*

## Structure

`ListModelsV1ResponseTtsModelsMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accent` | `string \| undefined` | Optional | - |
| `age` | `string \| undefined` | Optional | - |
| `color` | `string \| undefined` | Optional | - |
| `image` | `string \| undefined` | Optional | - |
| `sample` | `string \| undefined` | Optional | - |
| `tags` | `string[] \| undefined` | Optional | - |
| `useCases` | `string[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListModelsV1ResponseTtsModelsMetadata } from 'rest-apilib';

const listModelsV1ResponseTtsModelsMetadata: ListModelsV1ResponseTtsModelsMetadata = {
  accent: 'accent4',
  age: 'age8',
  color: 'color4',
  image: 'image6',
  sample: 'sample8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

