# Manage V1 Projects Keys

```ts
const manageV1ProjectsKeysApi = new ManageV1ProjectsKeysApi(client);
```

## Class Name

`ManageV1ProjectsKeysApi`

## Methods

* [List](../../doc/controllers/manage-v1-projects-keys.md#list)
* [Create](../../doc/controllers/manage-v1-projects-keys.md#create)
* [Get](../../doc/controllers/manage-v1-projects-keys.md#get)
* [Delete](../../doc/controllers/manage-v1-projects-keys.md#delete)


# List

Retrieves all API keys associated with the specified project

:information_source: **Note** This endpoint does not require authentication.

```ts
async list(
  projectId: string,
  authorization: string,
  status?: V1ProjectsProjectIdKeysGetParametersStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectKeysV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `status` | [`V1ProjectsProjectIdKeysGetParametersStatus \| undefined`](../../doc/models/v1-projects-project-id-keys-get-parameters-status.md) | Query, Optional | Only return keys with a specific status |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of API keys

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectKeysV1Response`](../../doc/models/list-project-keys-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsKeysApi.list(
    projectId,
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


# Create

Creates a new API key with specified settings for the project

:information_source: **Note** This endpoint does not require authentication.

```ts
async create(
  projectId: string,
  authorization: string,
  body?: CreateKeyV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateKeyV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `body` | [`CreateKeyV1Request \| undefined`](../../doc/models/containers/create-key-v1-request.md) | Body, Optional | API key settings |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: API key created successfully

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateKeyV1Response`](../../doc/models/create-key-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsKeysApi.create(
    projectId,
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


# Get

Retrieves information about a specified API key

:information_source: **Note** This endpoint does not require authentication.

```ts
async get(
  projectId: string,
  keyId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetProjectKeyV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `keyId` | `string` | Template, Required | The unique identifier of the API key |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A specific API key

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetProjectKeyV1Response`](../../doc/models/get-project-key-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const keyId = 'key_id4';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsKeysApi.get(
    projectId,
    keyId,
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


# Delete

Deletes an API key for a specific project

:information_source: **Note** This endpoint does not require authentication.

```ts
async mDelete(
  projectId: string,
  keyId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteProjectKeyV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `keyId` | `string` | Template, Required | The unique identifier of the API key |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: API key deleted

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DeleteProjectKeyV1Response`](../../doc/models/delete-project-key-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const keyId = 'key_id4';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsKeysApi.mDelete(
    projectId,
    keyId,
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

