# Manage V1 Projects Billing Purchases

```ts
const manageV1ProjectsBillingPurchasesApi = new ManageV1ProjectsBillingPurchasesApi(client);
```

## Class Name

`ManageV1ProjectsBillingPurchasesApi`


# List

Returns the original purchased amount on an order transaction

:information_source: **Note** This endpoint does not require authentication.

```ts
async list(
  projectId: string,
  authorization: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectPurchasesV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `limit` | `number \| undefined` | Query, Optional | Number of results to return per page. Default 10. Range [1,1000]<br><br>**Default**: `10` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of purchases for a specific project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectPurchasesV1Response`](../../doc/models/list-project-purchases-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

const limit = 10;

try {
  const response = await manageV1ProjectsBillingPurchasesApi.list(
    projectId,
    authorization,
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

