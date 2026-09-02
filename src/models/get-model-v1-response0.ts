import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetModelV1Response0 = {
  name?: string;
  canonicalName?: string;
  architecture?: string;
  languages?: string[];
  version?: string;
  uuid?: string;
  batch?: boolean;
  streaming?: boolean;
  formattedOutput?: boolean;
};

export const getModelV1Response0Schema: Schema<GetModelV1Response0> = s.object<GetModelV1Response0>({
  name: s.optional(s.string()),
  canonicalName: s.optional(s.string()),
  architecture: s.optional(s.string()),
  languages: s.optional(s.array(s.string())),
  version: s.optional(s.string()),
  uuid: s.optional(s.string()),
  batch: s.optional(s.boolean()),
  streaming: s.optional(s.boolean()),
  formattedOutput: s.optional(s.boolean()),
  _keysMap: {
    canonicalName: "canonical_name",
    formattedOutput: "formatted_output",
  },
});
