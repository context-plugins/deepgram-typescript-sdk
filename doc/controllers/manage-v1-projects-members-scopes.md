# Manage V1 Projects Members Scopes

```ts
const manageV1ProjectsMembersScopesApi = new ManageV1ProjectsMembersScopesApi(client);
```

## Class Name

`ManageV1ProjectsMembersScopesApi`

## Methods

* [List](../../doc/controllers/manage-v1-projects-members-scopes.md#list)
* [Update](../../doc/controllers/manage-v1-projects-members-scopes.md#update)


# List

Retrieves a list of scopes for a specific member

```ts
async list(
  projectId: string,
  memberId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectMemberScopesV1Response>>
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

**200**: A list of scopes for a specific member

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectMemberScopesV1Response`](../../doc/models/list-project-member-scopes-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const memberId = 'member_id0';

try {
  const response = await manageV1ProjectsMembersScopesApi.list(
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


# Update

Updates the scopes for a specific member

```ts
async update(
  projectId: string,
  memberId: string,
  body?: UpdateProjectMemberScopesV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdateProjectMemberScopesV1Response>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `memberId` | `string` | Template, Required | The unique identifier of the Member |
| `body` | [`UpdateProjectMemberScopesV1Request \| undefined`](../../doc/models/update-project-member-scopes-v1-request.md) | Body, Optional | A scope to update |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Updated the scopes for a specific member

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UpdateProjectMemberScopesV1Response`](../../doc/models/update-project-member-scopes-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const memberId = 'member_id0';

try {
  const response = await manageV1ProjectsMembersScopesApi.update(
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

