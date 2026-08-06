
# Leave Project V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`LeaveProjectV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | confirmation message |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LeaveProjectV1Response } from 'deepgram';

const leaveProjectV1Response: LeaveProjectV1Response = {
  message: 'message6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

