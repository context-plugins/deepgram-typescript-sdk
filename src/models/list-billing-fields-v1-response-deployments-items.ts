import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ListBillingFieldsV1ResponseDeploymentsItems = {
  Hosted: "hosted",
  Beta: "beta",
  SelfHosted: "self-hosted",
  Dedicated: "dedicated",
} as const;
export type ListBillingFieldsV1ResponseDeploymentsItems =
  | (typeof ListBillingFieldsV1ResponseDeploymentsItems)[keyof typeof ListBillingFieldsV1ResponseDeploymentsItems]
  | (string & {});

export const listBillingFieldsV1ResponseDeploymentsItemsSchema: EnumSchema<ListBillingFieldsV1ResponseDeploymentsItems> =
  s.enumOf<ListBillingFieldsV1ResponseDeploymentsItems>(ListBillingFieldsV1ResponseDeploymentsItems);
