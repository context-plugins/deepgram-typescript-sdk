import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listProjectBalancesV1ResponseBalancesItemsSchema,
  type ListProjectBalancesV1ResponseBalancesItems,
} from "./list-project-balances-v1-response-balances-items.js";

export type ListProjectBalancesV1Response = {
  balances?: ListProjectBalancesV1ResponseBalancesItems[];
};

export const listProjectBalancesV1ResponseSchema: Schema<ListProjectBalancesV1Response> =
  s.object<ListProjectBalancesV1Response>({
    balances: s.optional(s.array(s.lazy(() => listProjectBalancesV1ResponseBalancesItemsSchema))),
  });
