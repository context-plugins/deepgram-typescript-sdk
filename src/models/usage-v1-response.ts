import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usageV1ResponseResolutionSchema,
  type UsageV1ResponseResolution,
} from "./usage-v1-response-resolution.js";

export type UsageV1Response = {
  start?: string;
  end?: string;
  resolution?: UsageV1ResponseResolution;
};

export const usageV1ResponseSchema: Schema<UsageV1Response> = s.object<UsageV1Response>({
  start: s.optional(s.dateOnly()),
  end: s.optional(s.dateOnly()),
  resolution: s.optional(s.lazy(() => usageV1ResponseResolutionSchema)),
});
