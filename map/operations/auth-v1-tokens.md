<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthV1Tokens — operations

Accessor: `client.authV1Tokens` · Source: `src/resources/auth-v1-tokens.ts` · 1 operation · Request and error types: namespace `AuthV1Tokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### grant

- **Signature**: `grant(request: AuthV1Tokens.GrantRequest, options?: RequestOptions): ApiPromise<GrantV1Response, AuthV1Tokens.GrantError>`
- **Wire**: `POST /v1/auth/grant`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `GrantV1Response`
- **Error**: `AuthV1Tokens.GrantError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthV1Tokens.GrantRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GrantV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantV1Request` | `grantV1RequestSchema` | `src/models/grant-v1-request.ts` |
| `GrantV1Response` | `grantV1ResponseSchema` | `src/models/grant-v1-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/unions/error-response.ts` |

