import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listBillingFieldsV1ResponseDeploymentsItemsSchema,
  type ListBillingFieldsV1ResponseDeploymentsItems,
} from "./list-billing-fields-v1-response-deployments-items.js";

export type ListBillingFieldsV1Response = {
  /** List of accessor UUIDs for the time period */
  accessors?: string[];
  /** List of deployment types for the time period */
  deployments?: ListBillingFieldsV1ResponseDeploymentsItems[];
  /** List of tags for the time period */
  tags?: string[];
  /** Map of line item names to human-readable descriptions for the time period */
  lineItems?: Record<string, string>;
};

export const listBillingFieldsV1ResponseSchema: Schema<ListBillingFieldsV1Response> =
  s.object<ListBillingFieldsV1Response>({
    accessors: s.optional(s.array(s.string())),
    deployments: s.optional(s.array(s.lazy(() => listBillingFieldsV1ResponseDeploymentsItemsSchema))),
    tags: s.optional(s.array(s.string())),
    lineItems: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      lineItems: "line_items",
    },
  });
