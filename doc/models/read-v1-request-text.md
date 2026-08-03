
# Read V1 Request Text

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1RequestText`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | The plain text to analyze |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1RequestText } from 'rest-apilib';

const readV1RequestText: ReadV1RequestText = {
  text: 'text0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

