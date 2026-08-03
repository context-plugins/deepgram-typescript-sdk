
# Get Project Request V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectRequestV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `request` | [`ProjectRequestResponse \| undefined`](../../doc/models/project-request-response.md) | Optional | A single request |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetProjectRequestV1Response } from 'rest-apilib';

const getProjectRequestV1Response: GetProjectRequestV1Response = {
  request: {
    requestId: 'request_id2',
    projectUuid: 'project_uuid6',
    created: '2016-03-13T12:52:32.123Z',
    path: 'path0',
    apiKeyId: 'api_key_id0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

