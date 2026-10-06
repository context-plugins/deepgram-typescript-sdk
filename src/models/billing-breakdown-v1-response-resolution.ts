import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingBreakdownV1ResponseResolution = {
  /** Time unit for the resolution */
  units: string;
  /** Amount of units */
  amount: number;
};

export const billingBreakdownV1ResponseResolutionSchema: Schema<BillingBreakdownV1ResponseResolution> =
  s.object<BillingBreakdownV1ResponseResolution>({
    units: s.string(),
    amount: s.float64(),
  });
