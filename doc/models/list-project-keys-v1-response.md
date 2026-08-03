
# List Project Keys V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectKeysV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKeys` | [`ListProjectKeysV1ResponseApiKeysItems[] \| undefined`](../../doc/models/list-project-keys-v1-response-api-keys-items.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectKeysV1Response } from 'rest-apilib';

const listProjectKeysV1Response: ListProjectKeysV1Response = {
  apiKeys: [
    {
      member: {
        memberId: 'member_id4',
        email: 'email0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      apiKey: {
        apiKeyId: 'api_key_id6',
        comment: 'comment6',
        scopes: [
          'scopes4',
          'scopes3'
        ],
        created: '2016-03-13T12:52:32.123Z',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
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

