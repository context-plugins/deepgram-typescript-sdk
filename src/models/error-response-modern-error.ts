import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorResponseModernError = {
  category?: string;
  message?: string;
  details?: string;
  requestId?: string;
};

export const errorResponseModernErrorSchema: Schema<ErrorResponseModernError> =
  s.object<ErrorResponseModernError>({
    category: s.optional(s.string()),
    message: s.optional(s.string()),
    details: s.optional(s.string()),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
