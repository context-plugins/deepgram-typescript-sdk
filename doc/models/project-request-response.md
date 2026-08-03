
# Project Request Response

A single request

*This model accepts additional fields of type unknown.*

## Structure

`ProjectRequestResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | The unique identifier of the request |
| `projectUuid` | `string \| undefined` | Optional | The unique identifier of the project |
| `created` | `string \| undefined` | Optional | The date and time the request was created |
| `path` | `string \| undefined` | Optional | The API path of the request |
| `apiKeyId` | `string \| undefined` | Optional | The unique identifier of the API key |
| `response` | `unknown \| undefined` | Optional | The response of the request |
| `code` | `number \| undefined` | Optional | The response code of the request |
| `deployment` | `string \| undefined` | Optional | The deployment type |
| `callback` | `string \| undefined` | Optional | The callback URL for the request |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ProjectRequestResponse } from 'rest-apilib';

const projectRequestResponse: ProjectRequestResponse = {
  requestId: 'request_id6',
  projectUuid: 'project_uuid2',
  created: '2016-03-13T12:52:32.123Z',
  path: 'path6',
  apiKeyId: 'api_key_id6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

