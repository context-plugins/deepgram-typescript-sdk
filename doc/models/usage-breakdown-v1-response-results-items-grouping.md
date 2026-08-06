
# Usage Breakdown V1 Response Results Items Grouping

*This model accepts additional fields of type unknown.*

## Structure

`UsageBreakdownV1ResponseResultsItemsGrouping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `start` | `string \| undefined` | Optional | Start date for this group |
| `end` | `string \| undefined` | Optional | End date for this group |
| `accessor` | `string \| null \| undefined` | Optional | Optional accessor identifier |
| `endpoint` | `string \| null \| undefined` | Optional | Optional endpoint identifier |
| `featureSet` | `string \| null \| undefined` | Optional | Optional feature set identifier |
| `models` | `string[] \| undefined` | Optional | - |
| `method` | `string \| null \| undefined` | Optional | Optional method identifier |
| `tags` | `string[] \| null \| undefined` | Optional | Optional list of tags, null unless grouped by tags. |
| `deployment` | `string \| null \| undefined` | Optional | Optional deployment identifier |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsageBreakdownV1ResponseResultsItemsGrouping } from 'deepgram';

const usageBreakdownV1ResponseResultsItemsGrouping: UsageBreakdownV1ResponseResultsItemsGrouping = {
  start: '2016-03-13T12:52:32.123Z',
  end: '2016-03-13T12:52:32.123Z',
  accessor: 'accessor8',
  endpoint: 'endpoint8',
  featureSet: 'feature_set0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

