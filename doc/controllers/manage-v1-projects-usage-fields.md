# Manage V1 Projects Usage Fields

```ts
const manageV1ProjectsUsageFieldsApi = new ManageV1ProjectsUsageFieldsApi(client);
```

## Class Name

`ManageV1ProjectsUsageFieldsApi`


# List

Lists the features, models, tags, languages, and processing method used for requests in the specified project

```ts
async list(
  projectId: string,
  start?: string,
  end?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsageFieldsV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `start` | `string \| undefined` | Query, Optional | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| `end` | `string \| undefined` | Query, Optional | End date of the requested date range. Format accepted is YYYY-MM-DD |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of fields for a specific project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UsageFieldsV1Response`](../../doc/models/usage-fields-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

try {
  const response = await manageV1ProjectsUsageFieldsApi.list(projectId);

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

