
# Get Project Distribution Credentials V1 Response Distribution Credentials

*This model accepts additional fields of type unknown.*

## Structure

`GetProjectDistributionCredentialsV1ResponseDistributionCredentials`

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
  GetProjectDistributionCredentialsV1ResponseDistributionCredentials,
} from 'rest-apilib';

const getProjectDistributionCredentialsV1ResponseDistributionCredentials: GetProjectDistributionCredentialsV1ResponseDistributionCredentials = {
  distributionCredentialsId: '00001798-0000-0000-0000-000000000000',
  provider: 'provider8',
  scopes: [
    'scopes8'
  ],
  created: '2016-03-13T12:52:32.123Z',
  comment: 'comment4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

