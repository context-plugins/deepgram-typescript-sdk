
# Get Model V1 Response One of 1 Metadata

*This model accepts additional fields of type unknown.*

## Structure

`GetModelV1ResponseOneOf1Metadata`

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
import { GetModelV1ResponseOneOf1Metadata } from 'rest-apilib';

const getModelV1ResponseOneOf1Metadata: GetModelV1ResponseOneOf1Metadata = {
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

