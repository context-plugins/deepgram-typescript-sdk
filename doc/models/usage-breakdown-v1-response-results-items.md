
# Usage Breakdown V1 Response Results Items

*This model accepts additional fields of type unknown.*

## Structure

`UsageBreakdownV1ResponseResultsItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hours` | `number` | Required | Audio hours processed |
| `totalHours` | `number` | Required | Total hours including all processing |
| `agentHours` | `number` | Required | Agent hours used |
| `tokensIn` | `number` | Required | Number of input tokens |
| `tokensOut` | `number` | Required | Number of output tokens |
| `ttsCharacters` | `number` | Required | Number of text-to-speech characters processed |
| `requests` | `number` | Required | Number of requests |
| `grouping` | [`UsageBreakdownV1ResponseResultsItemsGrouping`](../../doc/models/usage-breakdown-v1-response-results-items-grouping.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsageBreakdownV1ResponseResultsItems } from 'rest-apilib';

const usageBreakdownV1ResponseResultsItems: UsageBreakdownV1ResponseResultsItems = {
  hours: 49.58,
  totalHours: 116.88,
  agentHours: 119.5,
  tokensIn: 172.24,
  tokensOut: 17.22,
  ttsCharacters: 145.26,
  requests: 32.92,
  grouping: {
    start: '2016-03-13T12:52:32.123Z',
    end: '2016-03-13T12:52:32.123Z',
    accessor: 'accessor6',
    endpoint: 'endpoint6',
    featureSet: 'feature_set2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

