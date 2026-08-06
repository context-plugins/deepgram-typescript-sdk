
# Update Agent Metadata V1 Request

Request body for updating agent configuration metadata

*This model accepts additional fields of type unknown.*

## Structure

`UpdateAgentMetadataV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | `Record<string, string>` | Required | A map of string key-value pairs to associate with this agent configuration |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateAgentMetadataV1Request } from 'deepgram';

const updateAgentMetadataV1Request: UpdateAgentMetadataV1Request = {
  metadata: {
    'key0': 'metadata7',
    'key1': 'metadata8',
    'key2': 'metadata9'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

