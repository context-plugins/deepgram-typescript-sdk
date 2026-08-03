
# List Project Requests V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectRequestsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Optional | The page number of the paginated response |
| `limit` | `number \| undefined` | Optional | The number of results per page |
| `requests` | [`ProjectRequestResponse[] \| undefined`](../../doc/models/project-request-response.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectRequestsV1Response } from 'rest-apilib';

const listProjectRequestsV1Response: ListProjectRequestsV1Response = {
  page: 239.24,
  limit: 110.1,
  requests: [
    {
      requestId: 'request_id0',
      projectUuid: 'project_uuid8',
      created: '2016-03-13T12:52:32.123Z',
      path: 'path2',
      apiKeyId: 'api_key_id2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      requestId: 'request_id0',
      projectUuid: 'project_uuid8',
      created: '2016-03-13T12:52:32.123Z',
      path: 'path2',
      apiKeyId: 'api_key_id2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      requestId: 'request_id0',
      projectUuid: 'project_uuid8',
      created: '2016-03-13T12:52:32.123Z',
      path: 'path2',
      apiKeyId: 'api_key_id2',
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

