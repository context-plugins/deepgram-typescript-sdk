import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sharedIntentsResultsSchema, type SharedIntentsResults } from "./shared-intents-results.js";

/** Output whenever `intents=true` is used */
export type SharedIntents = {
  results?: SharedIntentsResults;
};

export const sharedIntentsSchema: Schema<SharedIntents> = s.object<SharedIntents>({
  results: s.optional(s.lazy(() => sharedIntentsResultsSchema)),
});
