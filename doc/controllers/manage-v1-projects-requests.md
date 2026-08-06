# Manage V1 Projects Requests

```ts
const manageV1ProjectsRequestsApi = new ManageV1ProjectsRequestsApi(client);
```

## Class Name

`ManageV1ProjectsRequestsApi`

## Methods

* [List](../../doc/controllers/manage-v1-projects-requests.md#list)
* [Get](../../doc/controllers/manage-v1-projects-requests.md#get)


# List

Generates a list of requests for a specific project

```ts
async list(
  projectId: string,
  start?: string,
  end?: string,
  limit?: number,
  page?: number,
  accessor?: string,
  requestId?: string,
  deployment?: V1ProjectsProjectIdRequestsGetParametersDeployment,
  endpoint?: V1ProjectsProjectIdRequestsGetParametersEndpoint,
  method?: V1ProjectsProjectIdRequestsGetParametersMethod,
  status?: V1ProjectsProjectIdRequestsGetParametersStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectRequestsV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `start` | `string \| undefined` | Query, Optional | Start date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+HH:MM |
| `end` | `string \| undefined` | Query, Optional | End date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+HH:MM |
| `limit` | `number \| undefined` | Query, Optional | Number of results to return per page. Default 10. Range [1,1000]<br><br>**Default**: `10` |
| `page` | `number \| undefined` | Query, Optional | Navigate and return the results to retrieve specific portions of information of the response |
| `accessor` | `string \| undefined` | Query, Optional | Filter for requests where a specific accessor was used |
| `requestId` | `string \| undefined` | Query, Optional | Filter for a specific request id |
| `deployment` | [`V1ProjectsProjectIdRequestsGetParametersDeployment \| undefined`](../../doc/models/v1-projects-project-id-requests-get-parameters-deployment.md) | Query, Optional | Filter for requests where a specific deployment was used |
| `endpoint` | [`V1ProjectsProjectIdRequestsGetParametersEndpoint \| undefined`](../../doc/models/v1-projects-project-id-requests-get-parameters-endpoint.md) | Query, Optional | Filter for requests where a specific endpoint was used |
| `method` | [`V1ProjectsProjectIdRequestsGetParametersMethod \| undefined`](../../doc/models/v1-projects-project-id-requests-get-parameters-method.md) | Query, Optional | Filter for requests where a specific method was used |
| `status` | [`V1ProjectsProjectIdRequestsGetParametersStatus \| undefined`](../../doc/models/v1-projects-project-id-requests-get-parameters-status.md) | Query, Optional | Filter for requests that succeeded (status code < 300) or failed (status code >=400) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of requests for a specific project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectRequestsV1Response`](../../doc/models/list-project-requests-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const limit = 10;

try {
  const response = await manageV1ProjectsRequestsApi.list(
    projectId,
    undefined,
    undefined,
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


# Get

Retrieves a specific request for a specific project

```ts
async get(
  projectId: string,
  requestId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetProjectRequestV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `requestId` | `string` | Template, Required | The unique identifier of the request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A specific request for a specific project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetProjectRequestV1Response`](../../doc/models/get-project-request-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const requestId = 'request_id8';

try {
  const response = await manageV1ProjectsRequestsApi.get(
    projectId,
    requestId
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

