import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorResponseModernError = {
  /** The category of the error */
  category?: string;
  /** A message about the error */
  message?: string;
  /** A description of the error */
  details?: string;
  /** The unique identifier of the request */
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
