
# Create Project Distribution Credentials V1 Request

Request body for creating distribution credentials

*This model accepts additional fields of type unknown.*

## Structure

`CreateProjectDistributionCredentialsV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `comment` | `string \| undefined` | Optional | Optional comment about the credentials |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateProjectDistributionCredentialsV1Request } from 'deepgram';

const createProjectDistributionCredentialsV1Request: CreateProjectDistributionCredentialsV1Request = {
  comment: 'comment2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

