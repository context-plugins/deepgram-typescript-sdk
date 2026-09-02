import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetProjectBalanceV1Response = {
  balanceId?: string;
  amount?: number;
  units?: string;
  purchaseOrderId?: string;
};

export const getProjectBalanceV1ResponseSchema: Schema<GetProjectBalanceV1Response> =
  s.object<GetProjectBalanceV1Response>({
    balanceId: s.optional(s.string()),
    amount: s.optional(s.number()),
    units: s.optional(s.string()),
    purchaseOrderId: s.optional(s.string()),
    _keysMap: {
      balanceId: "balance_id",
      purchaseOrderId: "purchase_order_id",
    },
  });
