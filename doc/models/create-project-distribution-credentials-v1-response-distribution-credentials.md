
# Create Project Distribution Credentials V1 Response Distribution Credentials

*This model accepts additional fields of type unknown.*

## Structure

`CreateProjectDistributionCredentialsV1ResponseDistributionCredentials`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `distributionCredentialsId` | `string` | Required | Unique identifier for the distribution credentials |
| `provider` | `string` | Required | The provider of the distribution service |
| `comment` | `string \| undefined` | Optional | Optional comment about the credentials |
| `scopes` | `string[]` | Required | List of permission scopes for the credentials |
| `created` | `string` | Required | Timestamp when the credentials were created |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CreateProjectDistributionCredentialsV1ResponseDistributionCredentials,
} from 'deepgram';

const createProjectDistributionCredentialsV1ResponseDistributionCredentials: CreateProjectDistributionCredentialsV1ResponseDistributionCredentials = {
  distributionCredentialsId: '000002fc-0000-0000-0000-000000000000',
  provider: 'provider2',
  scopes: [
    'scopes6',
    'scopes7'
  ],
  created: '2016-03-13T12:52:32.123Z',
  comment: 'comment0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

