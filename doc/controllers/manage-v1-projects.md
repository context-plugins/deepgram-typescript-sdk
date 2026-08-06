# Manage V1 Projects

```ts
const manageV1ProjectsApi = new ManageV1ProjectsApi(client);
```

## Class Name

`ManageV1ProjectsApi`

## Methods

* [List](../../doc/controllers/manage-v1-projects.md#list)
* [Get](../../doc/controllers/manage-v1-projects.md#get)
* [Update](../../doc/controllers/manage-v1-projects.md#update)
* [Delete](../../doc/controllers/manage-v1-projects.md#delete)
* [Leave](../../doc/controllers/manage-v1-projects.md#leave)


# List

Retrieves basic information about the projects associated with the API key

```ts
async list(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectsV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of projects

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectsV1Response`](../../doc/models/list-projects-v1-response.md).

## Example Usage

```ts
try {
  const response = await manageV1ProjectsApi.list();

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

Retrieves information about the specified project

```ts
async get(
  projectId: string,
  limit?: number,
  page?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetProjectV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `limit` | `number \| undefined` | Query, Optional | Number of results to return per page. Default 10. Range [1,1000]<br><br>**Default**: `10` |
| `page` | `number \| undefined` | Query, Optional | Navigate and return the results to retrieve specific portions of information of the response |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetProjectV1Response`](../../doc/models/get-project-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const limit = 10;

try {
  const response = await manageV1ProjectsApi.get(
    projectId,
    limit
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

Updates the name or other properties of an existing project

```ts
async update(
  projectId: string,
  body?: UpdateProjectV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateProjectV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `body` | [`UpdateProjectV1Request \| undefined`](../../doc/models/update-project-v1-request.md) | Body, Optional | The name of the project |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UpdateProjectV1Response`](../../doc/models/update-project-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

try {
  const response = await manageV1ProjectsApi.update(projectId);

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

Deletes the specified project

```ts
async mDelete(
  projectId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteProjectV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DeleteProjectV1Response`](../../doc/models/delete-project-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

try {
  const response = await manageV1ProjectsApi.mDelete(projectId);

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


# Leave

Removes the authenticated account from the specific project

```ts
async leave(
  projectId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LeaveProjectV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successfully removed account from project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LeaveProjectV1Response`](../../doc/models/leave-project-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

try {
  const response = await manageV1ProjectsApi.leave(projectId);

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

