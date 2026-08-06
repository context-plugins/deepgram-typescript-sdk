# Agent V1 Settings Think Models

```ts
const agentV1SettingsThinkModelsApi = new AgentV1SettingsThinkModelsApi(client);
```

## Class Name

`AgentV1SettingsThinkModelsApi`


# List

Retrieves the available think models that can be used for AI agent processing

```ts
async list(
  requestOptions?: RequestOptions
): Promise<ApiResponse<AgentThinkModelsV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: List of available think models

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AgentThinkModelsV1Response`](../../doc/models/agent-think-models-v1-response.md).

## Example Usage

```ts
try {
  const response = await agentV1SettingsThinkModelsApi.list();

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

