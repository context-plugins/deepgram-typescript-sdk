
# List Project Keys V1 Response Api Keys Items Api Key

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectKeysV1ResponseApiKeysItemsApiKey`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string \| undefined` | Optional | - |
| `comment` | `string \| undefined` | Optional | - |
| `scopes` | `string[] \| undefined` | Optional | - |
| `created` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectKeysV1ResponseApiKeysItemsApiKey } from 'rest-apilib';

const listProjectKeysV1ResponseApiKeysItemsApiKey: ListProjectKeysV1ResponseApiKeysItemsApiKey = {
  apiKeyId: 'api_key_id8',
  comment: 'comment2',
  scopes: [
    'scopes8',
    'scopes9',
    'scopes0'
  ],
  created: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

