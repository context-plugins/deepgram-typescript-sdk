
# List Project Distribution Credentials V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectDistributionCredentialsV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `distributionCredentials` | [`ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems[] \| undefined`](../../doc/models/list-project-distribution-credentials-v1-response-distribution-credentials-items.md) | Optional | Array of distribution credentials with associated member information |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectDistributionCredentialsV1Response } from 'rest-apilib';

const listProjectDistributionCredentialsV1Response: ListProjectDistributionCredentialsV1Response = {
  distributionCredentials: [
    {
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
    },
    {
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
    },
    {
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

