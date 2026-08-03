
# Grant V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`GrantV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string` | Required | JSON Web Token (JWT) |
| `expiresIn` | `number \| undefined` | Optional | Time in seconds until the JWT expires |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GrantV1Response } from 'rest-apilib';

const grantV1Response: GrantV1Response = {
  accessToken: 'access_token8',
  expiresIn: 64.04,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

