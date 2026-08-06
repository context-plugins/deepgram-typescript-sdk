
# List Models V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListModelsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `stt` | [`ListModelsV1ResponseSttModels[] \| undefined`](../../doc/models/list-models-v1-response-stt-models.md) | Optional | - |
| `tts` | [`ListModelsV1ResponseTtsModels[] \| undefined`](../../doc/models/list-models-v1-response-tts-models.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListModelsV1Response } from 'deepgram';

const listModelsV1Response: ListModelsV1Response = {
  stt: [
    {
      name: 'name6',
      canonicalName: 'canonical_name8',
      architecture: 'architecture4',
      languages: [
        'languages3',
        'languages4',
        'languages5'
      ],
      version: 'version2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name6',
      canonicalName: 'canonical_name8',
      architecture: 'architecture4',
      languages: [
        'languages3',
        'languages4',
        'languages5'
      ],
      version: 'version2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  tts: [
    {
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
    },
    {
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

