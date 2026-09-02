import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider = {
  Quay: "quay",
} as const;
export type V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider =
  | (typeof V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider)[keyof typeof V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider]
  | (string & {});

export const v1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProviderSchema: EnumSchema<V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider> =
  s.enumOf<V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider>(
    V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider,
  );
