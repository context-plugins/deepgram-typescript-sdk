# Manage V1 Projects Billing Breakdown

```ts
const manageV1ProjectsBillingBreakdownApi = new ManageV1ProjectsBillingBreakdownApi(client);
```

## Class Name

`ManageV1ProjectsBillingBreakdownApi`


# List

Retrieves the billing summary for a specific project, with various filter options or by grouping options.

:information_source: **Note** This endpoint does not require authentication.

```ts
async list(
  projectId: string,
  authorization: string,
  start?: string,
  end?: string,
  accessor?: string,
  deployment?: V1ProjectsProjectIdBillingBreakdownGetParametersDeployment,
  tag?: string,
  lineItem?: string,
  grouping?: V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<BillingBreakdownV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `start` | `string \| undefined` | Query, Optional | Start date of the requested date range. Format accepted is YYYY-MM-DD |
| `end` | `string \| undefined` | Query, Optional | End date of the requested date range. Format accepted is YYYY-MM-DD |
| `accessor` | `string \| undefined` | Query, Optional | Filter for requests where a specific accessor was used |
| `deployment` | [`V1ProjectsProjectIdBillingBreakdownGetParametersDeployment \| undefined`](../../doc/models/v1-projects-project-id-billing-breakdown-get-parameters-deployment.md) | Query, Optional | Filter for requests where a specific deployment was used |
| `tag` | `string \| undefined` | Query, Optional | Filter for requests where a specific tag was used |
| `lineItem` | `string \| undefined` | Query, Optional | Filter requests by line item (e.g. streaming::nova-3) |
| `grouping` | [`V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems[] \| undefined`](../../doc/models/v1-projects-project-id-billing-breakdown-get-parameters-grouping-schema-items.md) | Query, Optional | Group billing breakdown by one or more dimensions (accessor, deployment, line_item, tags) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Billing breakdown response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`BillingBreakdownV1Response`](../../doc/models/billing-breakdown-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await manageV1ProjectsBillingBreakdownApi.list(
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

