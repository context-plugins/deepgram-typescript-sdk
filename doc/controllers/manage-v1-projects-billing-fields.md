# Manage V1 Projects Billing Fields

```ts
const manageV1ProjectsBillingFieldsApi = new ManageV1ProjectsBillingFieldsApi(client);
```

## Class Name

`ManageV1ProjectsBillingFieldsApi`


# List

Lists the accessors, deployment types, tags, and line items used for billing data in the specified time period. Use this endpoint if you want to filter your results from the Billing Breakdown endpoint and want to know what filters are available.

:information_source: **Note** This endpoint does not require authentication.

```ts
async list(
  projectId: string,
  authorization: string,
  start?: string,
  end?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListBillingFieldsV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `start` | `string \| undefined` | Query, Optional | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| `end` | `string \| undefined` | Query, Optional | End date of the requested date range. Format accepted is YYYY-MM-DD |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of billing fields for a specific project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListBillingFieldsV1Response`](../../doc/models/list-billing-fields-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsBillingFieldsApi.list(
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

