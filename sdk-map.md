<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Deepgram (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Deepgram |
| Package | `deepgram` |
| Package version | `1.0.0` |
| API spec version | `1.0.0` |
| Import specifier | `deepgram` — the package root is the **only** entry. Deep imports (`deepgram/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/deepgram/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { DeepgramClient, ServerEnvironment } from "deepgram";

const client = new DeepgramClient({
  serverEnvironment: ServerEnvironment.Production,
  apiKeyAuth: "YOUR_API_KEY",
  jwtAuth: "YOUR_BEARER_TOKEN",
});
```

The only constructor is `new DeepgramClient(clientOptions: Partial<ClientOptions> = {})`, so `new DeepgramClient()` is valid. Resources are memoized lazy getters on the client — `client.agentV1SettingsThinkModels`, `client.voiceAgentConfigurations`, `client.voiceAgentVariables`, `client.listenV1Media`, `client.speakV1Audio`, `client.readV1Text`, `client.manageV1Projects`, `client.manageV1ProjectsModels`, `client.manageV1Models`, `client.manageV1ProjectsKeys`, `client.manageV1ProjectsMembers`, `client.manageV1ProjectsMembersScopes`, `client.manageV1ProjectsMembersInvites`, `client.manageV1ProjectsRequests`, `client.manageV1ProjectsUsage`, `client.manageV1ProjectsUsageFields`, `client.manageV1ProjectsUsageBreakdown`, `client.manageV1ProjectsBillingBalances`, `client.manageV1ProjectsBillingBreakdown`, `client.manageV1ProjectsBillingFields`, `client.manageV1ProjectsBillingPurchases`, `client.selfHostedV1DistributionCredentials`, `client.authV1Tokens`, `client.speakV2Audio` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `apiKeyAuth` | `TokenProvider \| undefined` | unset |
| `jwtAuth` | `TokenProvider \| undefined` | unset |

The 2 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `DeepgramError` set. `DeepgramError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `DeepgramError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.agentV1SettingsThinkModels.list();
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof DeepgramError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **50 operations**, **50** declare typed error bodies and **0** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (24 groups, 50 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `agentV1SettingsThinkModels` | 1 | [map/operations/agent-v1-settings-think-models.md](map/operations/agent-v1-settings-think-models.md) |
| `voiceAgentConfigurations` | 5 | [map/operations/voice-agent-configurations.md](map/operations/voice-agent-configurations.md) |
| `voiceAgentVariables` | 5 | [map/operations/voice-agent-variables.md](map/operations/voice-agent-variables.md) |
| `listenV1Media` | 1 | [map/operations/listen-v1-media.md](map/operations/listen-v1-media.md) |
| `speakV1Audio` | 1 | [map/operations/speak-v1-audio.md](map/operations/speak-v1-audio.md) |
| `readV1Text` | 1 | [map/operations/read-v1-text.md](map/operations/read-v1-text.md) |
| `manageV1Projects` | 5 | [map/operations/manage-v1-projects.md](map/operations/manage-v1-projects.md) |
| `manageV1ProjectsModels` | 2 | [map/operations/manage-v1-projects-models.md](map/operations/manage-v1-projects-models.md) |
| `manageV1Models` | 2 | [map/operations/manage-v1-models.md](map/operations/manage-v1-models.md) |
| `manageV1ProjectsKeys` | 4 | [map/operations/manage-v1-projects-keys.md](map/operations/manage-v1-projects-keys.md) |
| `manageV1ProjectsMembers` | 2 | [map/operations/manage-v1-projects-members.md](map/operations/manage-v1-projects-members.md) |
| `manageV1ProjectsMembersScopes` | 2 | [map/operations/manage-v1-projects-members-scopes.md](map/operations/manage-v1-projects-members-scopes.md) |
| `manageV1ProjectsMembersInvites` | 3 | [map/operations/manage-v1-projects-members-invites.md](map/operations/manage-v1-projects-members-invites.md) |
| `manageV1ProjectsRequests` | 2 | [map/operations/manage-v1-projects-requests.md](map/operations/manage-v1-projects-requests.md) |
| `manageV1ProjectsUsage` | 1 | [map/operations/manage-v1-projects-usage.md](map/operations/manage-v1-projects-usage.md) |
| `manageV1ProjectsUsageFields` | 1 | [map/operations/manage-v1-projects-usage-fields.md](map/operations/manage-v1-projects-usage-fields.md) |
| `manageV1ProjectsUsageBreakdown` | 1 | [map/operations/manage-v1-projects-usage-breakdown.md](map/operations/manage-v1-projects-usage-breakdown.md) |
| `manageV1ProjectsBillingBalances` | 2 | [map/operations/manage-v1-projects-billing-balances.md](map/operations/manage-v1-projects-billing-balances.md) |
| `manageV1ProjectsBillingBreakdown` | 1 | [map/operations/manage-v1-projects-billing-breakdown.md](map/operations/manage-v1-projects-billing-breakdown.md) |
| `manageV1ProjectsBillingFields` | 1 | [map/operations/manage-v1-projects-billing-fields.md](map/operations/manage-v1-projects-billing-fields.md) |
| `manageV1ProjectsBillingPurchases` | 1 | [map/operations/manage-v1-projects-billing-purchases.md](map/operations/manage-v1-projects-billing-purchases.md) |
| `selfHostedV1DistributionCredentials` | 4 | [map/operations/self-hosted-v1-distribution-credentials.md](map/operations/self-hosted-v1-distribution-credentials.md) |
| `authV1Tokens` | 1 | [map/operations/auth-v1-tokens.md](map/operations/auth-v1-tokens.md) |
| `speakV2Audio` | 1 | [map/operations/speak-v2-audio.md](map/operations/speak-v2-audio.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AgentConfigurationV1, agentConfigurationV1Schema } from "deepgram";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 139 | `src/models/` |
| Enums (open; const companion plus schema) | 73 | `src/models/` |
| Unions without a discriminant | 32 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AgentThinkModelsV1ResponseModelsItemsOneOf0Id` | `Gpt5` to `"gpt-5"` · `Gpt5Mini` to `"gpt-5-mini"` · `Gpt5Nano` to `"gpt-5-nano"` · `Gpt41` to `"gpt-4.1"` · `Gpt41Mini` to `"gpt-4.1-mini"` · `Gpt41Nano` to `"gpt-4.1-nano"` · `Gpt4O` to `"gpt-4o"` · `Gpt4OMini` to `"gpt-4o-mini"` | `agentThinkModelsV1ResponseModelsItemsOneOf0IdSchema` |
| `AgentThinkModelsV1ResponseModelsItemsOneOf1Id` | `Claude35HaikuLatest` to `"claude-3-5-haiku-latest"` · `ClaudeSonnet420250514` to `"claude-sonnet-4-20250514"` | `agentThinkModelsV1ResponseModelsItemsOneOf1IdSchema` |
| `AgentThinkModelsV1ResponseModelsItemsOneOf2Id` | `Gemini25Flash` to `"gemini-2.5-flash"` · `Gemini20Flash` to `"gemini-2.0-flash"` · `Gemini20FlashLite` to `"gemini-2.0-flash-lite"` | `agentThinkModelsV1ResponseModelsItemsOneOf2IdSchema` |
| `AgentThinkModelsV1ResponseModelsItemsOneOf3Id` | `OpenaiGptOss20B` to `"openai/gpt-oss-20b"` | `agentThinkModelsV1ResponseModelsItemsOneOf3IdSchema` |
| `ListBillingFieldsV1ResponseDeploymentsItems` | `Hosted` to `"hosted"` · `Beta` to `"beta"` · `SelfHosted` to `"self-hosted"` · `Dedicated` to `"dedicated"` | `listBillingFieldsV1ResponseDeploymentsItemsSchema` |
| `V1ListenPostParametersCallbackMethod` | `Post` to `"POST"` · `Put` to `"PUT"` | `v1ListenPostParametersCallbackMethodSchema` |
| `V1ListenPostParametersCustomIntentMode` | `Extended` to `"extended"` · `Strict` to `"strict"` | `v1ListenPostParametersCustomIntentModeSchema` |
| `V1ListenPostParametersCustomTopicMode` | `Extended` to `"extended"` · `Strict` to `"strict"` | `v1ListenPostParametersCustomTopicModeSchema` |
| `V1ListenPostParametersDiarizeModel` | `Latest` to `"latest"` · `V1` to `"v1"` · `V2` to `"v2"` | `v1ListenPostParametersDiarizeModelSchema` |
| `V1ListenPostParametersEncoding` | `Linear16` to `"linear16"` · `Flac` to `"flac"` · `Mulaw` to `"mulaw"` · `AmrNb` to `"amr-nb"` · `AmrWb` to `"amr-wb"` · `Opus` to `"opus"` · `Speex` to `"speex"` · `G729` to `"g729"` | `v1ListenPostParametersEncodingSchema` |
| `V1ListenPostParametersModel0` | `Nova3` to `"nova-3"` · `Nova3General` to `"nova-3-general"` · `Nova3Medical` to `"nova-3-medical"` · `Nova2` to `"nova-2"` · `Nova2General` to `"nova-2-general"` · `Nova2Meeting` to `"nova-2-meeting"` · `Nova2Finance` to `"nova-2-finance"` · `Nova2Conversationalai` to `"nova-2-conversationalai"` · `Nova2Voicemail` to `"nova-2-voicemail"` · `Nova2Video` to `"nova-2-video"` · `Nova2Medical` to `"nova-2-medical"` · `Nova2Drivethru` to `"nova-2-drivethru"` · `Nova2Automotive` to `"nova-2-automotive"` · `Nova` to `"nova"` · `NovaGeneral` to `"nova-general"` · `NovaPhonecall` to `"nova-phonecall"` · `NovaMedical` to `"nova-medical"` · `Enhanced` to `"enhanced"` · `EnhancedGeneral` to `"enhanced-general"` · `EnhancedMeeting` to `"enhanced-meeting"` · `EnhancedPhonecall` to `"enhanced-phonecall"` · `EnhancedFinance` to `"enhanced-finance"` · `Base` to `"base"` · `Meeting` to `"meeting"` · `Phonecall` to `"phonecall"` · `Finance` to `"finance"` · `Conversationalai` to `"conversationalai"` · `Voicemail` to `"voicemail"` · `Video` to `"video"` | `v1ListenPostParametersModel0Schema` |
| `V1ListenPostParametersRedactSchemaOneOf1Items` | `Pci` to `"pci"` · `Pii` to `"pii"` · `Numbers` to `"numbers"` | `v1ListenPostParametersRedactSchemaOneOf1ItemsSchema` |
| `V1ListenPostParametersSummarize0` | `V2` to `"v2"` | `v1ListenPostParametersSummarize0Schema` |
| `V1ListenPostParametersVersion0` | `Latest` to `"latest"` | `v1ListenPostParametersVersion0Schema` |
| `V1ProjectsProjectIdBillingBreakdownGetParametersDeployment` | `Hosted` to `"hosted"` · `Beta` to `"beta"` · `SelfHosted` to `"self-hosted"` | `v1ProjectsProjectIdBillingBreakdownGetParametersDeploymentSchema` |
| `V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems` | `Accessor` to `"accessor"` · `Deployment` to `"deployment"` · `LineItem` to `"line_item"` · `Tags` to `"tags"` | `v1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItemsSchema` |
| `V1ProjectsProjectIdKeysGetParametersStatus` | `Active` to `"active"` · `Expired` to `"expired"` | `v1ProjectsProjectIdKeysGetParametersStatusSchema` |
| `V1ProjectsProjectIdRequestsGetParametersDeployment` | `Hosted` to `"hosted"` · `Beta` to `"beta"` · `SelfHosted` to `"self-hosted"` | `v1ProjectsProjectIdRequestsGetParametersDeploymentSchema` |
| `V1ProjectsProjectIdRequestsGetParametersEndpoint` | `Listen` to `"listen"` · `Read` to `"read"` · `Speak` to `"speak"` · `Agent` to `"agent"` | `v1ProjectsProjectIdRequestsGetParametersEndpointSchema` |
| `V1ProjectsProjectIdRequestsGetParametersMethod` | `Sync` to `"sync"` · `Async` to `"async"` · `Streaming` to `"streaming"` | `v1ProjectsProjectIdRequestsGetParametersMethodSchema` |
| `V1ProjectsProjectIdRequestsGetParametersStatus` | `Succeeded` to `"succeeded"` · `Failed` to `"failed"` | `v1ProjectsProjectIdRequestsGetParametersStatusSchema` |
| `V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider` | `Quay` to `"quay"` | `v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProviderSchema` |
| `V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems` | `SelfHostedProducts` to `"self-hosted:products"` · `SelfHostedProductApi` to `"self-hosted:product:api"` · `SelfHostedProductEngine` to `"self-hosted:product:engine"` · `SelfHostedProductLicenseProxy` to `"self-hosted:product:license-proxy"` · `SelfHostedProductDgtools` to `"self-hosted:product:dgtools"` · `SelfHostedProductBilling` to `"self-hosted:product:billing"` · `SelfHostedProductHotpepper` to `"self-hosted:product:hotpepper"` · `SelfHostedProductMetricsServer` to `"self-hosted:product:metrics-server"` | `v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItemsSchema` |
| `V1ProjectsProjectIdUsageBreakdownGetParametersDeployment` | `Hosted` to `"hosted"` · `Beta` to `"beta"` · `SelfHosted` to `"self-hosted"` | `v1ProjectsProjectIdUsageBreakdownGetParametersDeploymentSchema` |
| `V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint` | `Listen` to `"listen"` · `Read` to `"read"` · `Speak` to `"speak"` · `Agent` to `"agent"` | `v1ProjectsProjectIdUsageBreakdownGetParametersEndpointSchema` |
| `V1ProjectsProjectIdUsageBreakdownGetParametersGrouping` | `Accessor` to `"accessor"` · `Endpoint` to `"endpoint"` · `FeatureSet` to `"feature_set"` · `Models` to `"models"` · `Method` to `"method"` · `Tags` to `"tags"` · `Deployment` to `"deployment"` | `v1ProjectsProjectIdUsageBreakdownGetParametersGroupingSchema` |
| `V1ProjectsProjectIdUsageBreakdownGetParametersMethod` | `Sync` to `"sync"` · `Async` to `"async"` · `Streaming` to `"streaming"` | `v1ProjectsProjectIdUsageBreakdownGetParametersMethodSchema` |
| `V1ProjectsProjectIdUsageGetParametersDeployment` | `Hosted` to `"hosted"` · `Beta` to `"beta"` · `SelfHosted` to `"self-hosted"` | `v1ProjectsProjectIdUsageGetParametersDeploymentSchema` |
| `V1ProjectsProjectIdUsageGetParametersEndpoint` | `Listen` to `"listen"` · `Read` to `"read"` · `Speak` to `"speak"` · `Agent` to `"agent"` | `v1ProjectsProjectIdUsageGetParametersEndpointSchema` |
| `V1ProjectsProjectIdUsageGetParametersMethod` | `Sync` to `"sync"` · `Async` to `"async"` · `Streaming` to `"streaming"` | `v1ProjectsProjectIdUsageGetParametersMethodSchema` |
| `V1ReadPostParametersCallbackMethod` | `Post` to `"POST"` · `Put` to `"PUT"` | `v1ReadPostParametersCallbackMethodSchema` |
| `V1ReadPostParametersCustomIntentMode` | `Extended` to `"extended"` · `Strict` to `"strict"` | `v1ReadPostParametersCustomIntentModeSchema` |
| `V1ReadPostParametersCustomTopicMode` | `Extended` to `"extended"` · `Strict` to `"strict"` | `v1ReadPostParametersCustomTopicModeSchema` |
| `V1ReadPostParametersSummarize0` | `V2` to `"v2"` | `v1ReadPostParametersSummarize0Schema` |
| `V1SpeakPostParametersBitRate0` | `_32000` to `"32000"` · `_48000` to `"48000"` | `v1SpeakPostParametersBitRate0Schema` |
| `V1SpeakPostParametersCallbackMethod` | `Post` to `"POST"` · `Put` to `"PUT"` | `v1SpeakPostParametersCallbackMethodSchema` |
| `V1SpeakPostParametersContainer0` | `None` to `"none"` | `v1SpeakPostParametersContainer0Schema` |
| `V1SpeakPostParametersContainer1` | `Wav` to `"wav"` | `v1SpeakPostParametersContainer1Schema` |
| `V1SpeakPostParametersContainer2` | `Wav` to `"wav"` | `v1SpeakPostParametersContainer2Schema` |
| `V1SpeakPostParametersContainer3` | `Wav` to `"wav"` | `v1SpeakPostParametersContainer3Schema` |
| `V1SpeakPostParametersContainer4` | `Ogg` to `"ogg"` | `v1SpeakPostParametersContainer4Schema` |
| `V1SpeakPostParametersEncoding0` | `Linear16` to `"linear16"` | `v1SpeakPostParametersEncoding0Schema` |
| `V1SpeakPostParametersEncoding1` | `Flac` to `"flac"` | `v1SpeakPostParametersEncoding1Schema` |
| `V1SpeakPostParametersEncoding2` | `Mulaw` to `"mulaw"` | `v1SpeakPostParametersEncoding2Schema` |
| `V1SpeakPostParametersEncoding3` | `Alaw` to `"alaw"` | `v1SpeakPostParametersEncoding3Schema` |
| `V1SpeakPostParametersEncoding4` | `Mp3` to `"mp3"` | `v1SpeakPostParametersEncoding4Schema` |
| `V1SpeakPostParametersEncoding5` | `Opus` to `"opus"` | `v1SpeakPostParametersEncoding5Schema` |
| `V1SpeakPostParametersEncoding6` | `Aac` to `"aac"` | `v1SpeakPostParametersEncoding6Schema` |
| `V1SpeakPostParametersModel` | `AuraAngusEn` to `"aura-angus-en"` · `AuraArcasEn` to `"aura-arcas-en"` · `AuraAsteriaEn` to `"aura-asteria-en"` · `AuraAthenaEn` to `"aura-athena-en"` · `AuraHeliosEn` to `"aura-helios-en"` · `AuraHeraEn` to `"aura-hera-en"` · `AuraLunaEn` to `"aura-luna-en"` · `AuraOrionEn` to `"aura-orion-en"` · `AuraOrpheusEn` to `"aura-orpheus-en"` · `AuraPerseusEn` to `"aura-perseus-en"` · `AuraStellaEn` to `"aura-stella-en"` · `AuraZeusEn` to `"aura-zeus-en"` · `Aura2AmaltheaEn` to `"aura-2-amalthea-en"` · `Aura2AndromedaEn` to `"aura-2-andromeda-en"` · `Aura2ApolloEn` to `"aura-2-apollo-en"` · `Aura2ArcasEn` to `"aura-2-arcas-en"` · `Aura2AriesEn` to `"aura-2-aries-en"` · `Aura2AsteriaEn` to `"aura-2-asteria-en"` · `Aura2AthenaEn` to `"aura-2-athena-en"` · `Aura2AtlasEn` to `"aura-2-atlas-en"` · `Aura2AuroraEn` to `"aura-2-aurora-en"` · `Aura2CallistaEn` to `"aura-2-callista-en"` · `Aura2CoraEn` to `"aura-2-cora-en"` · `Aura2CordeliaEn` to `"aura-2-cordelia-en"` · `Aura2DeliaEn` to `"aura-2-delia-en"` · `Aura2DracoEn` to `"aura-2-draco-en"` · `Aura2ElectraEn` to `"aura-2-electra-en"` · `Aura2HarmoniaEn` to `"aura-2-harmonia-en"` · `Aura2HelenaEn` to `"aura-2-helena-en"` · `Aura2HeraEn` to `"aura-2-hera-en"` · `Aura2HermesEn` to `"aura-2-hermes-en"` · `Aura2HyperionEn` to `"aura-2-hyperion-en"` · `Aura2IrisEn` to `"aura-2-iris-en"` · `Aura2JanusEn` to `"aura-2-janus-en"` · `Aura2JunoEn` to `"aura-2-juno-en"` · `Aura2JupiterEn` to `"aura-2-jupiter-en"` · `Aura2LunaEn` to `"aura-2-luna-en"` · `Aura2MarsEn` to `"aura-2-mars-en"` · `Aura2MinervaEn` to `"aura-2-minerva-en"` · `Aura2NeptuneEn` to `"aura-2-neptune-en"` · `Aura2OdysseusEn` to `"aura-2-odysseus-en"` · `Aura2OpheliaEn` to `"aura-2-ophelia-en"` · `Aura2OrionEn` to `"aura-2-orion-en"` · `Aura2OrpheusEn` to `"aura-2-orpheus-en"` · `Aura2PandoraEn` to `"aura-2-pandora-en"` · `Aura2PhoebeEn` to `"aura-2-phoebe-en"` · `Aura2PlutoEn` to `"aura-2-pluto-en"` · `Aura2SaturnEn` to `"aura-2-saturn-en"` · `Aura2SeleneEn` to `"aura-2-selene-en"` · `Aura2ThaliaEn` to `"aura-2-thalia-en"` · `Aura2TheiaEn` to `"aura-2-theia-en"` · `Aura2VestaEn` to `"aura-2-vesta-en"` · `Aura2ZeusEn` to `"aura-2-zeus-en"` · `Aura2AgustinaEs` to `"aura-2-agustina-es"` · `Aura2AlvaroEs` to `"aura-2-alvaro-es"` · `Aura2AntoniaEs` to `"aura-2-antonia-es"` · `Aura2AquilaEs` to `"aura-2-aquila-es"` · `Aura2CarinaEs` to `"aura-2-carina-es"` · `Aura2CelesteEs` to `"aura-2-celeste-es"` · `Aura2DianaEs` to `"aura-2-diana-es"` · `Aura2EstrellaEs` to `"aura-2-estrella-es"` · `Aura2GloriaEs` to `"aura-2-gloria-es"` · `Aura2JavierEs` to `"aura-2-javier-es"` · `Aura2LucianoEs` to `"aura-2-luciano-es"` · `Aura2NestorEs` to `"aura-2-nestor-es"` · `Aura2OliviaEs` to `"aura-2-olivia-es"` · `Aura2SelenaEs` to `"aura-2-selena-es"` · `Aura2SilviaEs` to `"aura-2-silvia-es"` · `Aura2SirioEs` to `"aura-2-sirio-es"` · `Aura2ValerioEs` to `"aura-2-valerio-es"` · `Aura2AureliaDe` to `"aura-2-aurelia-de"` · `Aura2ElaraDe` to `"aura-2-elara-de"` · `Aura2FabianDe` to `"aura-2-fabian-de"` · `Aura2JuliusDe` to `"aura-2-julius-de"` · `Aura2KaraDe` to `"aura-2-kara-de"` · `Aura2LaraDe` to `"aura-2-lara-de"` · `Aura2ViktoriaDe` to `"aura-2-viktoria-de"` · `Aura2BeatrixNl` to `"aura-2-beatrix-nl"` · `Aura2CorneliaNl` to `"aura-2-cornelia-nl"` · `Aura2DaphneNl` to `"aura-2-daphne-nl"` · `Aura2HestiaNl` to `"aura-2-hestia-nl"` · `Aura2LarsNl` to `"aura-2-lars-nl"` · `Aura2LedaNl` to `"aura-2-leda-nl"` · `Aura2RheaNl` to `"aura-2-rhea-nl"` · `Aura2RomanNl` to `"aura-2-roman-nl"` · `Aura2SanderNl` to `"aura-2-sander-nl"` · `Aura2AgatheFr` to `"aura-2-agathe-fr"` · `Aura2HectorFr` to `"aura-2-hector-fr"` · `Aura2CesareIt` to `"aura-2-cesare-it"` · `Aura2CinziaIt` to `"aura-2-cinzia-it"` · `Aura2DemetraIt` to `"aura-2-demetra-it"` · `Aura2DionisioIt` to `"aura-2-dionisio-it"` · `Aura2ElioIt` to `"aura-2-elio-it"` · `Aura2FlavioIt` to `"aura-2-flavio-it"` · `Aura2LiviaIt` to `"aura-2-livia-it"` · `Aura2MaiaIt` to `"aura-2-maia-it"` · `Aura2MeliaIt` to `"aura-2-melia-it"` · `Aura2PerseoIt` to `"aura-2-perseo-it"` · `Aura2AmaJa` to `"aura-2-ama-ja"` · `Aura2EbisuJa` to `"aura-2-ebisu-ja"` · `Aura2FujinJa` to `"aura-2-fujin-ja"` · `Aura2IzanamiJa` to `"aura-2-izanami-ja"` · `Aura2UzumeJa` to `"aura-2-uzume-ja"` | `v1SpeakPostParametersModelSchema` |
| `V1SpeakPostParametersSampleRate0` | `_8000` to `"8000"` · `_16000` to `"16000"` · `_24000` to `"24000"` · `_32000` to `"32000"` · `_48000` to `"48000"` | `v1SpeakPostParametersSampleRate0Schema` |
| `V1SpeakPostParametersSampleRate1` | `_8000` to `"8000"` · `_16000` to `"16000"` | `v1SpeakPostParametersSampleRate1Schema` |
| `V1SpeakPostParametersSampleRate2` | `_8000` to `"8000"` · `_16000` to `"16000"` | `v1SpeakPostParametersSampleRate2Schema` |
| `V1SpeakPostParametersSampleRate3` | `_22050` to `"22050"` | `v1SpeakPostParametersSampleRate3Schema` |
| `V1SpeakPostParametersSampleRate4` | `_48000` to `"48000"` | `v1SpeakPostParametersSampleRate4Schema` |
| `V2SpeakPostParametersBitRate0` | `_8000` to `"8000"` · `_16000` to `"16000"` · `_24000` to `"24000"` · `_32000` to `"32000"` · `_40000` to `"40000"` · `_48000` to `"48000"` | `v2SpeakPostParametersBitRate0Schema` |
| `V2SpeakPostParametersCallbackMethod` | `Post` to `"POST"` · `Put` to `"PUT"` | `v2SpeakPostParametersCallbackMethodSchema` |
| `V2SpeakPostParametersContainer0` | `None` to `"none"` | `v2SpeakPostParametersContainer0Schema` |
| `V2SpeakPostParametersContainer1` | `Wav` to `"wav"` | `v2SpeakPostParametersContainer1Schema` |
| `V2SpeakPostParametersContainer2` | `Wav` to `"wav"` | `v2SpeakPostParametersContainer2Schema` |
| `V2SpeakPostParametersContainer3` | `Wav` to `"wav"` | `v2SpeakPostParametersContainer3Schema` |
| `V2SpeakPostParametersContainer4` | `Ogg` to `"ogg"` | `v2SpeakPostParametersContainer4Schema` |
| `V2SpeakPostParametersEncoding0` | `Linear16` to `"linear16"` | `v2SpeakPostParametersEncoding0Schema` |
| `V2SpeakPostParametersEncoding1` | `Flac` to `"flac"` | `v2SpeakPostParametersEncoding1Schema` |
| `V2SpeakPostParametersEncoding2` | `Mulaw` to `"mulaw"` | `v2SpeakPostParametersEncoding2Schema` |
| `V2SpeakPostParametersEncoding3` | `Alaw` to `"alaw"` | `v2SpeakPostParametersEncoding3Schema` |
| `V2SpeakPostParametersEncoding4` | `Mp3` to `"mp3"` | `v2SpeakPostParametersEncoding4Schema` |
| `V2SpeakPostParametersEncoding5` | `Opus` to `"opus"` | `v2SpeakPostParametersEncoding5Schema` |
| `V2SpeakPostParametersEncoding6` | `Aac` to `"aac"` | `v2SpeakPostParametersEncoding6Schema` |
| `V2SpeakPostParametersPriority` | `Low` to `"low"` | `v2SpeakPostParametersPrioritySchema` |
| `V2SpeakPostParametersSampleRate0` | `_8000` to `"8000"` · `_16000` to `"16000"` · `_24000` to `"24000"` · `_32000` to `"32000"` · `_44100` to `"44100"` · `_48000` to `"48000"` | `v2SpeakPostParametersSampleRate0Schema` |
| `V2SpeakPostParametersSampleRate1` | `_8000` to `"8000"` · `_16000` to `"16000"` | `v2SpeakPostParametersSampleRate1Schema` |
| `V2SpeakPostParametersSampleRate2` | `_8000` to `"8000"` · `_16000` to `"16000"` | `v2SpeakPostParametersSampleRate2Schema` |
| `V2SpeakPostParametersSampleRate3` | `_8000` to `"8000"` · `_16000` to `"16000"` · `_22050` to `"22050"` · `_32000` to `"32000"` · `_48000` to `"48000"` | `v2SpeakPostParametersSampleRate3Schema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `AgentThinkModelsV1ResponseModelsItems` | no discriminant | `typeof`, or an `in` check | `src/models/unions/agent-think-models-v1-response-models-items.ts` |
| `CreateKeyV1Request` | no discriminant | `typeof`, or an `in` check | `src/models/unions/create-key-v1-request.ts` |
| `ErrorResponse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/error-response.ts` |
| `GetModelV1Response` | no discriminant | `typeof`, or an `in` check | `src/models/unions/get-model-v1-response.ts` |
| `ReadV1Request` | no discriminant | `typeof`, or an `in` check | `src/models/unions/read-v1-request.ts` |
| `V1ListenPostParametersCustomIntent` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-custom-intent.ts` |
| `V1ListenPostParametersCustomTopic` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-custom-topic.ts` |
| `V1ListenPostParametersDetectLanguage` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-detect-language.ts` |
| `V1ListenPostParametersExtra` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-extra.ts` |
| `V1ListenPostParametersKeywords` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-keywords.ts` |
| `V1ListenPostParametersModel` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-model.ts` |
| `V1ListenPostParametersRedact` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-redact.ts` |
| `V1ListenPostParametersReplace` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-replace.ts` |
| `V1ListenPostParametersSearch` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-search.ts` |
| `V1ListenPostParametersSummarize` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-summarize.ts` |
| `V1ListenPostParametersTag` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-tag.ts` |
| `V1ListenPostParametersVersion` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-listen-post-parameters-version.ts` |
| `V1ReadPostParametersCustomIntent` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-read-post-parameters-custom-intent.ts` |
| `V1ReadPostParametersCustomTopic` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-read-post-parameters-custom-topic.ts` |
| `V1ReadPostParametersSummarize` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-read-post-parameters-summarize.ts` |
| `V1ReadPostParametersTag` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-read-post-parameters-tag.ts` |
| `V1SpeakPostParametersBitRate` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-speak-post-parameters-bit-rate.ts` |
| `V1SpeakPostParametersContainer` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-speak-post-parameters-container.ts` |
| `V1SpeakPostParametersEncoding` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-speak-post-parameters-encoding.ts` |
| `V1SpeakPostParametersSampleRate` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-speak-post-parameters-sample-rate.ts` |
| `V1SpeakPostParametersTag` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v1-speak-post-parameters-tag.ts` |
| `V2SpeakPostParametersBitRate` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v2-speak-post-parameters-bit-rate.ts` |
| `V2SpeakPostParametersContainer` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v2-speak-post-parameters-container.ts` |
| `V2SpeakPostParametersEncoding` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v2-speak-post-parameters-encoding.ts` |
| `V2SpeakPostParametersSampleRate` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v2-speak-post-parameters-sample-rate.ts` |
| `V2SpeakPostParametersTag` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v2-speak-post-parameters-tag.ts` |
| `ListenV1MediaTranscribeResponse200` | no discriminant | `typeof`, or an `in` check | `src/models/unions/listen-v1-media-transcribe-response200.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AgentConfigurationV1` | `agentId` | `agent_id` |
| `AgentConfigurationV1` | `createdAt` | `created_at` |
| `AgentConfigurationV1` | `updatedAt` | `updated_at` |
| `AgentVariableV1` | `variableId` | `variable_id` |
| `AgentVariableV1` | `createdAt` | `created_at` |
| `AgentVariableV1` | `updatedAt` | `updated_at` |
| `BillingBreakdownV1ResponseResultsItemsGrouping` | `lineItem` | `line_item` |
| `CreateAgentConfigurationV1Request` | `apiVersion` | `api_version` |
| `CreateAgentConfigurationV1Response` | `agentId` | `agent_id` |
| `CreateAgentVariableV1Request` | `apiVersion` | `api_version` |
| `CreateKeyV1Response` | `apiKeyId` | `api_key_id` |
| `CreateKeyV1Response` | `expirationDate` | `expiration_date` |
| `CreateProjectDistributionCredentialsV1Response` | `distributionCredentials` | `distribution_credentials` |
| `CreateProjectDistributionCredentialsV1ResponseDistributionCredentials` | `distributionCredentialsId` | `distribution_credentials_id` |
| `CreateProjectDistributionCredentialsV1ResponseMember` | `memberId` | `member_id` |
| `ErrorResponseLegacyError` | `errCode` | `err_code` |
| `ErrorResponseLegacyError` | `errMsg` | `err_msg` |
| `ErrorResponseLegacyError` | `requestId` | `request_id` |
| `ErrorResponseModernError` | `requestId` | `request_id` |
| `GetModelV1Response0` | `canonicalName` | `canonical_name` |
| `GetModelV1Response0` | `formattedOutput` | `formatted_output` |
| `GetModelV1Response1` | `canonicalName` | `canonical_name` |
| `GetModelV1ResponseOneOf1Metadata` | `useCases` | `use_cases` |
| `GetProjectBalanceV1Response` | `balanceId` | `balance_id` |
| `GetProjectBalanceV1Response` | `purchaseOrderId` | `purchase_order_id` |
| `GetProjectDistributionCredentialsV1Response` | `distributionCredentials` | `distribution_credentials` |
| `GetProjectDistributionCredentialsV1ResponseDistributionCredentials` | `distributionCredentialsId` | `distribution_credentials_id` |
| `GetProjectDistributionCredentialsV1ResponseMember` | `memberId` | `member_id` |
| `GetProjectKeyV1ResponseItemMember` | `memberId` | `member_id` |
| `GetProjectKeyV1ResponseItemMember` | `firstName` | `first_name` |
| `GetProjectKeyV1ResponseItemMember` | `lastName` | `last_name` |
| `GetProjectKeyV1ResponseItemMember` | `apiKey` | `api_key` |
| `GetProjectKeyV1ResponseItemMemberApiKey` | `apiKeyId` | `api_key_id` |
| `GetProjectKeyV1ResponseItemMemberApiKey` | `expirationDate` | `expiration_date` |
| `GetProjectV1Response` | `projectId` | `project_id` |
| `GetProjectV1Response` | `mipOptOut` | `mip_opt_out` |
| `GrantV1Request` | `ttlSeconds` | `ttl_seconds` |
| `GrantV1Response` | `accessToken` | `access_token` |
| `GrantV1Response` | `expiresIn` | `expires_in` |
| `ListBillingFieldsV1Response` | `lineItems` | `line_items` |
| `ListModelsV1ResponseSttModels` | `canonicalName` | `canonical_name` |
| `ListModelsV1ResponseSttModels` | `formattedOutput` | `formatted_output` |
| `ListModelsV1ResponseTtsModels` | `canonicalName` | `canonical_name` |
| `ListModelsV1ResponseTtsModelsMetadata` | `useCases` | `use_cases` |
| `ListProjectBalancesV1ResponseBalancesItems` | `balanceId` | `balance_id` |
| `ListProjectBalancesV1ResponseBalancesItems` | `purchaseOrderId` | `purchase_order_id` |
| `ListProjectDistributionCredentialsV1Response` | `distributionCredentials` | `distribution_credentials` |
| `ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems` | `distributionCredentials` | `distribution_credentials` |
| `ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials` | `distributionCredentialsId` | `distribution_credentials_id` |
| `ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember` | `memberId` | `member_id` |
| `ListProjectKeysV1Response` | `apiKeys` | `api_keys` |
| `ListProjectKeysV1ResponseApiKeysItems` | `apiKey` | `api_key` |
| `ListProjectKeysV1ResponseApiKeysItemsApiKey` | `apiKeyId` | `api_key_id` |
| `ListProjectKeysV1ResponseApiKeysItemsMember` | `memberId` | `member_id` |
| `ListProjectMembersV1ResponseMembersItems` | `memberId` | `member_id` |
| `ListProjectMembersV1ResponseMembersItems` | `firstName` | `first_name` |
| `ListProjectMembersV1ResponseMembersItems` | `lastName` | `last_name` |
| `ListProjectPurchasesV1ResponseOrdersItems` | `orderId` | `order_id` |
| `ListProjectPurchasesV1ResponseOrdersItems` | `orderType` | `order_type` |
| `ListProjectsV1ResponseProjectsItems` | `projectId` | `project_id` |
| `ListenV1AcceptedResponse` | `requestId` | `request_id` |
| `ListenV1ResponseMetadata` | `transactionKey` | `transaction_key` |
| `ListenV1ResponseMetadata` | `requestId` | `request_id` |
| `ListenV1ResponseMetadata` | `modelInfo` | `model_info` |
| `ListenV1ResponseMetadata` | `summaryInfo` | `summary_info` |
| `ListenV1ResponseMetadata` | `sentimentInfo` | `sentiment_info` |
| `ListenV1ResponseMetadata` | `topicsInfo` | `topics_info` |
| `ListenV1ResponseMetadata` | `intentsInfo` | `intents_info` |
| `ListenV1ResponseMetadataIntentsInfo` | `modelUuid` | `model_uuid` |
| `ListenV1ResponseMetadataIntentsInfo` | `inputTokens` | `input_tokens` |
| `ListenV1ResponseMetadataIntentsInfo` | `outputTokens` | `output_tokens` |
| `ListenV1ResponseMetadataSentimentInfo` | `modelUuid` | `model_uuid` |
| `ListenV1ResponseMetadataSentimentInfo` | `inputTokens` | `input_tokens` |
| `ListenV1ResponseMetadataSentimentInfo` | `outputTokens` | `output_tokens` |
| `ListenV1ResponseMetadataSummaryInfo` | `modelUuid` | `model_uuid` |
| `ListenV1ResponseMetadataSummaryInfo` | `inputTokens` | `input_tokens` |
| `ListenV1ResponseMetadataSummaryInfo` | `outputTokens` | `output_tokens` |
| `ListenV1ResponseMetadataTopicsInfo` | `modelUuid` | `model_uuid` |
| `ListenV1ResponseMetadataTopicsInfo` | `inputTokens` | `input_tokens` |
| `ListenV1ResponseMetadataTopicsInfo` | `outputTokens` | `output_tokens` |
| `ListenV1ResponseResultsChannelsItems` | `detectedLanguage` | `detected_language` |
| `ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems` | `rawValue` | `raw_value` |
| `ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems` | `startWord` | `start_word` |
| `ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems` | `endWord` | `end_word` |
| `ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems` | `numWords` | `num_words` |
| `ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems` | `startWord` | `start_word` |
| `ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems` | `endWord` | `end_word` |
| `ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems` | `startWord` | `start_word` |
| `ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems` | `endWord` | `end_word` |
| `ListenV1ResponseResultsUtterancesItemsWordsItems` | `speakerConfidence` | `speaker_confidence` |
| `ListenV1ResponseResultsUtterancesItemsWordsItems` | `punctuatedWord` | `punctuated_word` |
| `ProjectRequestResponse` | `requestId` | `request_id` |
| `ProjectRequestResponse` | `projectUuid` | `project_uuid` |
| `ProjectRequestResponse` | `apiKeyId` | `api_key_id` |
| `ReadV1ResponseMetadataMetadata` | `requestId` | `request_id` |
| `ReadV1ResponseMetadataMetadata` | `summaryInfo` | `summary_info` |
| `ReadV1ResponseMetadataMetadata` | `sentimentInfo` | `sentiment_info` |
| `ReadV1ResponseMetadataMetadata` | `topicsInfo` | `topics_info` |
| `ReadV1ResponseMetadataMetadata` | `intentsInfo` | `intents_info` |
| `ReadV1ResponseMetadataMetadataIntentsInfo` | `modelUuid` | `model_uuid` |
| `ReadV1ResponseMetadataMetadataIntentsInfo` | `inputTokens` | `input_tokens` |
| `ReadV1ResponseMetadataMetadataIntentsInfo` | `outputTokens` | `output_tokens` |
| `ReadV1ResponseMetadataMetadataSentimentInfo` | `modelUuid` | `model_uuid` |
| `ReadV1ResponseMetadataMetadataSentimentInfo` | `inputTokens` | `input_tokens` |
| `ReadV1ResponseMetadataMetadataSentimentInfo` | `outputTokens` | `output_tokens` |
| `ReadV1ResponseMetadataMetadataSummaryInfo` | `modelUuid` | `model_uuid` |
| `ReadV1ResponseMetadataMetadataSummaryInfo` | `inputTokens` | `input_tokens` |
| `ReadV1ResponseMetadataMetadataSummaryInfo` | `outputTokens` | `output_tokens` |
| `ReadV1ResponseMetadataMetadataTopicsInfo` | `modelUuid` | `model_uuid` |
| `ReadV1ResponseMetadataMetadataTopicsInfo` | `inputTokens` | `input_tokens` |
| `ReadV1ResponseMetadataMetadataTopicsInfo` | `outputTokens` | `output_tokens` |
| `SharedIntentsResultsIntentsSegmentsItems` | `startWord` | `start_word` |
| `SharedIntentsResultsIntentsSegmentsItems` | `endWord` | `end_word` |
| `SharedIntentsResultsIntentsSegmentsItemsIntentsItems` | `confidenceScore` | `confidence_score` |
| `SharedSentimentsAverage` | `sentimentScore` | `sentiment_score` |
| `SharedSentimentsSegmentsItems` | `startWord` | `start_word` |
| `SharedSentimentsSegmentsItems` | `endWord` | `end_word` |
| `SharedSentimentsSegmentsItems` | `sentimentScore` | `sentiment_score` |
| `SharedTopicsResultsTopicsSegmentsItems` | `startWord` | `start_word` |
| `SharedTopicsResultsTopicsSegmentsItems` | `endWord` | `end_word` |
| `SharedTopicsResultsTopicsSegmentsItemsTopicsItems` | `confidenceScore` | `confidence_score` |
| `SpeakV2AcceptedResponse` | `requestId` | `request_id` |
| `UsageBreakdownV1ResponseResultsItems` | `totalHours` | `total_hours` |
| `UsageBreakdownV1ResponseResultsItems` | `agentHours` | `agent_hours` |
| `UsageBreakdownV1ResponseResultsItems` | `tokensIn` | `tokens_in` |
| `UsageBreakdownV1ResponseResultsItems` | `tokensOut` | `tokens_out` |
| `UsageBreakdownV1ResponseResultsItems` | `ttsCharacters` | `tts_characters` |
| `UsageBreakdownV1ResponseResultsItemsGrouping` | `featureSet` | `feature_set` |
| `UsageFieldsV1Response` | `processingMethods` | `processing_methods` |
| `UsageFieldsV1ResponseModelsItems` | `modelId` | `model_id` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **50 of the 50 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `apiKeyAuth` | `apiKeyAuth` | header `Authorization: <key>` |
| `jwtAuth` | `jwtAuth` | `Authorization: Bearer <token>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |
| `ServerEnvironment.Environment2` | `environment2` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://agent.deepgram.com` | — |
| `default` | `environment2` | `https://api.deepgram.com` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("deepgram")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Nothing else — no credential this SDK sends reaches for a further global. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

