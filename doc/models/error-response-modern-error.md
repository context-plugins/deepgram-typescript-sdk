
# Error Response Modern Error

*This model accepts additional fields of type unknown.*

## Structure

`ErrorResponseModernError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | `string \| undefined` | Optional | The category of the error |
| `message` | `string \| undefined` | Optional | A message about the error |
| `details` | `string \| undefined` | Optional | A description of the error |
| `requestId` | `string \| undefined` | Optional | The unique identifier of the request |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ErrorResponseModernError } from 'deepgram';

const errorResponseModernError: ErrorResponseModernError = {
  category: 'category6',
  message: 'message8',
  details: 'details8',
  requestId: 'request_id0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

