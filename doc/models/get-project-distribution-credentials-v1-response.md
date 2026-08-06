
# Get Project Distribution Credentials V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectDistributionCredentialsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `member` | [`GetProjectDistributionCredentialsV1ResponseMember`](../../doc/models/get-project-distribution-credentials-v1-response-member.md) | Required | - |
| `distributionCredentials` | [`GetProjectDistributionCredentialsV1ResponseDistributionCredentials`](../../doc/models/get-project-distribution-credentials-v1-response-distribution-credentials.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetProjectDistributionCredentialsV1Response } from 'deepgram';

const getProjectDistributionCredentialsV1Response: GetProjectDistributionCredentialsV1Response = {
  member: {
    memberId: '00001922-0000-0000-0000-000000000000',
    email: 'email0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  distributionCredentials: {
    distributionCredentialsId: '00000560-0000-0000-0000-000000000000',
    provider: 'provider4',
    scopes: [
      'scopes8',
      'scopes9'
    ],
    created: '2016-03-13T12:52:32.123Z',
    comment: 'comment2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

