import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems = {
  SelfHostedProducts: "self-hosted:products",
  SelfHostedProductApi: "self-hosted:product:api",
  SelfHostedProductEngine: "self-hosted:product:engine",
  SelfHostedProductLicenseProxy: "self-hosted:product:license-proxy",
  SelfHostedProductDgtools: "self-hosted:product:dgtools",
  SelfHostedProductBilling: "self-hosted:product:billing",
  SelfHostedProductHotpepper: "self-hosted:product:hotpepper",
  SelfHostedProductMetricsServer: "self-hosted:product:metrics-server",
} as const;
export type V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems =
  | (typeof V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems)[keyof typeof V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems]
  | (string & {});

export const v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItemsSchema: EnumSchema<V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems> =
  s.enumOf<V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems>(
    V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems,
  );
