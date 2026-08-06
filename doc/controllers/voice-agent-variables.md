# Voice Agent Variables

```ts
const voiceAgentVariablesApi = new VoiceAgentVariablesApi(client);
```

## Class Name

`VoiceAgentVariablesApi`

## Methods

* [Create](../../doc/controllers/voice-agent-variables.md#create)
* [List](../../doc/controllers/voice-agent-variables.md#list)
* [Get](../../doc/controllers/voice-agent-variables.md#get)
* [Update](../../doc/controllers/voice-agent-variables.md#update)
* [Delete](../../doc/controllers/voice-agent-variables.md#delete)


# Create

Creates a new template variable. Variables follow the `DG_<VARIABLE_NAME>` naming format and can substitute any JSON value in an agent configuration.

```ts
async create(
  projectId: string,
  body?: CreateAgentVariableV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AgentVariableV1>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `body` | [`CreateAgentVariableV1Request \| undefined`](../../doc/models/create-agent-variable-v1-request.md) | Body, Optional | Agent variable details |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Agent variable created successfully

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AgentVariableV1`](../../doc/models/agent-variable-v1.md).

## Example Usage

```ts
const projectId = 'project_id6';

const body: CreateAgentVariableV1Request = {
  key: 'key6',
  value: { 'key1': 'val1', 'key2': 'val2' },
  apiVersion: 1,
};

try {
  const response = await voiceAgentVariablesApi.create(
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

Returns all template variables for the specified project

```ts
async list(
  projectId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListAgentVariablesV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of agent variables

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListAgentVariablesV1Response`](../../doc/models/list-agent-variables-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

try {
  const response = await voiceAgentVariablesApi.list(projectId);

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

Returns the specified template variable

```ts
async get(
  projectId: string,
  variableId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AgentVariableV1>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `variableId` | `string` | Template, Required | The unique identifier of the agent variable |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: An agent variable

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AgentVariableV1`](../../doc/models/agent-variable-v1.md).

## Example Usage

```ts
const projectId = 'project_id6';

const variableId = 'variable_id8';

try {
  const response = await voiceAgentVariablesApi.get(
    projectId,
    variableId
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

Updates the value of an existing template variable

```ts
async update(
  projectId: string,
  variableId: string,
  body?: UpdateAgentVariableV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AgentVariableV1>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `variableId` | `string` | Template, Required | The unique identifier of the agent variable |
| `body` | [`UpdateAgentVariableV1Request \| undefined`](../../doc/models/update-agent-variable-v1-request.md) | Body, Optional | Updated value for the agent variable |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Agent variable updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AgentVariableV1`](../../doc/models/agent-variable-v1.md).

## Example Usage

```ts
const projectId = 'project_id6';

const variableId = 'variable_id8';

try {
  const response = await voiceAgentVariablesApi.update(
    projectId,
    variableId
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

Deletes the specified template variable

```ts
async mDelete(
  projectId: string,
  variableId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown | undefined>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `variableId` | `string` | Template, Required | The unique identifier of the agent variable |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Agent variable deleted

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const projectId = 'project_id6';

const variableId = 'variable_id8';

try {
  const response = await voiceAgentVariablesApi.mDelete(
    projectId,
    variableId
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

