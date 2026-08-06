
# Get Project Distribution Credentials V1 Response Member

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectDistributionCredentialsV1ResponseMember`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memberId` | `string` | Required | Unique identifier for the member |
| `email` | `string` | Required | Email address of the member |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetProjectDistributionCredentialsV1ResponseMember } from 'deepgram';

const getProjectDistributionCredentialsV1ResponseMember: GetProjectDistributionCredentialsV1ResponseMember = {
  memberId: '00000eba-0000-0000-0000-000000000000',
  email: 'email6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

