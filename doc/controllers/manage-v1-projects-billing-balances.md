# Manage V1 Projects Billing Balances

```ts
const manageV1ProjectsBillingBalancesApi = new ManageV1ProjectsBillingBalancesApi(client);
```

## Class Name

`ManageV1ProjectsBillingBalancesApi`

## Methods

* [List](../../doc/controllers/manage-v1-projects-billing-balances.md#list)
* [Get](../../doc/controllers/manage-v1-projects-billing-balances.md#get)


# List

Generates a list of outstanding balances for the specified project

:information_source: **Note** This endpoint does not require authentication.

```ts
async list(
  projectId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectBalancesV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of outstanding balances

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectBalancesV1Response`](../../doc/models/list-project-balances-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsBillingBalancesApi.list(
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

Retrieves details about the specified balance

:information_source: **Note** This endpoint does not require authentication.

```ts
async get(
  projectId: string,
  balanceId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetProjectBalanceV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `balanceId` | `string` | Template, Required | The unique identifier of the balance |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A specific balance

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetProjectBalanceV1Response`](../../doc/models/get-project-balance-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const balanceId = 'balance_id2';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsBillingBalancesApi.get(
    projectId,
    balanceId,
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

