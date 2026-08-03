
# Error Response Legacy Error

*This model accepts additional fields of type unknown.*

## Structure

`ErrorResponseLegacyError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errCode` | `string \| undefined` | Optional | The error code |
| `errMsg` | `string \| undefined` | Optional | The error message |
| `requestId` | `string \| undefined` | Optional | The request ID |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ErrorResponseLegacyError } from 'rest-apilib';

const errorResponseLegacyError: ErrorResponseLegacyError = {
  errCode: 'err_code8',
  errMsg: 'err_msg0',
  requestId: 'request_id8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

