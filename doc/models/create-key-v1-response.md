
# Create Key V1 Response

API key created

*This model accepts additional fields of type unknown.*

## Structure

`CreateKeyV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeyId` | `string \| undefined` | Optional | The unique identifier of the API key |
| `key` | `string \| undefined` | Optional | The API key |
| `comment` | `string \| undefined` | Optional | A comment for the API key |
| `scopes` | `string[] \| undefined` | Optional | The scopes for the API key |
| `tags` | `string[] \| undefined` | Optional | The tags for the API key |
| `expirationDate` | `string \| undefined` | Optional | The expiration date of the API key |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateKeyV1Response } from 'rest-apilib';

const createKeyV1Response: CreateKeyV1Response = {
  apiKeyId: 'api_key_id0',
  key: 'key6',
  comment: 'comment0',
  scopes: [
    'scopes6',
    'scopes7',
    'scopes8'
  ],
  tags: [
    'tags1',
    'tags2',
    'tags3'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

