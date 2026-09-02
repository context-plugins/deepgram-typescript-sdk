import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ProjectsProjectIdKeysGetParametersStatus = {
  Active: "active",
  Expired: "expired",
} as const;
export type V1ProjectsProjectIdKeysGetParametersStatus =
  | (typeof V1ProjectsProjectIdKeysGetParametersStatus)[keyof typeof V1ProjectsProjectIdKeysGetParametersStatus]
  | (string & {});

export const v1ProjectsProjectIdKeysGetParametersStatusSchema: EnumSchema<V1ProjectsProjectIdKeysGetParametersStatus> =
  s.enumOf<V1ProjectsProjectIdKeysGetParametersStatus>(V1ProjectsProjectIdKeysGetParametersStatus);
