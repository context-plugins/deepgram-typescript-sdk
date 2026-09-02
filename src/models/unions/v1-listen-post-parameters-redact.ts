import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1ListenPostParametersRedactSchemaOneOf1ItemsSchema,
  type V1ListenPostParametersRedactSchemaOneOf1Items,
} from "../v1-listen-post-parameters-redact-schema-one-of1-items.js";

export type V1ListenPostParametersRedact = string | V1ListenPostParametersRedactSchemaOneOf1Items[];

export const v1ListenPostParametersRedactSchema: Schema<V1ListenPostParametersRedact> =
  s.of<V1ListenPostParametersRedact>(
    s.union([s.string(), s.array(s.lazy(() => v1ListenPostParametersRedactSchemaOneOf1ItemsSchema))]),
  );
