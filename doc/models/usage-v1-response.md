
# Usage V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`UsageV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `start` | `string \| undefined` | Optional | - |
| `end` | `string \| undefined` | Optional | - |
| `resolution` | [`UsageV1ResponseResolution \| undefined`](../../doc/models/usage-v1-response-resolution.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsageV1Response } from 'rest-apilib';

const usageV1Response: UsageV1Response = {
  start: '2016-03-13T12:52:32.123Z',
  end: '2016-03-13T12:52:32.123Z',
  resolution: {
    units: 'units8',
    amount: 98.28,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

