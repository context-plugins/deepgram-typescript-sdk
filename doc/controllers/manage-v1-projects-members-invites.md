# Manage V1 Projects Members Invites

```ts
const manageV1ProjectsMembersInvitesApi = new ManageV1ProjectsMembersInvitesApi(client);
```

## Class Name

`ManageV1ProjectsMembersInvitesApi`

## Methods

* [List](../../doc/controllers/manage-v1-projects-members-invites.md#list)
* [Create](../../doc/controllers/manage-v1-projects-members-invites.md#create)
* [Delete](../../doc/controllers/manage-v1-projects-members-invites.md#delete)


# List

Generates a list of invites for a specific project

:information_source: **Note** This endpoint does not require authentication.

```ts
async list(
  projectId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectInvitesV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of invites for a specific project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectInvitesV1Response`](../../doc/models/list-project-invites-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsMembersInvitesApi.list(
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

Generates an invite for a specific project

:information_source: **Note** This endpoint does not require authentication.

```ts
async create(
  projectId: string,
  authorization: string,
  body?: CreateProjectInviteV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateProjectInviteV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `body` | [`CreateProjectInviteV1Request \| undefined`](../../doc/models/create-project-invite-v1-request.md) | Body, Optional | email to invite to the project |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: The invite was successfully generated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateProjectInviteV1Response`](../../doc/models/create-project-invite-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsMembersInvitesApi.create(
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


# Delete

Deletes an invite for a specific project

:information_source: **Note** This endpoint does not require authentication.

```ts
async mDelete(
  projectId: string,
  email: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteProjectInviteV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `email` | `string` | Template, Required | The email address of the member |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: The invite was successfully deleted

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DeleteProjectInviteV1Response`](../../doc/models/delete-project-invite-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const email = 'email6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsMembersInvitesApi.mDelete(
    projectId,
    email,
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

