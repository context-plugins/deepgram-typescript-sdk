
# List Project Keys V1 Response Api Keys Items Member

*This model accepts additional fields of type unknown.*

## Structure

`ListProjectKeysV1ResponseApiKeysItemsMember`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `memberId` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListProjectKeysV1ResponseApiKeysItemsMember } from 'deepgram';

const listProjectKeysV1ResponseApiKeysItemsMember: ListProjectKeysV1ResponseApiKeysItemsMember = {
  memberId: 'member_id6',
  email: 'email0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

