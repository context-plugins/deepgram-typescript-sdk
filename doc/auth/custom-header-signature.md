
# Custom Header Signature



Documentation for accessing and setting credentials for ApiKeyAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| Authorization | `string` | Use `Authorization: Token <API_KEY>`<br>Example: `Authorization: Token 12345abcdef` | `authorization` |



**Note:** Auth credentials can be set using `apiKeyAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
import { Client } from 'rest-apilib';

const client = new Client({
  apiKeyAuthCredentials: {
    'Authorization': 'Authorization'
  },
});
```


