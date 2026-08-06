# Manage V1 Projects Members

```ts
const manageV1ProjectsMembersApi = new ManageV1ProjectsMembersApi(client);
```

## Class Name

`ManageV1ProjectsMembersApi`

## Methods

* [List](../../doc/controllers/manage-v1-projects-members.md#list)
* [Delete](../../doc/controllers/manage-v1-projects-members.md#delete)


# List

Retrieves a list of members for a given project

```ts
async list(
  projectId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectMembersV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of members for a given project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectMembersV1Response`](../../doc/models/list-project-members-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

try {
  const response = await manageV1ProjectsMembersApi.list(projectId);

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

Removes a member from the project using their unique member ID

```ts
async mDelete(
  projectId: string,
  memberId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteProjectMemberV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `memberId` | `string` | Template, Required | The unique identifier of the Member |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Delete the specific member from the project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DeleteProjectMemberV1Response`](../../doc/models/delete-project-member-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const memberId = 'member_id0';

try {
  const response = await manageV1ProjectsMembersApi.mDelete(
    projectId,
    memberId
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

