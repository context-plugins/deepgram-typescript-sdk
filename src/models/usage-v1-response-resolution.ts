import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageV1ResponseResolution = {
  units?: string;
  amount?: number;
};

export const usageV1ResponseResolutionSchema: Schema<UsageV1ResponseResolution> =
  s.object<UsageV1ResponseResolution>({
    units: s.optional(s.string()),
    amount: s.optional(s.float64()),
  });
