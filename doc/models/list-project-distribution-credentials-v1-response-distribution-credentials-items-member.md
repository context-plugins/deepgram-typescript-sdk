
# List Project Distribution Credentials V1 Response Distribution Credentials Items Member

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memberId` | `string` | Required | Unique identifier for the member |
| `email` | `string` | Required | Email address of the member |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember,
} from 'deepgram';

const listProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember: ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember = {
  memberId: '0000062e-0000-0000-0000-000000000000',
  email: 'email4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

