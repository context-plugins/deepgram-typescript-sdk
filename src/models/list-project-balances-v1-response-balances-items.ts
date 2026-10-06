import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectBalancesV1ResponseBalancesItems = {
  /** The unique identifier of the balance */
  balanceId?: string;
  /** The amount of the balance @default 0 */
  amount?: number;
  /** The units of the balance, such as "USD" */
  units?: string;
  /** Description or reference of the purchase */
  purchaseOrderId?: string;
};

export const listProjectBalancesV1ResponseBalancesItemsSchema: Schema<ListProjectBalancesV1ResponseBalancesItems> =
  s.object<ListProjectBalancesV1ResponseBalancesItems>({
    balanceId: s.optional(s.string()),
    amount: s.defaulted(s.float64(), 0),
    units: s.optional(s.string()),
    purchaseOrderId: s.optional(s.string()),
    _keysMap: {
      balanceId: "balance_id",
      purchaseOrderId: "purchase_order_id",
    },
  });
