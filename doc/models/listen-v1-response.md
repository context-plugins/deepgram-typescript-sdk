
# Listen V1 Response

The standard transcription response

*This model accepts additional fields of type unknown.*

## Structure

`ListenV1Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | [`ListenV1ResponseMetadata`](../../doc/models/listen-v1-response-metadata.md) | Required | - |
| `results` | [`ListenV1ResponseResults`](../../doc/models/listen-v1-response-results.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListenV1Response } from 'deepgram';

const listenV1Response: ListenV1Response = {
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
    summaryInfo: {
      modelUuid: 'model_uuid4',
      inputTokens: 120,
      outputTokens: 120,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    sentimentInfo: {
      modelUuid: 'model_uuid6',
      inputTokens: 86,
      outputTokens: 86,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    topicsInfo: {
      modelUuid: 'model_uuid8',
      inputTokens: 156,
      outputTokens: 156,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    intentsInfo: {
      modelUuid: 'model_uuid6',
      inputTokens: 198,
      outputTokens: 198,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  results: {
    channels: [
      {
        search: [
          {
            query: 'query2',
            hits: [
              {
                confidence: 144.74,
                start: 146.64,
                end: 190.58,
                snippet: 'snippet0',
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          {
            query: 'query2',
            hits: [
              {
                confidence: 144.74,
                start: 146.64,
                end: 190.58,
                snippet: 'snippet0',
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        alternatives: [
          {
            transcript: 'transcript6',
            confidence: 34.78,
            words: [
              {
                word: 'word0',
                start: 58.62,
                end: 102.56,
                confidence: 56.72,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                word: 'word0',
                start: 58.62,
                end: 102.56,
                confidence: 56.72,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            paragraphs: {
              transcript: 'transcript2',
              paragraphs: [
                {
                  sentences: [
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  speaker: 128,
                  numWords: 60,
                  start: 34.44,
                  end: 78.38,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  sentences: [
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  speaker: 128,
                  numWords: 60,
                  start: 34.44,
                  end: 78.38,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  sentences: [
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  speaker: 128,
                  numWords: 60,
                  start: 34.44,
                  end: 78.38,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            entities: [
              {
                label: 'label0',
                value: 'value2',
                rawValue: 'raw_value6',
                confidence: 136.04,
                startWord: 101.8,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                label: 'label0',
                value: 'value2',
                rawValue: 'raw_value6',
                confidence: 136.04,
                startWord: 101.8,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                label: 'label0',
                value: 'value2',
                rawValue: 'raw_value6',
                confidence: 136.04,
                startWord: 101.8,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          {
            transcript: 'transcript6',
            confidence: 34.78,
            words: [
              {
                word: 'word0',
                start: 58.62,
                end: 102.56,
                confidence: 56.72,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                word: 'word0',
                start: 58.62,
                end: 102.56,
                confidence: 56.72,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            paragraphs: {
              transcript: 'transcript2',
              paragraphs: [
                {
                  sentences: [
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  speaker: 128,
                  numWords: 60,
                  start: 34.44,
                  end: 78.38,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  sentences: [
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  speaker: 128,
                  numWords: 60,
                  start: 34.44,
                  end: 78.38,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  sentences: [
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      text: 'text2',
                      start: 16.92,
                      end: 60.86,
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  speaker: 128,
                  numWords: 60,
                  start: 34.44,
                  end: 78.38,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            entities: [
              {
                label: 'label0',
                value: 'value2',
                rawValue: 'raw_value6',
                confidence: 136.04,
                startWord: 101.8,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                label: 'label0',
                value: 'value2',
                rawValue: 'raw_value6',
                confidence: 136.04,
                startWord: 101.8,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              {
                label: 'label0',
                value: 'value2',
                rawValue: 'raw_value6',
                confidence: 136.04,
                startWord: 101.8,
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            ],
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        detectedLanguage: 'detected_language0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    utterances: [
      {
        start: 249.82,
        end: 37.76,
        confidence: 247.92,
        channel: 182,
        transcript: 'transcript0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        start: 249.82,
        end: 37.76,
        confidence: 247.92,
        channel: 182,
        transcript: 'transcript0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    summary: {
      result: 'result4',
      mShort: 'short8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    topics: {
      results: {
        topics: {
          segments: [
            {
              text: 'text6',
              startWord: 4.96,
              endWord: 219.1,
              topics: [
                {
                  topic: 'topic2',
                  confidenceScore: 42.46,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  topic: 'topic2',
                  confidenceScore: 42.46,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    intents: {
      results: {
        intents: {
          segments: [
            {
              text: 'text6',
              startWord: 4.96,
              endWord: 219.1,
              intents: [
                {
                  intent: 'intent4',
                  confidenceScore: 193.42,
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    sentiments: {
      segments: [
        {
          text: 'text6',
          startWord: 4.96,
          endWord: 219.1,
          sentiment: 'sentiment6',
          sentimentScore: 76.78,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      average: {
        sentiment: 'sentiment8',
        sentimentScore: 2.7,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

