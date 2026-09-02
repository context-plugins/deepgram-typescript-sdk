import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageBreakdownV1ResponseResolution = {
  units: string;
  amount: number;
};

export const usageBreakdownV1ResponseResolutionSchema: Schema<UsageBreakdownV1ResponseResolution> =
  s.object<UsageBreakdownV1ResponseResolution>({
    units: s.string(),
    amount: s.number(),
  });
