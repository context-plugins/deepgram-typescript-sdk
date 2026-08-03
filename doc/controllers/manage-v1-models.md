# Manage V1 Models

```ts
const manageV1ModelsApi = new ManageV1ModelsApi(client);
```

## Class Name

`ManageV1ModelsApi`

## Methods

* [List](../../doc/controllers/manage-v1-models.md#list)
* [Get](../../doc/controllers/manage-v1-models.md#get)


# List

Returns metadata on all the latest public models. To retrieve custom models, use Get Project Models.

:information_source: **Note** This endpoint does not require authentication.

```ts
async list(
  authorization: string,
  includeOutdated?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListModelsV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `includeOutdated` | `boolean \| undefined` | Query, Optional | returns non-latest versions of models |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of models

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListModelsV1Response`](../../doc/models/list-models-v1-response.md).

## Example Usage

```ts
const authorization = 'Authorization8';

try {
  const response = await manageV1ModelsApi.list(authorization);

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

Returns metadata for a specific public model

:information_source: **Note** This endpoint does not require authentication.

```ts
async get(
  modelId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetModelV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modelId` | `string` | Template, Required | The specific UUID of the model |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A model object that can be either STT or TTS

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `GetModelV1Response`.

## Example Usage

```ts
const modelId = 'model_id0';

const authorization = 'Authorization8';

try {
  const response = await manageV1ModelsApi.get(
    modelId,
    authorization
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

