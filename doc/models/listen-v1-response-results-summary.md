
# Listen V1 Response Results Summary

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | `string \| undefined` | Optional | - |
| `mShort` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseResultsSummary } from 'deepgram';

const listenV1ResponseResultsSummary: ListenV1ResponseResultsSummary = {
  result: 'result2',
  mShort: 'short0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

