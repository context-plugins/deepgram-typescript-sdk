import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  errorResponseLegacyErrorSchema,
  type ErrorResponseLegacyError,
} from "../error-response-legacy-error.js";
import {
  errorResponseModernErrorSchema,
  type ErrorResponseModernError,
} from "../error-response-modern-error.js";

export type ErrorResponse = string | ErrorResponseLegacyError | ErrorResponseModernError;

export const errorResponseSchema: Schema<ErrorResponse> = s.of<ErrorResponse>(
  s.union([
    s.string(),
    s.lazy(() => errorResponseLegacyErrorSchema),
    s.lazy(() => errorResponseModernErrorSchema),
  ]),
);
