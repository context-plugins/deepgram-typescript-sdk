import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Use `Authorization: Token <API_KEY>` Example: `Authorization: Token 12345abcdef` */
  readonly apiKeyAuth?: TokenProvider | undefined;
  /** Use `Authorization: Bearer <JWT>` Example: `Authorization: Bearer eyJhbGciOiJ...` */
  readonly jwtAuth?: TokenProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Production */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Production */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
