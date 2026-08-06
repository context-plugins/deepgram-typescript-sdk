
# Create Agent Configuration V1 Request

Request body for creating an agent configuration

*This model accepts additional fields of type unknown.*

## Structure

`CreateAgentConfigurationV1Request`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `config` | `string` | Required | A valid JSON string representing the agent block of a Settings message |
| `metadata` | `Record<string, string> \| undefined` | Optional | A map of arbitrary key-value pairs for labeling or organizing the agent configuration |
| `apiVersion` | `number \| undefined` | Optional | API version. Defaults to 1<br><br>**Default**: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateAgentConfigurationV1Request } from 'deepgram';

const createAgentConfigurationV1Request: CreateAgentConfigurationV1Request = {
  config: 'config2',
  metadata: {
    'key0': 'metadata3'
  },
  apiVersion: 1,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

