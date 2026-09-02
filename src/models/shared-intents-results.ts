import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sharedIntentsResultsIntentsSchema,
  type SharedIntentsResultsIntents,
} from "./shared-intents-results-intents.js";

export type SharedIntentsResults = {
  intents?: SharedIntentsResultsIntents;
};

export const sharedIntentsResultsSchema: Schema<SharedIntentsResults> = s.object<SharedIntentsResults>({
  intents: s.optional(s.lazy(() => sharedIntentsResultsIntentsSchema)),
});
