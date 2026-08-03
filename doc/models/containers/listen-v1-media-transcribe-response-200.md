
# Listen V1 Media Transcribe Response 200

## Class Name

`ListenV1MediaTranscribeResponse200`

## Cases

| Type |
|  --- |
| [`ListenV1Response`](../../../doc/models/listen-v1-response.md) |
| [`ListenV1AcceptedResponse`](../../../doc/models/listen-v1-accepted-response.md) |

## ListenV1Response

### Initialization Code

#### Example

```ts
const value: ListenV1MediaTranscribeResponse200 = {
  metadata: {
    requestId: '000018ae-0000-0000-0000-000000000000',
    sha256: 'sha2568',
    created: '2016-03-13T12:52:32.123Z',
    duration: 108.02,
    channels: 44,
    models: [
      'models2'
    ],
    modelInfo: { 'key1': 'val1', 'key2': 'val2' },
    transactionKey: 'deprecated',
  },
  results: {
    channels: [
      {
      }
    ],
  },
};
```

## ListenV1AcceptedResponse

### Initialization Code

#### Example

```ts
const value: ListenV1MediaTranscribeResponse200 = {
  requestId: '00000e36-0000-0000-0000-000000000000',
};
```

