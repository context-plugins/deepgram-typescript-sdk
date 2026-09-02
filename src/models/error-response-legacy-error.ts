import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorResponseLegacyError = {
  errCode?: string;
  errMsg?: string;
  requestId?: string;
};

export const errorResponseLegacyErrorSchema: Schema<ErrorResponseLegacyError> =
  s.object<ErrorResponseLegacyError>({
    errCode: s.optional(s.string()),
    errMsg: s.optional(s.string()),
    requestId: s.optional(s.string()),
    _keysMap: {
      errCode: "err_code",
      errMsg: "err_msg",
      requestId: "request_id",
    },
  });
