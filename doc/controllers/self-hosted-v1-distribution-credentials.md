# Self Hosted V1 Distribution Credentials

```ts
const selfHostedV1DistributionCredentialsApi = new SelfHostedV1DistributionCredentialsApi(client);
```

## Class Name

`SelfHostedV1DistributionCredentialsApi`

## Methods

* [List](../../doc/controllers/self-hosted-v1-distribution-credentials.md#list)
* [Create](../../doc/controllers/self-hosted-v1-distribution-credentials.md#create)
* [Get](../../doc/controllers/self-hosted-v1-distribution-credentials.md#get)
* [Delete](../../doc/controllers/self-hosted-v1-distribution-credentials.md#delete)


# List

Lists sets of distribution credentials for the specified project

:information_source: **Note** This endpoint does not require authentication.

```ts
async list(
  projectId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListProjectDistributionCredentialsV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A list of distribution credentials for a specific project

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListProjectDistributionCredentialsV1Response`](../../doc/models/list-project-distribution-credentials-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

try {
  const response = await selfHostedV1DistributionCredentialsApi.list(
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

Creates a set of distribution credentials for the specified project

:information_source: **Note** This endpoint does not require authentication.

```ts
async create(
  projectId: string,
  authorization: string,
  scopes?: V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems[],
  provider?: V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider,
  body?: CreateProjectDistributionCredentialsV1Request,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateProjectDistributionCredentialsV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `scopes` | [`V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems[] \| undefined`](../../doc/models/v1-projects-project-id-self-hosted-distribution-credentials-post-parameters-scopes-schema-items.md) | Query, Optional | List of permission scopes for the credentials |
| `provider` | [`V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider \| undefined`](../../doc/models/v1-projects-project-id-self-hosted-distribution-credentials-post-parameters-provider.md) | Query, Optional | The provider of the distribution service<br><br>**Default**: `V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider.Quay` |
| `body` | [`CreateProjectDistributionCredentialsV1Request \| undefined`](../../doc/models/create-project-distribution-credentials-v1-request.md) | Body, Optional | The set of distribution credentials to create |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Single distribution credential

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateProjectDistributionCredentialsV1Response`](../../doc/models/create-project-distribution-credentials-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const authorization = 'Authorization8';

const provider = V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider.Quay;

try {
  const response = await selfHostedV1DistributionCredentialsApi.create(
    projectId,
    authorization,
    undefined,
    provider
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

Returns a set of distribution credentials for the specified project

:information_source: **Note** This endpoint does not require authentication.

```ts
async get(
  projectId: string,
  distributionCredentialsId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetProjectDistributionCredentialsV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `distributionCredentialsId` | `string` | Template, Required | The UUID of the distribution credentials |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Single distribution credential

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetProjectDistributionCredentialsV1Response`](../../doc/models/get-project-distribution-credentials-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const distributionCredentialsId = 'distribution_credentials_id0';

const authorization = 'Authorization8';

try {
  const response = await selfHostedV1DistributionCredentialsApi.get(
    projectId,
    distributionCredentialsId,
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

Deletes a set of distribution credentials for the specified project

:information_source: **Note** This endpoint does not require authentication.

```ts
async mDelete(
  projectId: string,
  distributionCredentialsId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetProjectDistributionCredentialsV1Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `projectId` | `string` | Template, Required | The unique identifier of the project |
| `distributionCredentialsId` | `string` | Template, Required | The UUID of the distribution credentials |
| `authorization` | `string` | Header, Required | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Single distribution credential

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetProjectDistributionCredentialsV1Response`](../../doc/models/get-project-distribution-credentials-v1-response.md).

## Example Usage

```ts
const projectId = 'project_id6';

const distributionCredentialsId = 'distribution_credentials_id0';

const authorization = 'Authorization8';

try {
  const response = await selfHostedV1DistributionCredentialsApi.mDelete(
    projectId,
    distributionCredentialsId,
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

