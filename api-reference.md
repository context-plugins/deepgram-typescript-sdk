# Reference

> Source: [DeepgramClient](src/client.ts)

## AgentV1SettingsThinkModels

> Source: [AgentV1SettingsThinkModels](src/resources/agent-v1-settings-think-models.ts)

<details>
<summary><code>list(options?: RequestOptions): ApiPromise&lt;AgentThinkModelsV1Response, AgentV1SettingsThinkModels.ListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the available think models that can be used for AI agent processing

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.agentV1SettingsThinkModels.list();
  // TODO: Handle 'response' of type AgentThinkModelsV1Response
} catch (err) {
  if (err instanceof AgentV1SettingsThinkModels.ListError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentThinkModelsV1Response](src/models/agent-think-models-v1-response.ts)</code>

**OnError**: <code>[AgentV1SettingsThinkModels.ListError](src/resources/agent-v1-settings-think-models.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VoiceAgentConfigurations

> Source: [VoiceAgentConfigurations](src/resources/voice-agent-configurations.ts)

<details>
<summary><code>create(request: VoiceAgentConfigurations.CreateRequest, options?: RequestOptions): ApiPromise&lt;CreateAgentConfigurationV1Response, VoiceAgentConfigurations.CreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new reusable agent configuration. The `config` field must be a valid JSON string representing the `agent` block of a Settings message. The returned `agent_id` can be passed in place of the full `agent` object in future Settings messages.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentConfigurations.create({ projectId });
  // TODO: Handle 'response' of type CreateAgentConfigurationV1Response
} catch (err) {
  if (err instanceof VoiceAgentConfigurations.CreateError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>body?</code> | <code>[CreateAgentConfigurationV1Request](src/models/create-agent-configuration-v1-request.ts)</code> | Agent configuration details |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateAgentConfigurationV1Response](src/models/create-agent-configuration-v1-response.ts)</code>

**OnError**: <code>[VoiceAgentConfigurations.CreateError](src/resources/voice-agent-configurations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete(request: VoiceAgentConfigurations.DeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, VoiceAgentConfigurations.DeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified agent configuration. Deleting an agent configuration can cause a production outage if your service references this agent UUID. Migrate all active sessions to a new configuration before deleting.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentConfigurations.delete({ projectId, agentId });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof VoiceAgentConfigurations.DeleteError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>agentId</code> | <code>string</code> | The unique identifier of the agent configuration |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[VoiceAgentConfigurations.DeleteError](src/resources/voice-agent-configurations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get(request: VoiceAgentConfigurations.GetRequest, options?: RequestOptions): ApiPromise&lt;AgentConfigurationV1, VoiceAgentConfigurations.GetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified agent configuration in its uninterpolated form

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentConfigurations.get({ projectId, agentId });
  // TODO: Handle 'response' of type AgentConfigurationV1
} catch (err) {
  if (err instanceof VoiceAgentConfigurations.GetError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>agentId</code> | <code>string</code> | The unique identifier of the agent configuration |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentConfigurationV1](src/models/agent-configuration-v1.ts)</code>

**OnError**: <code>[VoiceAgentConfigurations.GetError](src/resources/voice-agent-configurations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list2(request: VoiceAgentConfigurations.List2Request, options?: RequestOptions): ApiPromise&lt;ListAgentConfigurationsV1Response, VoiceAgentConfigurations.List2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all agent configurations for the specified project. Configurations are returned in their uninterpolated form—template variable placeholders appear as-is rather than with their substituted values.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentConfigurations.list2({ projectId });
  // TODO: Handle 'response' of type ListAgentConfigurationsV1Response
} catch (err) {
  if (err instanceof VoiceAgentConfigurations.List2Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAgentConfigurationsV1Response](src/models/list-agent-configurations-v1-response.ts)</code>

**OnError**: <code>[VoiceAgentConfigurations.List2Error](src/resources/voice-agent-configurations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update(request: VoiceAgentConfigurations.UpdateRequest, options?: RequestOptions): ApiPromise&lt;AgentConfigurationV1, VoiceAgentConfigurations.UpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the metadata associated with an agent configuration. The config itself is immutable—to change the configuration, delete the existing agent and create a new one.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentConfigurations.update({ projectId, agentId });
  // TODO: Handle 'response' of type AgentConfigurationV1
} catch (err) {
  if (err instanceof VoiceAgentConfigurations.UpdateError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>agentId</code> | <code>string</code> | The unique identifier of the agent configuration |
| <code>body?</code> | <code>[UpdateAgentMetadataV1Request](src/models/update-agent-metadata-v1-request.ts)</code> | Updated metadata for the agent configuration |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentConfigurationV1](src/models/agent-configuration-v1.ts)</code>

**OnError**: <code>[VoiceAgentConfigurations.UpdateError](src/resources/voice-agent-configurations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VoiceAgentVariables

> Source: [VoiceAgentVariables](src/resources/voice-agent-variables.ts)

<details>
<summary><code>create2(request: VoiceAgentVariables.Create2Request, options?: RequestOptions): ApiPromise&lt;AgentVariableV1, VoiceAgentVariables.Create2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new template variable. Variables follow the `DG_<VARIABLE_NAME>` naming format and can substitute any JSON value in an agent configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentVariables.create2({ projectId });
  // TODO: Handle 'response' of type AgentVariableV1
} catch (err) {
  if (err instanceof VoiceAgentVariables.Create2Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>body?</code> | <code>[CreateAgentVariableV1Request](src/models/create-agent-variable-v1-request.ts)</code> | Agent variable details |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentVariableV1](src/models/agent-variable-v1.ts)</code>

**OnError**: <code>[VoiceAgentVariables.Create2Error](src/resources/voice-agent-variables.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete2(request: VoiceAgentVariables.Delete2Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, VoiceAgentVariables.Delete2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified template variable

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentVariables.delete2({ projectId, variableId });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof VoiceAgentVariables.Delete2Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>variableId</code> | <code>string</code> | The unique identifier of the agent variable |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[VoiceAgentVariables.Delete2Error](src/resources/voice-agent-variables.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get2(request: VoiceAgentVariables.Get2Request, options?: RequestOptions): ApiPromise&lt;AgentVariableV1, VoiceAgentVariables.Get2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified template variable

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentVariables.get2({ projectId, variableId });
  // TODO: Handle 'response' of type AgentVariableV1
} catch (err) {
  if (err instanceof VoiceAgentVariables.Get2Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>variableId</code> | <code>string</code> | The unique identifier of the agent variable |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentVariableV1](src/models/agent-variable-v1.ts)</code>

**OnError**: <code>[VoiceAgentVariables.Get2Error](src/resources/voice-agent-variables.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list3(request: VoiceAgentVariables.List3Request, options?: RequestOptions): ApiPromise&lt;ListAgentVariablesV1Response, VoiceAgentVariables.List3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all template variables for the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentVariables.list3({ projectId });
  // TODO: Handle 'response' of type ListAgentVariablesV1Response
} catch (err) {
  if (err instanceof VoiceAgentVariables.List3Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAgentVariablesV1Response](src/models/list-agent-variables-v1-response.ts)</code>

**OnError**: <code>[VoiceAgentVariables.List3Error](src/resources/voice-agent-variables.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update2(request: VoiceAgentVariables.Update2Request, options?: RequestOptions): ApiPromise&lt;AgentVariableV1, VoiceAgentVariables.Update2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the value of an existing template variable

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceAgentVariables.update2({ projectId, variableId });
  // TODO: Handle 'response' of type AgentVariableV1
} catch (err) {
  if (err instanceof VoiceAgentVariables.Update2Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>variableId</code> | <code>string</code> | The unique identifier of the agent variable |
| <code>body?</code> | <code>[UpdateAgentVariableV1Request](src/models/update-agent-variable-v1-request.ts)</code> | Updated value for the agent variable |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentVariableV1](src/models/agent-variable-v1.ts)</code>

**OnError**: <code>[VoiceAgentVariables.Update2Error](src/resources/voice-agent-variables.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ListenV1Media

> Source: [ListenV1Media](src/resources/listen-v1-media.ts)

<details>
<summary><code>transcribe(request: ListenV1Media.TranscribeRequest, options?: RequestOptions): ApiPromise&lt;ListenV1MediaTranscribeResponse200, ListenV1Media.TranscribeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribe audio and video using Deepgram's speech-to-text REST API

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.listenV1Media.transcribe();
  // TODO: Handle 'response' of type ListenV1MediaTranscribeResponse200
} catch (err) {
  if (err instanceof ListenV1Media.TranscribeError && err.payload.kind === "listenV1Response") {
    // TODO: Handle 'err.payload.body' of type ListenV1Response
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>callback?</code> | <code>string</code> | URL to which we'll make the callback request |
| <code>callbackMethod?</code> | <code>[V1ListenPostParametersCallbackMethod](src/models/v1-listen-post-parameters-callback-method.ts)</code> | HTTP method by which the callback request will be made |
| <code>extra?</code> | <code>[V1ListenPostParametersExtra](src/models/unions/v1-listen-post-parameters-extra.ts)</code> | Arbitrary key-value pairs that are attached to the API response for usage in downstream processing |
| <code>sentiment?</code> | <code>boolean</code> | Recognizes the sentiment throughout a transcript or text |
| <code>summarize?</code> | <code>[V1ListenPostParametersSummarize](src/models/unions/v1-listen-post-parameters-summarize.ts)</code> | Summarize content. For Listen API, supports string version option. For Read API, accepts boolean only. |
| <code>tag?</code> | <code>[V1ListenPostParametersTag](src/models/unions/v1-listen-post-parameters-tag.ts)</code> | Label your requests for the purpose of identification during usage reporting |
| <code>topics?</code> | <code>boolean</code> | Detect topics throughout a transcript or text |
| <code>customTopic?</code> | <code>[V1ListenPostParametersCustomTopic](src/models/unions/v1-listen-post-parameters-custom-topic.ts)</code> | Custom topics you want the model to detect within your input audio or text if present Submit up to `100`. |
| <code>customTopicMode?</code> | <code>[V1ListenPostParametersCustomTopicMode](src/models/v1-listen-post-parameters-custom-topic-mode.ts)</code> | Sets how the model will interpret strings submitted to the `custom_topic` param. When `strict`, the model will only return topics submitted using the `custom_topic` param. When `extended`, the model will return its own detected topics in addition to those submitted using the `custom_topic` param |
| <code>intents?</code> | <code>boolean</code> | Recognizes speaker intent throughout a transcript or text |
| <code>customIntent?</code> | <code>[V1ListenPostParametersCustomIntent](src/models/unions/v1-listen-post-parameters-custom-intent.ts)</code> | Custom intents you want the model to detect within your input audio if present |
| <code>customIntentMode?</code> | <code>[V1ListenPostParametersCustomTopicMode](src/models/v1-listen-post-parameters-custom-topic-mode.ts)</code> | Sets how the model will interpret intents submitted to the `custom_intent` param. When `strict`, the model will only return intents submitted using the `custom_intent` param. When `extended`, the model will return its own detected intents in the `custom_intent` param. |
| <code>detectEntities?</code> | <code>boolean</code> | Identifies and extracts key entities from content in submitted audio |
| <code>detectLanguage?</code> | <code>[V1ListenPostParametersDetectLanguage](src/models/unions/v1-listen-post-parameters-detect-language.ts)</code> | Identifies the dominant language spoken in submitted audio |
| <code>diarize?</code> | <code>boolean</code> | Deprecated: use `diarize_model` instead. Recognize speaker changes. Each word in the transcript will be assigned a speaker number starting at 0. |
| <code>diarizeModel?</code> | <code>[V1ListenPostParametersDiarizeModel](src/models/v1-listen-post-parameters-diarize-model.ts)</code> | Select and enable a specific diarization model version. Specifying this parameter enables diarization and selects the model — you do not need to also set the deprecated `diarize=true` parameter. For batch, supported values are `latest` (currently v2), `v1`, and `v2`. For streaming, supported values are `latest` (currently v1) and `v1`; `v2` returns a validation error on streaming requests. |
| <code>dictation?</code> | <code>boolean</code> | Dictation mode for controlling formatting with dictated speech |
| <code>encoding?</code> | <code>[V1ListenPostParametersEncoding](src/models/v1-listen-post-parameters-encoding.ts)</code> | Specify the expected encoding of your submitted audio |
| <code>fillerWords?</code> | <code>boolean</code> | Filler Words can help transcribe interruptions in your audio, like "uh" and "um" |
| <code>keyterm?</code> | <code>string[]</code> | Key term prompting improves recognition of specialized terminology and brands. Only compatible with Nova-3.<br><br>`keyterm` accepts plain terms only. Unlike the legacy `keywords` feature, it does not support weights or intensifiers. Appending one (for example, `keyterm=term:0.15`) is not rejected—the weight is silently ignored and the entire value is treated as a literal keyterm.<br><br>To boost multiple separate keyterms, repeat the `keyterm` parameter (for example, `keyterm=term1&keyterm=term2`). To boost one multi-word phrase as a single keyterm, join the words with `%20` or `+` (for example, `keyterm=customer%20service`). Do not separate keyterms with commas, semicolons, or line breaks. |
| <code>keywords?</code> | <code>[V1ListenPostParametersKeywords](src/models/unions/v1-listen-post-parameters-keywords.ts)</code> | Keywords can boost or suppress specialized terminology and brands |
| <code>language?</code> | <code>string</code> | The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available |
| <code>measurements?</code> | <code>boolean</code> | Spoken measurements will be converted to their corresponding abbreviations |
| <code>model?</code> | <code>[V1ListenPostParametersModel](src/models/unions/v1-listen-post-parameters-model.ts)</code> | AI model used to process submitted audio |
| <code>multichannel?</code> | <code>boolean</code> | Transcribe each audio channel independently |
| <code>numerals?</code> | <code>boolean</code> | Numerals converts numbers from written format to numerical format |
| <code>paragraphs?</code> | <code>boolean</code> | Splits audio into paragraphs to improve transcript readability |
| <code>profanityFilter?</code> | <code>boolean</code> | Profanity Filter looks for recognized profanity and converts it to the nearest recognized non-profane word or removes it from the transcript completely |
| <code>punctuate?</code> | <code>boolean</code> | Add punctuation and capitalization to the transcript |
| <code>redact?</code> | <code>[V1ListenPostParametersRedact](src/models/unions/v1-listen-post-parameters-redact.ts)</code> | Redaction removes sensitive information from your transcripts |
| <code>replace?</code> | <code>[V1ListenPostParametersReplace](src/models/unions/v1-listen-post-parameters-replace.ts)</code> | Search for terms or phrases in submitted audio and replaces them |
| <code>search?</code> | <code>[V1ListenPostParametersSearch](src/models/unions/v1-listen-post-parameters-search.ts)</code> | Search for terms or phrases in submitted audio |
| <code>smartFormat?</code> | <code>boolean</code> | Apply formatting to transcript output. When set to true, additional formatting will be applied to transcripts to improve readability |
| <code>utterances?</code> | <code>boolean</code> | Segments speech into meaningful semantic units |
| <code>uttSplit?</code> | <code>number</code> | Seconds to wait before detecting a pause between words in submitted audio |
| <code>version?</code> | <code>[V1ListenPostParametersVersion](src/models/unions/v1-listen-post-parameters-version.ts)</code> | Version of an AI model to use |
| <code>mipOptOut?</code> | <code>boolean</code> | Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip |
| <code>body?</code> | <code>[ListenV1RequestUrl](src/models/listen-v1-request-url.ts)</code> | Transcribe an audio or video file |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListenV1MediaTranscribeResponse200](src/models/unions/listen-v1-media-transcribe-response200.ts)</code>

**OnError**: <code>[ListenV1Media.TranscribeError](src/resources/listen-v1-media.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SpeakV1Audio

> Source: [SpeakV1Audio](src/resources/speak-v1-audio.ts)

<details>
<summary><code>generate(request: SpeakV1Audio.GenerateRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, SpeakV1Audio.GenerateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text into natural-sounding speech using Deepgram's TTS REST API

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.speakV1Audio.generate();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof SpeakV1Audio.GenerateError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>callback?</code> | <code>string</code> | URL to which we'll make the callback request |
| <code>callbackMethod?</code> | <code>[V1ListenPostParametersCallbackMethod](src/models/v1-listen-post-parameters-callback-method.ts)</code> | HTTP method by which the callback request will be made |
| <code>mipOptOut?</code> | <code>boolean</code> | Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip |
| <code>tag?</code> | <code>[V1SpeakPostParametersTag](src/models/unions/v1-speak-post-parameters-tag.ts)</code> | Label your requests for the purpose of identification during usage reporting |
| <code>bitRate?</code> | <code>[V1SpeakPostParametersBitRate](src/models/unions/v1-speak-post-parameters-bit-rate.ts)</code> | The bitrate of the audio in bits per second. Choose from predefined ranges or specific values based on the encoding type. |
| <code>container?</code> | <code>[V1SpeakPostParametersContainer](src/models/unions/v1-speak-post-parameters-container.ts)</code> | Container specifies the file format wrapper for the output audio. The available options depend on the encoding type. |
| <code>encoding?</code> | <code>[V1SpeakPostParametersEncoding](src/models/unions/v1-speak-post-parameters-encoding.ts)</code> | Encoding allows you to specify the expected encoding of your audio output |
| <code>model?</code> | <code>[V1SpeakPostParametersModel](src/models/v1-speak-post-parameters-model.ts)</code> | AI model used to process submitted text |
| <code>sampleRate?</code> | <code>[V1SpeakPostParametersSampleRate](src/models/unions/v1-speak-post-parameters-sample-rate.ts)</code> | Sample Rate specifies the sample rate for the output audio. Based on the encoding, different sample rates are supported. For some encodings, the sample rate is not configurable |
| <code>speed?</code> | <code>number</code> | Speaking rate multiplier that adjusts the pace of generated speech while preserving natural prosody and voice quality. Not yet supported in all languages. |
| <code>body?</code> | <code>[SpeakV1Request](src/models/speak-v1-request.ts)</code> | Transform text to speech |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[SpeakV1Audio.GenerateError](src/resources/speak-v1-audio.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ReadV1Text

> Source: [ReadV1Text](src/resources/read-v1-text.ts)

<details>
<summary><code>analyze(request: ReadV1Text.AnalyzeRequest, options?: RequestOptions): ApiPromise&lt;ReadV1Response, ReadV1Text.AnalyzeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze text content using Deepgrams text analysis API

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.readV1Text.analyze();
  // TODO: Handle 'response' of type ReadV1Response
} catch (err) {
  if (err instanceof ReadV1Text.AnalyzeError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>callback?</code> | <code>string</code> | URL to which we'll make the callback request |
| <code>callbackMethod?</code> | <code>[V1ListenPostParametersCallbackMethod](src/models/v1-listen-post-parameters-callback-method.ts)</code> | HTTP method by which the callback request will be made |
| <code>sentiment?</code> | <code>boolean</code> | Recognizes the sentiment throughout a transcript or text |
| <code>summarize?</code> | <code>[V1ReadPostParametersSummarize](src/models/unions/v1-read-post-parameters-summarize.ts)</code> | Summarize content. For Listen API, supports string version option. For Read API, accepts boolean only. |
| <code>tag?</code> | <code>[V1ReadPostParametersTag](src/models/unions/v1-read-post-parameters-tag.ts)</code> | Label your requests for the purpose of identification during usage reporting |
| <code>topics?</code> | <code>boolean</code> | Detect topics throughout a transcript or text |
| <code>customTopic?</code> | <code>[V1ReadPostParametersCustomTopic](src/models/unions/v1-read-post-parameters-custom-topic.ts)</code> | Custom topics you want the model to detect within your input audio or text if present Submit up to `100`. |
| <code>customTopicMode?</code> | <code>[V1ListenPostParametersCustomTopicMode](src/models/v1-listen-post-parameters-custom-topic-mode.ts)</code> | Sets how the model will interpret strings submitted to the `custom_topic` param. When `strict`, the model will only return topics submitted using the `custom_topic` param. When `extended`, the model will return its own detected topics in addition to those submitted using the `custom_topic` param |
| <code>intents?</code> | <code>boolean</code> | Recognizes speaker intent throughout a transcript or text |
| <code>customIntent?</code> | <code>[V1ReadPostParametersCustomIntent](src/models/unions/v1-read-post-parameters-custom-intent.ts)</code> | Custom intents you want the model to detect within your input audio if present |
| <code>customIntentMode?</code> | <code>[V1ListenPostParametersCustomTopicMode](src/models/v1-listen-post-parameters-custom-topic-mode.ts)</code> | Sets how the model will interpret intents submitted to the `custom_intent` param. When `strict`, the model will only return intents submitted using the `custom_intent` param. When `extended`, the model will return its own detected intents in the `custom_intent` param. |
| <code>language?</code> | <code>string</code> | The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available |
| <code>body?</code> | <code>[ReadV1Request](src/models/unions/read-v1-request.ts)</code> | Analyze a text file |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReadV1Response](src/models/read-v1-response.ts)</code>

**OnError**: <code>[ReadV1Text.AnalyzeError](src/resources/read-v1-text.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1Projects

> Source: [ManageV1Projects](src/resources/manage-v1-projects.ts)

<details>
<summary><code>delete3(request: ManageV1Projects.Delete3Request, options?: RequestOptions): ApiPromise&lt;DeleteProjectV1Response, ManageV1Projects.Delete3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1Projects.delete3({ projectId });
  // TODO: Handle 'response' of type DeleteProjectV1Response
} catch (err) {
  if (err instanceof ManageV1Projects.Delete3Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteProjectV1Response](src/models/delete-project-v1-response.ts)</code>

**OnError**: <code>[ManageV1Projects.Delete3Error](src/resources/manage-v1-projects.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get3(request: ManageV1Projects.Get3Request, options?: RequestOptions): ApiPromise&lt;GetProjectV1Response, ManageV1Projects.Get3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1Projects.get3({ projectId });
  // TODO: Handle 'response' of type GetProjectV1Response
} catch (err) {
  if (err instanceof ManageV1Projects.Get3Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>limit?</code> | <code>number</code> | Number of results to return per page. Default 10. Range [1,1000] |
| <code>page?</code> | <code>number</code> | Navigate and return the results to retrieve specific portions of information of the response |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProjectV1Response](src/models/get-project-v1-response.ts)</code>

**OnError**: <code>[ManageV1Projects.Get3Error](src/resources/manage-v1-projects.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>leave(request: ManageV1Projects.LeaveRequest, options?: RequestOptions): ApiPromise&lt;LeaveProjectV1Response, ManageV1Projects.LeaveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the authenticated account from the specific project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1Projects.leave({ projectId });
  // TODO: Handle 'response' of type LeaveProjectV1Response
} catch (err) {
  if (err instanceof ManageV1Projects.LeaveError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LeaveProjectV1Response](src/models/leave-project-v1-response.ts)</code>

**OnError**: <code>[ManageV1Projects.LeaveError](src/resources/manage-v1-projects.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list4(options?: RequestOptions): ApiPromise&lt;ListProjectsV1Response, ManageV1Projects.List4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves basic information about the projects associated with the API key

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1Projects.list4();
  // TODO: Handle 'response' of type ListProjectsV1Response
} catch (err) {
  if (err instanceof ManageV1Projects.List4Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectsV1Response](src/models/list-projects-v1-response.ts)</code>

**OnError**: <code>[ManageV1Projects.List4Error](src/resources/manage-v1-projects.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update3(request: ManageV1Projects.Update3Request, options?: RequestOptions): ApiPromise&lt;UpdateProjectV1Response, ManageV1Projects.Update3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name or other properties of an existing project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1Projects.update3({ projectId });
  // TODO: Handle 'response' of type UpdateProjectV1Response
} catch (err) {
  if (err instanceof ManageV1Projects.Update3Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>body?</code> | <code>[UpdateProjectV1Request](src/models/update-project-v1-request.ts)</code> | The name of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateProjectV1Response](src/models/update-project-v1-response.ts)</code>

**OnError**: <code>[ManageV1Projects.Update3Error](src/resources/manage-v1-projects.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsModels

> Source: [ManageV1ProjectsModels](src/resources/manage-v1-projects-models.ts)

<details>
<summary><code>get4(request: ManageV1ProjectsModels.Get4Request, options?: RequestOptions): ApiPromise&lt;GetModelV1Response, ManageV1ProjectsModels.Get4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for a specific model

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsModels.get4({ projectId, modelId });
  // TODO: Handle 'response' of type GetModelV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsModels.Get4Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>modelId</code> | <code>string</code> | The specific UUID of the model |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetModelV1Response](src/models/unions/get-model-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsModels.Get4Error](src/resources/manage-v1-projects-models.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list5(request: ManageV1ProjectsModels.List5Request, options?: RequestOptions): ApiPromise&lt;ListModelsV1Response, ManageV1ProjectsModels.List5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata on all the latest models that a specific project has access to, including non-public models

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsModels.list5({ projectId });
  // TODO: Handle 'response' of type ListModelsV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsModels.List5Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>includeOutdated?</code> | <code>boolean</code> | returns non-latest versions of models |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListModelsV1Response](src/models/list-models-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsModels.List5Error](src/resources/manage-v1-projects-models.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1Models

> Source: [ManageV1Models](src/resources/manage-v1-models.ts)

<details>
<summary><code>get5(request: ManageV1Models.Get5Request, options?: RequestOptions): ApiPromise&lt;GetModelV1Response, ManageV1Models.Get5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for a specific public model

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1Models.get5({ modelId });
  // TODO: Handle 'response' of type GetModelV1Response
} catch (err) {
  if (err instanceof ManageV1Models.Get5Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>modelId</code> | <code>string</code> | The specific UUID of the model |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetModelV1Response](src/models/unions/get-model-v1-response.ts)</code>

**OnError**: <code>[ManageV1Models.Get5Error](src/resources/manage-v1-models.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list6(request: ManageV1Models.List6Request, options?: RequestOptions): ApiPromise&lt;ListModelsV1Response, ManageV1Models.List6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata on all the latest public models. To retrieve custom models, use Get Project Models.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1Models.list6();
  // TODO: Handle 'response' of type ListModelsV1Response
} catch (err) {
  if (err instanceof ManageV1Models.List6Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includeOutdated?</code> | <code>boolean</code> | returns non-latest versions of models |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListModelsV1Response](src/models/list-models-v1-response.ts)</code>

**OnError**: <code>[ManageV1Models.List6Error](src/resources/manage-v1-models.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsKeys

> Source: [ManageV1ProjectsKeys](src/resources/manage-v1-projects-keys.ts)

<details>
<summary><code>create3(request: ManageV1ProjectsKeys.Create3Request, options?: RequestOptions): ApiPromise&lt;CreateKeyV1Response, ManageV1ProjectsKeys.Create3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new API key with specified settings for the project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsKeys.create3({ projectId });
  // TODO: Handle 'response' of type CreateKeyV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsKeys.Create3Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>body?</code> | <code>[CreateKeyV1Request](src/models/unions/create-key-v1-request.ts)</code> | API key settings |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateKeyV1Response](src/models/create-key-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsKeys.Create3Error](src/resources/manage-v1-projects-keys.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete4(request: ManageV1ProjectsKeys.Delete4Request, options?: RequestOptions): ApiPromise&lt;DeleteProjectKeyV1Response, ManageV1ProjectsKeys.Delete4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API key for a specific project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsKeys.delete4({ projectId, keyId });
  // TODO: Handle 'response' of type DeleteProjectKeyV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsKeys.Delete4Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>keyId</code> | <code>string</code> | The unique identifier of the API key |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteProjectKeyV1Response](src/models/delete-project-key-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsKeys.Delete4Error](src/resources/manage-v1-projects-keys.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get6(request: ManageV1ProjectsKeys.Get6Request, options?: RequestOptions): ApiPromise&lt;GetProjectKeyV1Response, ManageV1ProjectsKeys.Get6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about a specified API key

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsKeys.get6({ projectId, keyId });
  // TODO: Handle 'response' of type GetProjectKeyV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsKeys.Get6Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>keyId</code> | <code>string</code> | The unique identifier of the API key |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProjectKeyV1Response](src/models/get-project-key-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsKeys.Get6Error](src/resources/manage-v1-projects-keys.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list7(request: ManageV1ProjectsKeys.List7Request, options?: RequestOptions): ApiPromise&lt;ListProjectKeysV1Response, ManageV1ProjectsKeys.List7Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all API keys associated with the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsKeys.list7({ projectId });
  // TODO: Handle 'response' of type ListProjectKeysV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsKeys.List7Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>status?</code> | <code>[V1ProjectsProjectIdKeysGetParametersStatus](src/models/v1-projects-project-id-keys-get-parameters-status.ts)</code> | Only return keys with a specific status |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectKeysV1Response](src/models/list-project-keys-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsKeys.List7Error](src/resources/manage-v1-projects-keys.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsMembers

> Source: [ManageV1ProjectsMembers](src/resources/manage-v1-projects-members.ts)

<details>
<summary><code>delete5(request: ManageV1ProjectsMembers.Delete5Request, options?: RequestOptions): ApiPromise&lt;DeleteProjectMemberV1Response, ManageV1ProjectsMembers.Delete5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a member from the project using their unique member ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsMembers.delete5({ projectId, memberId });
  // TODO: Handle 'response' of type DeleteProjectMemberV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsMembers.Delete5Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>memberId</code> | <code>string</code> | The unique identifier of the Member |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteProjectMemberV1Response](src/models/delete-project-member-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsMembers.Delete5Error](src/resources/manage-v1-projects-members.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list8(request: ManageV1ProjectsMembers.List8Request, options?: RequestOptions): ApiPromise&lt;ListProjectMembersV1Response, ManageV1ProjectsMembers.List8Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of members for a given project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsMembers.list8({ projectId });
  // TODO: Handle 'response' of type ListProjectMembersV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsMembers.List8Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectMembersV1Response](src/models/list-project-members-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsMembers.List8Error](src/resources/manage-v1-projects-members.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsMembersScopes

> Source: [ManageV1ProjectsMembersScopes](src/resources/manage-v1-projects-members-scopes.ts)

<details>
<summary><code>list9(request: ManageV1ProjectsMembersScopes.List9Request, options?: RequestOptions): ApiPromise&lt;ListProjectMemberScopesV1Response, ManageV1ProjectsMembersScopes.List9Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of scopes for a specific member

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsMembersScopes.list9({ projectId, memberId });
  // TODO: Handle 'response' of type ListProjectMemberScopesV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsMembersScopes.List9Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>memberId</code> | <code>string</code> | The unique identifier of the Member |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectMemberScopesV1Response](src/models/list-project-member-scopes-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsMembersScopes.List9Error](src/resources/manage-v1-projects-members-scopes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update4(request: ManageV1ProjectsMembersScopes.Update4Request, options?: RequestOptions): ApiPromise&lt;UpdateProjectMemberScopesV1Response, ManageV1ProjectsMembersScopes.Update4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the scopes for a specific member

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsMembersScopes.update4({ projectId, memberId });
  // TODO: Handle 'response' of type UpdateProjectMemberScopesV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsMembersScopes.Update4Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>memberId</code> | <code>string</code> | The unique identifier of the Member |
| <code>body?</code> | <code>[UpdateProjectMemberScopesV1Request](src/models/update-project-member-scopes-v1-request.ts)</code> | A scope to update |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateProjectMemberScopesV1Response](src/models/update-project-member-scopes-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsMembersScopes.Update4Error](src/resources/manage-v1-projects-members-scopes.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsMembersInvites

> Source: [ManageV1ProjectsMembersInvites](src/resources/manage-v1-projects-members-invites.ts)

<details>
<summary><code>create4(request: ManageV1ProjectsMembersInvites.Create4Request, options?: RequestOptions): ApiPromise&lt;CreateProjectInviteV1Response, ManageV1ProjectsMembersInvites.Create4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates an invite for a specific project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsMembersInvites.create4({ projectId });
  // TODO: Handle 'response' of type CreateProjectInviteV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsMembersInvites.Create4Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>body?</code> | <code>[CreateProjectInviteV1Request](src/models/create-project-invite-v1-request.ts)</code> | email to invite to the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateProjectInviteV1Response](src/models/create-project-invite-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsMembersInvites.Create4Error](src/resources/manage-v1-projects-members-invites.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete6(request: ManageV1ProjectsMembersInvites.Delete6Request, options?: RequestOptions): ApiPromise&lt;DeleteProjectInviteV1Response, ManageV1ProjectsMembersInvites.Delete6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an invite for a specific project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsMembersInvites.delete6({ projectId, email });
  // TODO: Handle 'response' of type DeleteProjectInviteV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsMembersInvites.Delete6Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>email</code> | <code>string</code> | The email address of the member |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteProjectInviteV1Response](src/models/delete-project-invite-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsMembersInvites.Delete6Error](src/resources/manage-v1-projects-members-invites.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list10(request: ManageV1ProjectsMembersInvites.List10Request, options?: RequestOptions): ApiPromise&lt;ListProjectInvitesV1Response, ManageV1ProjectsMembersInvites.List10Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a list of invites for a specific project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsMembersInvites.list10({ projectId });
  // TODO: Handle 'response' of type ListProjectInvitesV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsMembersInvites.List10Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectInvitesV1Response](src/models/list-project-invites-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsMembersInvites.List10Error](src/resources/manage-v1-projects-members-invites.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsRequests

> Source: [ManageV1ProjectsRequests](src/resources/manage-v1-projects-requests.ts)

<details>
<summary><code>get7(request: ManageV1ProjectsRequests.Get7Request, options?: RequestOptions): ApiPromise&lt;GetProjectRequestV1Response, ManageV1ProjectsRequests.Get7Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific request for a specific project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsRequests.get7({ projectId, requestId });
  // TODO: Handle 'response' of type GetProjectRequestV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsRequests.Get7Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>requestId</code> | <code>string</code> | The unique identifier of the request |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProjectRequestV1Response](src/models/get-project-request-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsRequests.Get7Error](src/resources/manage-v1-projects-requests.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list11(request: ManageV1ProjectsRequests.List11Request, options?: RequestOptions): ApiPromise&lt;ListProjectRequestsV1Response, ManageV1ProjectsRequests.List11Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a list of requests for a specific project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsRequests.list11({ projectId });
  // TODO: Handle 'response' of type ListProjectRequestsV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsRequests.List11Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>start?</code> | <code>Date</code> (date-time) | Start date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+HH:MM |
| <code>end?</code> | <code>Date</code> (date-time) | End date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+HH:MM |
| <code>limit?</code> | <code>number</code> | Number of results to return per page. Default 10. Range [1,1000] |
| <code>page?</code> | <code>number</code> | Navigate and return the results to retrieve specific portions of information of the response |
| <code>accessor?</code> | <code>string</code> | Filter for requests where a specific accessor was used |
| <code>requestId?</code> | <code>string</code> | Filter for a specific request id |
| <code>deployment?</code> | <code>[V1ProjectsProjectIdRequestsGetParametersDeployment](src/models/v1-projects-project-id-requests-get-parameters-deployment.ts)</code> | Filter for requests where a specific deployment was used |
| <code>endpoint?</code> | <code>[V1ProjectsProjectIdRequestsGetParametersEndpoint](src/models/v1-projects-project-id-requests-get-parameters-endpoint.ts)</code> | Filter for requests where a specific endpoint was used |
| <code>method?</code> | <code>[V1ProjectsProjectIdRequestsGetParametersMethod](src/models/v1-projects-project-id-requests-get-parameters-method.ts)</code> | Filter for requests where a specific method was used |
| <code>status?</code> | <code>[V1ProjectsProjectIdRequestsGetParametersStatus](src/models/v1-projects-project-id-requests-get-parameters-status.ts)</code> | Filter for requests that succeeded (status code < 300) or failed (status code >=400) |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectRequestsV1Response](src/models/list-project-requests-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsRequests.List11Error](src/resources/manage-v1-projects-requests.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsUsage

> Source: [ManageV1ProjectsUsage](src/resources/manage-v1-projects-usage.ts)

<details>
<summary><code>get8(request: ManageV1ProjectsUsage.Get8Request, options?: RequestOptions): ApiPromise&lt;UsageV1Response, ManageV1ProjectsUsage.Get8Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the usage for a specific project. Use Get Project Usage Breakdown for a more comprehensive usage summary.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsUsage.get8({ projectId });
  // TODO: Handle 'response' of type UsageV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsUsage.Get8Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>start?</code> | <code>string</code> (date) | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | End date of the requested date range. Format accepted is YYYY-MM-DD |
| <code>accessor?</code> | <code>string</code> | Filter for requests where a specific accessor was used |
| <code>alternatives?</code> | <code>boolean</code> | Filter for requests where alternatives were used |
| <code>callbackMethod?</code> | <code>boolean</code> | Filter for requests where callback method was used |
| <code>callback?</code> | <code>boolean</code> | Filter for requests where callback was used |
| <code>channels?</code> | <code>boolean</code> | Filter for requests where channels were used |
| <code>customIntentMode?</code> | <code>boolean</code> | Filter for requests where custom intent mode was used |
| <code>customIntent?</code> | <code>boolean</code> | Filter for requests where custom intent was used |
| <code>customTopicMode?</code> | <code>boolean</code> | Filter for requests where custom topic mode was used |
| <code>customTopic?</code> | <code>boolean</code> | Filter for requests where custom topic was used |
| <code>deployment?</code> | <code>[V1ProjectsProjectIdUsageGetParametersDeployment](src/models/v1-projects-project-id-usage-get-parameters-deployment.ts)</code> | Filter for requests where a specific deployment was used |
| <code>detectEntities?</code> | <code>boolean</code> | Filter for requests where detect entities was used |
| <code>detectLanguage?</code> | <code>boolean</code> | Filter for requests where detect language was used |
| <code>diarize?</code> | <code>boolean</code> | Filter for requests where diarize was used |
| <code>dictation?</code> | <code>boolean</code> | Filter for requests where dictation was used |
| <code>encoding?</code> | <code>boolean</code> | Filter for requests where encoding was used |
| <code>endpoint?</code> | <code>[V1ProjectsProjectIdUsageGetParametersEndpoint](src/models/v1-projects-project-id-usage-get-parameters-endpoint.ts)</code> | Filter for requests where a specific endpoint was used |
| <code>extra?</code> | <code>boolean</code> | Filter for requests where extra was used |
| <code>fillerWords?</code> | <code>boolean</code> | Filter for requests where filler words was used |
| <code>intents?</code> | <code>boolean</code> | Filter for requests where intents was used |
| <code>keyterm?</code> | <code>boolean</code> | Filter for requests where keyterm was used |
| <code>keywords?</code> | <code>boolean</code> | Filter for requests where keywords was used |
| <code>language?</code> | <code>boolean</code> | Filter for requests where language was used |
| <code>measurements?</code> | <code>boolean</code> | Filter for requests where measurements were used |
| <code>method?</code> | <code>[V1ProjectsProjectIdUsageGetParametersMethod](src/models/v1-projects-project-id-usage-get-parameters-method.ts)</code> | Filter for requests where a specific method was used |
| <code>model?</code> | <code>string</code> | Filter for requests where a specific model uuid was used |
| <code>multichannel?</code> | <code>boolean</code> | Filter for requests where multichannel was used |
| <code>numerals?</code> | <code>boolean</code> | Filter for requests where numerals were used |
| <code>paragraphs?</code> | <code>boolean</code> | Filter for requests where paragraphs were used |
| <code>profanityFilter?</code> | <code>boolean</code> | Filter for requests where profanity filter was used |
| <code>punctuate?</code> | <code>boolean</code> | Filter for requests where punctuate was used |
| <code>redact?</code> | <code>boolean</code> | Filter for requests where redact was used |
| <code>replace?</code> | <code>boolean</code> | Filter for requests where replace was used |
| <code>sampleRate?</code> | <code>boolean</code> | Filter for requests where sample rate was used |
| <code>search?</code> | <code>boolean</code> | Filter for requests where search was used |
| <code>sentiment?</code> | <code>boolean</code> | Filter for requests where sentiment was used |
| <code>smartFormat?</code> | <code>boolean</code> | Filter for requests where smart format was used |
| <code>summarize?</code> | <code>boolean</code> | Filter for requests where summarize was used |
| <code>tag?</code> | <code>string</code> | Filter for requests where a specific tag was used |
| <code>topics?</code> | <code>boolean</code> | Filter for requests where topics was used |
| <code>uttSplit?</code> | <code>boolean</code> | Filter for requests where utt split was used |
| <code>utterances?</code> | <code>boolean</code> | Filter for requests where utterances was used |
| <code>version?</code> | <code>boolean</code> | Filter for requests where version was used |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageV1Response](src/models/usage-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsUsage.Get8Error](src/resources/manage-v1-projects-usage.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsUsageFields

> Source: [ManageV1ProjectsUsageFields](src/resources/manage-v1-projects-usage-fields.ts)

<details>
<summary><code>list12(request: ManageV1ProjectsUsageFields.List12Request, options?: RequestOptions): ApiPromise&lt;UsageFieldsV1Response, ManageV1ProjectsUsageFields.List12Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the features, models, tags, languages, and processing method used for requests in the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsUsageFields.list12({ projectId });
  // TODO: Handle 'response' of type UsageFieldsV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsUsageFields.List12Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>start?</code> | <code>string</code> (date) | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | End date of the requested date range. Format accepted is YYYY-MM-DD |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageFieldsV1Response](src/models/usage-fields-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsUsageFields.List12Error](src/resources/manage-v1-projects-usage-fields.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsUsageBreakdown

> Source: [ManageV1ProjectsUsageBreakdown](src/resources/manage-v1-projects-usage-breakdown.ts)

<details>
<summary><code>get9(request: ManageV1ProjectsUsageBreakdown.Get9Request, options?: RequestOptions): ApiPromise&lt;UsageBreakdownV1Response, ManageV1ProjectsUsageBreakdown.Get9Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the usage breakdown for a specific project, with various filter options by API feature or by groupings. Setting a feature (e.g. diarize) to true includes requests that used that feature, while false excludes requests that used it. Multiple true filters are combined with OR logic, while false filters use AND logic.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsUsageBreakdown.get9({ projectId });
  // TODO: Handle 'response' of type UsageBreakdownV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsUsageBreakdown.Get9Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>start?</code> | <code>string</code> (date) | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | End date of the requested date range. Format accepted is YYYY-MM-DD |
| <code>grouping?</code> | <code>[V1ProjectsProjectIdUsageBreakdownGetParametersGrouping](src/models/v1-projects-project-id-usage-breakdown-get-parameters-grouping.ts)</code> | Common usage grouping parameters |
| <code>accessor?</code> | <code>string</code> | Filter for requests where a specific accessor was used |
| <code>alternatives?</code> | <code>boolean</code> | Filter for requests where alternatives were used |
| <code>callbackMethod?</code> | <code>boolean</code> | Filter for requests where callback method was used |
| <code>callback?</code> | <code>boolean</code> | Filter for requests where callback was used |
| <code>channels?</code> | <code>boolean</code> | Filter for requests where channels were used |
| <code>customIntentMode?</code> | <code>boolean</code> | Filter for requests where custom intent mode was used |
| <code>customIntent?</code> | <code>boolean</code> | Filter for requests where custom intent was used |
| <code>customTopicMode?</code> | <code>boolean</code> | Filter for requests where custom topic mode was used |
| <code>customTopic?</code> | <code>boolean</code> | Filter for requests where custom topic was used |
| <code>deployment?</code> | <code>[V1ProjectsProjectIdUsageBreakdownGetParametersDeployment](src/models/v1-projects-project-id-usage-breakdown-get-parameters-deployment.ts)</code> | Filter for requests where a specific deployment was used |
| <code>detectEntities?</code> | <code>boolean</code> | Filter for requests where detect entities was used |
| <code>detectLanguage?</code> | <code>boolean</code> | Filter for requests where detect language was used |
| <code>diarize?</code> | <code>boolean</code> | Filter for requests where diarize was used |
| <code>dictation?</code> | <code>boolean</code> | Filter for requests where dictation was used |
| <code>encoding?</code> | <code>boolean</code> | Filter for requests where encoding was used |
| <code>endpoint?</code> | <code>[V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint](src/models/v1-projects-project-id-usage-breakdown-get-parameters-endpoint.ts)</code> | Filter for requests where a specific endpoint was used |
| <code>extra?</code> | <code>boolean</code> | Filter for requests where extra was used |
| <code>fillerWords?</code> | <code>boolean</code> | Filter for requests where filler words was used |
| <code>intents?</code> | <code>boolean</code> | Filter for requests where intents was used |
| <code>keyterm?</code> | <code>boolean</code> | Filter for requests where keyterm was used |
| <code>keywords?</code> | <code>boolean</code> | Filter for requests where keywords was used |
| <code>language?</code> | <code>boolean</code> | Filter for requests where language was used |
| <code>measurements?</code> | <code>boolean</code> | Filter for requests where measurements were used |
| <code>method?</code> | <code>[V1ProjectsProjectIdUsageBreakdownGetParametersMethod](src/models/v1-projects-project-id-usage-breakdown-get-parameters-method.ts)</code> | Filter for requests where a specific method was used |
| <code>model?</code> | <code>string</code> | Filter for requests where a specific model uuid was used |
| <code>multichannel?</code> | <code>boolean</code> | Filter for requests where multichannel was used |
| <code>numerals?</code> | <code>boolean</code> | Filter for requests where numerals were used |
| <code>paragraphs?</code> | <code>boolean</code> | Filter for requests where paragraphs were used |
| <code>profanityFilter?</code> | <code>boolean</code> | Filter for requests where profanity filter was used |
| <code>punctuate?</code> | <code>boolean</code> | Filter for requests where punctuate was used |
| <code>redact?</code> | <code>boolean</code> | Filter for requests where redact was used |
| <code>replace?</code> | <code>boolean</code> | Filter for requests where replace was used |
| <code>sampleRate?</code> | <code>boolean</code> | Filter for requests where sample rate was used |
| <code>search?</code> | <code>boolean</code> | Filter for requests where search was used |
| <code>sentiment?</code> | <code>boolean</code> | Filter for requests where sentiment was used |
| <code>smartFormat?</code> | <code>boolean</code> | Filter for requests where smart format was used |
| <code>summarize?</code> | <code>boolean</code> | Filter for requests where summarize was used |
| <code>tag?</code> | <code>string</code> | Filter for requests where a specific tag was used |
| <code>topics?</code> | <code>boolean</code> | Filter for requests where topics was used |
| <code>uttSplit?</code> | <code>boolean</code> | Filter for requests where utt split was used |
| <code>utterances?</code> | <code>boolean</code> | Filter for requests where utterances was used |
| <code>version?</code> | <code>boolean</code> | Filter for requests where version was used |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageBreakdownV1Response](src/models/usage-breakdown-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsUsageBreakdown.Get9Error](src/resources/manage-v1-projects-usage-breakdown.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsBillingBalances

> Source: [ManageV1ProjectsBillingBalances](src/resources/manage-v1-projects-billing-balances.ts)

<details>
<summary><code>get10(request: ManageV1ProjectsBillingBalances.Get10Request, options?: RequestOptions): ApiPromise&lt;GetProjectBalanceV1Response, ManageV1ProjectsBillingBalances.Get10Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details about the specified balance

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsBillingBalances.get10({ projectId, balanceId });
  // TODO: Handle 'response' of type GetProjectBalanceV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsBillingBalances.Get10Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>balanceId</code> | <code>string</code> | The unique identifier of the balance |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProjectBalanceV1Response](src/models/get-project-balance-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsBillingBalances.Get10Error](src/resources/manage-v1-projects-billing-balances.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list13(request: ManageV1ProjectsBillingBalances.List13Request, options?: RequestOptions): ApiPromise&lt;ListProjectBalancesV1Response, ManageV1ProjectsBillingBalances.List13Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a list of outstanding balances for the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsBillingBalances.list13({ projectId });
  // TODO: Handle 'response' of type ListProjectBalancesV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsBillingBalances.List13Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectBalancesV1Response](src/models/list-project-balances-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsBillingBalances.List13Error](src/resources/manage-v1-projects-billing-balances.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsBillingBreakdown

> Source: [ManageV1ProjectsBillingBreakdown](src/resources/manage-v1-projects-billing-breakdown.ts)

<details>
<summary><code>list14(request: ManageV1ProjectsBillingBreakdown.List14Request, options?: RequestOptions): ApiPromise&lt;BillingBreakdownV1Response, ManageV1ProjectsBillingBreakdown.List14Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the billing summary for a specific project, with various filter options or by grouping options.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsBillingBreakdown.list14({ projectId });
  // TODO: Handle 'response' of type BillingBreakdownV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsBillingBreakdown.List14Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>start?</code> | <code>string</code> (date) | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | End date of the requested date range. Format accepted is YYYY-MM-DD |
| <code>accessor?</code> | <code>string</code> | Filter for requests where a specific accessor was used |
| <code>deployment?</code> | <code>[V1ProjectsProjectIdBillingBreakdownGetParametersDeployment](src/models/v1-projects-project-id-billing-breakdown-get-parameters-deployment.ts)</code> | Filter for requests where a specific deployment was used |
| <code>tag?</code> | <code>string</code> | Filter for requests where a specific tag was used |
| <code>lineItem?</code> | <code>string</code> | Filter requests by line item (e.g. streaming::nova-3) |
| <code>grouping?</code> | <code>[V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems](src/models/v1-projects-project-id-billing-breakdown-get-parameters-grouping-schema-items.ts)[]</code> | Group billing breakdown by one or more dimensions (accessor, deployment, line_item, tags) |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingBreakdownV1Response](src/models/billing-breakdown-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsBillingBreakdown.List14Error](src/resources/manage-v1-projects-billing-breakdown.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsBillingFields

> Source: [ManageV1ProjectsBillingFields](src/resources/manage-v1-projects-billing-fields.ts)

<details>
<summary><code>list15(request: ManageV1ProjectsBillingFields.List15Request, options?: RequestOptions): ApiPromise&lt;ListBillingFieldsV1Response, ManageV1ProjectsBillingFields.List15Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the accessors, deployment types, tags, and line items used for billing data in the specified time period. Use this endpoint if you want to filter your results from the Billing Breakdown endpoint and want to know what filters are available.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsBillingFields.list15({ projectId });
  // TODO: Handle 'response' of type ListBillingFieldsV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsBillingFields.List15Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>start?</code> | <code>string</code> (date) | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| <code>end?</code> | <code>string</code> (date) | End date of the requested date range. Format accepted is YYYY-MM-DD |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBillingFieldsV1Response](src/models/list-billing-fields-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsBillingFields.List15Error](src/resources/manage-v1-projects-billing-fields.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManageV1ProjectsBillingPurchases

> Source: [ManageV1ProjectsBillingPurchases](src/resources/manage-v1-projects-billing-purchases.ts)

<details>
<summary><code>list16(request: ManageV1ProjectsBillingPurchases.List16Request, options?: RequestOptions): ApiPromise&lt;ListProjectPurchasesV1Response, ManageV1ProjectsBillingPurchases.List16Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the original purchased amount on an order transaction

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.manageV1ProjectsBillingPurchases.list16({ projectId });
  // TODO: Handle 'response' of type ListProjectPurchasesV1Response
} catch (err) {
  if (err instanceof ManageV1ProjectsBillingPurchases.List16Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>limit?</code> | <code>number</code> | Number of results to return per page. Default 10. Range [1,1000] |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectPurchasesV1Response](src/models/list-project-purchases-v1-response.ts)</code>

**OnError**: <code>[ManageV1ProjectsBillingPurchases.List16Error](src/resources/manage-v1-projects-billing-purchases.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SelfHostedV1DistributionCredentials

> Source: [SelfHostedV1DistributionCredentials](src/resources/self-hosted-v1-distribution-credentials.ts)

<details>
<summary><code>create5(request: SelfHostedV1DistributionCredentials.Create5Request, options?: RequestOptions): ApiPromise&lt;CreateProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.Create5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a set of distribution credentials for the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.selfHostedV1DistributionCredentials.create5({ projectId });
  // TODO: Handle 'response' of type CreateProjectDistributionCredentialsV1Response
} catch (err) {
  if (
    err instanceof SelfHostedV1DistributionCredentials.Create5Error && err.payload.kind === "errorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>scopes?</code> | <code>[V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems](src/models/v1-projects-project-id-self-hosted-distribution-credentials-post-parameters-scopes-schema-items.ts)[]</code> | List of permission scopes for the credentials |
| <code>provider?</code> | <code>[V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider](src/models/v1-projects-project-id-self-hosted-distribution-credentials-post-parameters-provider.ts)</code> | The provider of the distribution service |
| <code>body?</code> | <code>[CreateProjectDistributionCredentialsV1Request](src/models/create-project-distribution-credentials-v1-request.ts)</code> | The set of distribution credentials to create |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateProjectDistributionCredentialsV1Response](src/models/create-project-distribution-credentials-v1-response.ts)</code>

**OnError**: <code>[SelfHostedV1DistributionCredentials.Create5Error](src/resources/self-hosted-v1-distribution-credentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete7(request: SelfHostedV1DistributionCredentials.Delete7Request, options?: RequestOptions): ApiPromise&lt;GetProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.Delete7Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a set of distribution credentials for the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.selfHostedV1DistributionCredentials.delete7({
    projectId,
    distributionCredentialsId,
  });
  // TODO: Handle 'response' of type GetProjectDistributionCredentialsV1Response
} catch (err) {
  if (
    err instanceof SelfHostedV1DistributionCredentials.Delete7Error && err.payload.kind === "errorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>distributionCredentialsId</code> | <code>string</code> | The UUID of the distribution credentials |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProjectDistributionCredentialsV1Response](src/models/get-project-distribution-credentials-v1-response.ts)</code>

**OnError**: <code>[SelfHostedV1DistributionCredentials.Delete7Error](src/resources/self-hosted-v1-distribution-credentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get11(request: SelfHostedV1DistributionCredentials.Get11Request, options?: RequestOptions): ApiPromise&lt;GetProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.Get11Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a set of distribution credentials for the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.selfHostedV1DistributionCredentials.get11({
    projectId,
    distributionCredentialsId,
  });
  // TODO: Handle 'response' of type GetProjectDistributionCredentialsV1Response
} catch (err) {
  if (err instanceof SelfHostedV1DistributionCredentials.Get11Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |
| <code>distributionCredentialsId</code> | <code>string</code> | The UUID of the distribution credentials |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProjectDistributionCredentialsV1Response](src/models/get-project-distribution-credentials-v1-response.ts)</code>

**OnError**: <code>[SelfHostedV1DistributionCredentials.Get11Error](src/resources/self-hosted-v1-distribution-credentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>list17(request: SelfHostedV1DistributionCredentials.List17Request, options?: RequestOptions): ApiPromise&lt;ListProjectDistributionCredentialsV1Response, SelfHostedV1DistributionCredentials.List17Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists sets of distribution credentials for the specified project

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.selfHostedV1DistributionCredentials.list17({ projectId });
  // TODO: Handle 'response' of type ListProjectDistributionCredentialsV1Response
} catch (err) {
  if (
    err instanceof SelfHostedV1DistributionCredentials.List17Error && err.payload.kind === "errorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectId</code> | <code>string</code> | The unique identifier of the project |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProjectDistributionCredentialsV1Response](src/models/list-project-distribution-credentials-v1-response.ts)</code>

**OnError**: <code>[SelfHostedV1DistributionCredentials.List17Error](src/resources/self-hosted-v1-distribution-credentials.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthV1Tokens

> Source: [AuthV1Tokens](src/resources/auth-v1-tokens.ts)

<details>
<summary><code>grant(request: AuthV1Tokens.GrantRequest, options?: RequestOptions): ApiPromise&lt;GrantV1Response, AuthV1Tokens.GrantError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a temporary JSON Web Token (JWT) with a 30-second (by default) TTL and usage::write permission for core voice APIs, requiring an API key with Member or higher authorization. Tokens created with this endpoint will not work with the Manage APIs.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.authV1Tokens.grant();
  // TODO: Handle 'response' of type GrantV1Response
} catch (err) {
  if (err instanceof AuthV1Tokens.GrantError && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GrantV1Request](src/models/grant-v1-request.ts)</code> | Time to live settings |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrantV1Response](src/models/grant-v1-response.ts)</code>

**OnError**: <code>[AuthV1Tokens.GrantError](src/resources/auth-v1-tokens.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SpeakV2Audio

> Source: [SpeakV2Audio](src/resources/speak-v2-audio.ts)

<details>
<summary><code>generate2(request: SpeakV2Audio.Generate2Request, options?: RequestOptions): ApiPromise&lt;SpeakV2AcceptedResponse, SpeakV2Audio.Generate2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Synthesize a complete block of text into a single audio response using Deepgram's Flux TTS batch (REST) API. Use this for pre-rendering fixed audio (IVR prompts, notifications, narration) where the whole text is known up front and you don't need incremental playback or interruption.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.speakV2Audio.generate2({ model });
  // TODO: Handle 'response' of type SpeakV2AcceptedResponse
} catch (err) {
  if (err instanceof SpeakV2Audio.Generate2Error && err.payload.kind === "errorResponse") {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model</code> | <code>string</code> | Flux TTS model used to synthesize the submitted text, in the form `flux-{voice}-{language}` (for example, `flux-alexis-en`). Required; unlike the v1 (Aura) endpoint there is no default and only flux models are accepted. English-only at launch. |
| <code>callback?</code> | <code>string</code> | URL to which we'll make the callback request |
| <code>callbackMethod?</code> | <code>[V1ListenPostParametersCallbackMethod](src/models/v1-listen-post-parameters-callback-method.ts)</code> | HTTP method by which the callback request will be made |
| <code>mipOptOut?</code> | <code>boolean</code> | Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip |
| <code>tag?</code> | <code>[V2SpeakPostParametersTag](src/models/unions/v2-speak-post-parameters-tag.ts)</code> | Label your requests for the purpose of identification during usage reporting |
| <code>bitRate?</code> | <code>[V2SpeakPostParametersBitRate](src/models/unions/v2-speak-post-parameters-bit-rate.ts)</code> | The bitrate of the audio in bits per second. Choose from predefined ranges or specific values based on the encoding type. |
| <code>container?</code> | <code>[V2SpeakPostParametersContainer](src/models/unions/v2-speak-post-parameters-container.ts)</code> | Container specifies the file format wrapper for the output audio. The available options depend on the encoding type. |
| <code>encoding?</code> | <code>[V2SpeakPostParametersEncoding](src/models/unions/v2-speak-post-parameters-encoding.ts)</code> | Encoding allows you to specify the expected encoding of your audio output |
| <code>sampleRate?</code> | <code>[V2SpeakPostParametersSampleRate](src/models/unions/v2-speak-post-parameters-sample-rate.ts)</code> | Sample Rate specifies the sample rate for the output audio. Based on the encoding, different sample rates are supported. For some encodings, the sample rate is not configurable |
| <code>priority?</code> | <code>[V2SpeakPostParametersPriority](src/models/v2-speak-post-parameters-priority.ts)</code> | Processing priority for asynchronous (callback) requests. The only supported value is low. |
| <code>body?</code> | <code>[SpeakV2Request](src/models/speak-v2-request.ts)</code> | Transform text to speech |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpeakV2AcceptedResponse](src/models/speak-v2-accepted-response.ts)</code>

**OnError**: <code>[SpeakV2Audio.Generate2Error](src/resources/speak-v2-audio.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

