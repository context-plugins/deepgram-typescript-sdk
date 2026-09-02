import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1ListenPostParametersRedactSchemaOneOf1Items = {
  Pci: "pci",
  Pii: "pii",
  Numbers: "numbers",
} as const;
export type V1ListenPostParametersRedactSchemaOneOf1Items =
  | (typeof V1ListenPostParametersRedactSchemaOneOf1Items)[keyof typeof V1ListenPostParametersRedactSchemaOneOf1Items]
  | (string & {});

export const v1ListenPostParametersRedactSchemaOneOf1ItemsSchema: EnumSchema<V1ListenPostParametersRedactSchemaOneOf1Items> =
  s.enumOf<V1ListenPostParametersRedactSchemaOneOf1Items>(V1ListenPostParametersRedactSchemaOneOf1Items);
