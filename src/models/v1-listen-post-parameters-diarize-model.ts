import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ListenPostParametersDiarizeModel = {
  Latest: "latest",
  V1: "v1",
  V2: "v2",
} as const;
export type V1ListenPostParametersDiarizeModel =
  | (typeof V1ListenPostParametersDiarizeModel)[keyof typeof V1ListenPostParametersDiarizeModel]
  | (string & {});

export const v1ListenPostParametersDiarizeModelSchema: EnumSchema<V1ListenPostParametersDiarizeModel> =
  s.enumOf<V1ListenPostParametersDiarizeModel>(V1ListenPostParametersDiarizeModel);
