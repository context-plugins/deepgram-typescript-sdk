
# Listen V1 Response Results Utterances Items

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1ResponseResultsUtterancesItems`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `start` | `number \| undefined` | Optional | - |
| `end` | `number \| undefined` | Optional | - |
| `confidence` | `number \| undefined` | Optional | - |
| `channel` | `number \| undefined` | Optional | - |
| `transcript` | `string \| undefined` | Optional | - |
| `words` | [`ListenV1ResponseResultsUtterancesItemsWordsItems[] \| undefined`](../../doc/models/listen-v1-response-results-utterances-items-words-items.md) | Optional | - |
| `speaker` | `number \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1ResponseResultsUtterancesItems } from 'deepgram';

const listenV1ResponseResultsUtterancesItems: ListenV1ResponseResultsUtterancesItems = {
  start: 55.44,
  end: 99.38,
  confidence: 53.54,
  channel: 164,
  transcript: 'transcript8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

