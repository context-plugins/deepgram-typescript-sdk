# Voice Agent Configurations

```ts
const voiceAgentConfigurationsApi = new VoiceAgentConfigurationsApi(client);
```

## Class Name

`VoiceAgentConfigurationsApi`

## Methods

* [Create](../../doc/controllers/voice-agent-configurations.md#create)
* [List](../../doc/controllers/voice-agent-configurations.md#list)
* [Get](../../doc/controllers/voice-agent-configurations.md#get)
* [Update](../../doc/controllers/voice-agent-configurations.md#update)
* [Delete](../../doc/controllers/voice-agent-configurations.md#delete)


# Create

Creates a new reusable agent configuration. The `config` field must be a valid JSON string representing the `agent` block of a Settings message. The returned `agent_id` can be passed in place of the full `agent` object in future Settings messages.

```ts
async create(
  projectId: string,
  body?: CreateAgentConfigurationV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateAgentConfigurationV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `body` | [`CreateAgentConfigurationV1Request \| undefined`](../../doc/models/create-agent-configuration-v1-request.md) | Body, Optional | Agent configuration details |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Agent configuration created successfully

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateAgentConfigurationV1Response`](../../doc/models/create-agent-configuration-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const body: CreateAgentConfigurationV1Request = {
  config: 'config2',
  apiVersion: 1,
};

try {
  const response = await voiceAgentConfigurationsApi.create(
    projectId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | `ApiError` |


# List

Returns all agent configurations for the specified project. Configurations are returned in their uninterpolated form—template variable placeholders appear as-is rather than with their substituted values.

```ts
async list(
  projectId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAgentConfigurationsV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of agent configurations

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListAgentConfigurationsV1Response`](../../doc/models/list-agent-configurations-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

try {
  const response = await voiceAgentConfigurationsApi.list(projectId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | `ApiError` |


# Get

Returns the specified agent configuration in its uninterpolated form

```ts
async get(
  projectId: string,
  agentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AgentConfigurationV1>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `agentId` | `string` | Template, Required | The unique identifier of the agent configuration |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: An agent configuration

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AgentConfigurationV1`](../../doc/models/agent-configuration-v1.md).

## Example Usage

```ts
const projectId = 'project_id6';

const agentId = 'agent_id8';

try {
  const response = await voiceAgentConfigurationsApi.get(
    projectId,
    agentId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | `ApiError` |


# Update

Updates the metadata associated with an agent configuration. The config itself is immutable—to change the configuration, delete the existing agent and create a new one.

```ts
async update(
  projectId: string,
  agentId: string,
  body?: UpdateAgentMetadataV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AgentConfigurationV1>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `agentId` | `string` | Template, Required | The unique identifier of the agent configuration |
| `body` | [`UpdateAgentMetadataV1Request \| undefined`](../../doc/models/update-agent-metadata-v1-request.md) | Body, Optional | Updated metadata for the agent configuration |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Agent configuration updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AgentConfigurationV1`](../../doc/models/agent-configuration-v1.md).

## Example Usage

```ts
const projectId = 'project_id6';

const agentId = 'agent_id8';

try {
  const response = await voiceAgentConfigurationsApi.update(
    projectId,
    agentId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | `ApiError` |


# Delete

Deletes the specified agent configuration. Deleting an agent configuration can cause a production outage if your service references this agent UUID. Migrate all active sessions to a new configuration before deleting.

```ts
async mDelete(
  projectId: string,
  agentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown | undefined>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `agentId` | `string` | Template, Required | The unique identifier of the agent configuration |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Agent configuration deleted

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const projectId = 'project_id6';

const agentId = 'agent_id8';

try {
  const response = await voiceAgentConfigurationsApi.mDelete(
    projectId,
    agentId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | `ApiError` |

