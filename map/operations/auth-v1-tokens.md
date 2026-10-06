<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthV1Tokens — operations

Accessor: `client.authV1Tokens` · Source: `src/resources/auth-v1-tokens.ts` · 1 operation · Request and error types: namespace `AuthV1Tokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deepgram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### grant

- **Signature**: `grant(request: AuthV1Tokens.GrantRequest, options?: RequestOptions): ApiPromise<GrantV1Response, AuthV1Tokens.GrantError>`
- **Wire**: `POST /v1/auth/grant`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GrantV1Response`
- **Error**: `DeepgramError` with `kind: "api"`, an instance of `AuthV1Tokens.GrantError` — **typed arms**, narrowed on `err.payload.kind`
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

