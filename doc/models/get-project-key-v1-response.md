
# Get Project Key V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectKeyV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `item` | [`GetProjectKeyV1ResponseItem \| undefined`](../../doc/models/get-project-key-v1-response-item.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetProjectKeyV1Response } from 'rest-apilib';

const getProjectKeyV1Response: GetProjectKeyV1Response = {
  item: {
    member: {
      memberId: 'member_id4',
      email: 'email0',
      firstName: 'first_name6',
      lastName: 'last_name4',
      apiKey: {
        apiKeyId: 'api_key_id6',
        comment: 'comment6',
        scopes: [
          'scopes4',
          'scopes3'
        ],
        tags: [
          'tags7',
          'tags8',
          'tags9'
        ],
        expirationDate: '2016-03-13T12:52:32.123Z',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

