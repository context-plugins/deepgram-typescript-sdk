
# Read V1 Request Url

*This model accepts additional fields of type unknown.*

## Structure

`ReadV1RequestUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | A URL pointing to the text source |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReadV1RequestUrl } from 'rest-apilib';

const readV1RequestUrl: ReadV1RequestUrl = {
  url: 'url2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

