
# Grant V1 Request

*This model accepts additional fields of type unknown.*

## Structure

`GrantV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ttlSeconds` | `number \| undefined` | Optional | Time to live in seconds for the token. Defaults to 30 seconds. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GrantV1Request } from 'rest-apilib';

const grantV1Request: GrantV1Request = {
  ttlSeconds: 33.48,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

