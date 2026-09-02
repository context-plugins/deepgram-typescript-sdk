import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, bearerAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
  readonly jwtAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyAuth: apiKeyHeaderAuth({ name: "Authorization", token: options.apiKeyAuth }),
    jwtAuth: bearerAuth(options.jwtAuth),
  };
}
