
# Usage Breakdown V1 Response

*This model accepts additional fields of type unknown.*

## Structure

`UsageBreakdownV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `start` | `string` | Required | Start date of the usage period |
| `end` | `string` | Required | End date of the usage period |
| `resolution` | [`UsageBreakdownV1ResponseResolution`](../../doc/models/usage-breakdown-v1-response-resolution.md) | Required | - |
| `results` | [`UsageBreakdownV1ResponseResultsItems[]`](../../doc/models/usage-breakdown-v1-response-results-items.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsageBreakdownV1Response } from 'deepgram';

const usageBreakdownV1Response: UsageBreakdownV1Response = {
  start: '2016-03-13T12:52:32.123Z',
  end: '2016-03-13T12:52:32.123Z',
  resolution: {
    units: 'units8',
    amount: 98.28,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  results: [
    {
      hours: 127.36,
      totalHours: 195.94,
      agentHours: 198.56,
      tokensIn: 251.3,
      tokensOut: 96.28,
      ttsCharacters: 224.32,
      requests: 144.02,
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

