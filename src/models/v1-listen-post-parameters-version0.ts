import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ListenPostParametersVersion0 = {
  Latest: "latest",
} as const;
export type V1ListenPostParametersVersion0 =
  | (typeof V1ListenPostParametersVersion0)[keyof typeof V1ListenPostParametersVersion0]
  | (string & {});

export const v1ListenPostParametersVersion0Schema: EnumSchema<V1ListenPostParametersVersion0> =
  s.enumOf<V1ListenPostParametersVersion0>(V1ListenPostParametersVersion0);
