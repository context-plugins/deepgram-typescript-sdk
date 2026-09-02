import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListModelsV1ResponseTtsModelsMetadata = {
  accent?: string;
  age?: string;
  color?: string;
  image?: string;
  sample?: string;
  tags?: string[];
  useCases?: string[];
};

export const listModelsV1ResponseTtsModelsMetadataSchema: Schema<ListModelsV1ResponseTtsModelsMetadata> =
  s.object<ListModelsV1ResponseTtsModelsMetadata>({
    accent: s.optional(s.string()),
    age: s.optional(s.string()),
    color: s.optional(s.string()),
    image: s.optional(s.string()),
    sample: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    useCases: s.optional(s.array(s.string())),
    _keysMap: {
      useCases: "use_cases",
    },
  });
