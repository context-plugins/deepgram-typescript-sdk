import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListProjectPurchasesV1ResponseOrdersItems = {
  orderId?: string;
  expiration?: Date;
  created?: Date;
  amount?: number;
  units?: string;
  orderType?: string;
};

export const listProjectPurchasesV1ResponseOrdersItemsSchema: Schema<ListProjectPurchasesV1ResponseOrdersItems> =
  s.object<ListProjectPurchasesV1ResponseOrdersItems>({
    orderId: s.optional(s.string()),
    expiration: s.optional(s.dateTime()),
    created: s.optional(s.dateTime()),
    amount: s.optional(s.number()),
    units: s.optional(s.string()),
    orderType: s.optional(s.string()),
    _keysMap: {
      orderId: "order_id",
      orderType: "order_type",
    },
  });
