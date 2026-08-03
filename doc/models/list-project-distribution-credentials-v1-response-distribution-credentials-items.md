
# List Project Distribution Credentials V1 Response Distribution Credentials Items

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `member` | [`ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember`](../../doc/models/list-project-distribution-credentials-v1-response-distribution-credentials-items-member.md) | Required | - |
| `distributionCredentials` | [`ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials`](../../doc/models/list-project-distribution-credentials-v1-response-distribution-credentials-items-distribution-credentials.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems,
} from 'rest-apilib';

const listProjectDistributionCredentialsV1ResponseDistributionCredentialsItems: ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems = {
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

