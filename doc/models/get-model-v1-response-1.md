
# Get Model V1 Response 1

*This model accepts additional fields of type unknown.*

## Structure

`GetModelV1Response1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `canonicalName` | `string \| undefined` | Optional | - |
| `architecture` | `string \| undefined` | Optional | - |
| `languages` | `string[] \| undefined` | Optional | - |
| `version` | `string \| undefined` | Optional | - |
| `uuid` | `string \| undefined` | Optional | - |
| `metadata` | [`GetModelV1ResponseOneOf1Metadata \| undefined`](../../doc/models/get-model-v1-response-one-of-1-metadata.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetModelV1Response1 } from 'deepgram';

const getModelV1Response1: GetModelV1Response1 = {
  name: 'name6',
  canonicalName: 'canonical_name8',
  architecture: 'architecture4',
  languages: [
    'languages3'
  ],
  version: 'version2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

