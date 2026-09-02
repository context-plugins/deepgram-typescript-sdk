import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectPurchasesV1ResponseOrdersItemsSchema,
  type ListProjectPurchasesV1ResponseOrdersItems,
} from "./list-project-purchases-v1-response-orders-items.js";

export type ListProjectPurchasesV1Response = {
  orders?: ListProjectPurchasesV1ResponseOrdersItems[];
};

export const listProjectPurchasesV1ResponseSchema: Schema<ListProjectPurchasesV1Response> =
  s.object<ListProjectPurchasesV1Response>({
    orders: s.optional(s.array(s.lazy(() => listProjectPurchasesV1ResponseOrdersItemsSchema))),
  });
